const path = require('node:path');

const srcDir = path.join(process.cwd(), 'src');

const make_next_lint_command = (filenames) =>
  `yarn exec next lint --fix --file ${filenames.map((f) => path.relative(srcDir, f)).join(' --file ')}`;

module.exports = {
  '*.{ts,tsx}': [make_next_lint_command, 'yarn exec prettier --write', 'git add'],
  '*.{css,cjs,mjs,json,md,yml,yaml}': ['yarn exec prettier --write', 'git add'],
};
