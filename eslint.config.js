import antfu from '@antfu/eslint-config'
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'

export default antfu(perfectionistNatural, {
  rules: {
    'antfu/top-level-function': 'off',
  },
})
