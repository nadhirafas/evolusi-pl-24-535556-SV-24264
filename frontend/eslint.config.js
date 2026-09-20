import eslintPluginVue from 'eslint-plugin-vue'

export default [
  ...eslintPluginVue.configs['flat/recommended'],
  {
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
]