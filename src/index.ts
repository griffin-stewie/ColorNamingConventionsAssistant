import { AssistantPackage, RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const colorName: RuleDefinition = {
  rule: async (context) => {
    const { utils } = context
    // Iterate
    for (const swatch of utils.objects.swatch) {
      utils.report(`${swatch.name}`)
    }
  },
  name: 'color-naming-conventions-assistant/color-name',
  title: 'Color Naming Conventions Assistant',
  description: 'Reports Color Variables naming conventions',
}

const assistant: AssistantPackage = async () => {
  return {
    name: 'color-naming-conventions-assistant',
    rules: [colorName],
    config: {
      rules: {
        'color-naming-conventions-assistant/color-name': { active: true },
      },
    },
  }
}

export default assistant
