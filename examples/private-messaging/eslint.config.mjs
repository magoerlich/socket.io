import pluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'vue/multi-word-component-names': "off"
    },
    languageOptions: {
      globals: globals.node
    },
  },
]