const path = require('path');
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;
// this runs the commands indicated on the following file types
module.exports = {
  '*.{ts,tsx,js,jsx}': [buildEslintCommand],
  '*.scss': ['stylelint --fix'],
  '*': ['prettier --write'],
};
