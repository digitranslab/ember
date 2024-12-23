module.exports = {
  extends: ['./node_modules/@digitranslab/platform-rig/profiles/model/eslint.config.json'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  }
}
