module.exports = {
  extends: ['next/core-web-vitals', 'smarthr', 'plugin:prettier/recommended'],
  plugins: ['import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
}
