const path = require('node:path');

const pwd = process.cwd();

const make_next_lint_command = (filenames) =>
  `yarn exec next lint --fix --file ${filenames.map((f) => path.relative(pwd, f)).join(' --file ')}`;

module.exports = {
  '*.{css,js,jsx,cjs,mjs,ts,tsx,json,jsonc}': [make_next_lint_command, 'yarn exec prettier --write', 'git add'],
  '*.{md,yml,yaml}': ['yarn exec prettier --write', 'git add'],
};
