/* eslint-disable import/no-named-as-default-member */
import fs from 'node:fs/promises';
import path from 'node:path';

import prettier from 'prettier';

import type { Contribution } from '@/types/resume';

const main = async () => {
  const prettierConfigPath = path.join(process.cwd(), '.prettierrc.json');
  const contributionDataPath = path.join(process.cwd(), 'src', 'data', 'contributions.json');
  const contributionData: Contribution[] = JSON.parse(await fs.readFile(contributionDataPath, 'utf8'));
  const result = contributionData.sort((a, b) => {
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    else return 0;
  });
  const prettierOptions = await prettier.resolveConfig(contributionDataPath, { config: prettierConfigPath });
  const formatted = prettier.format(JSON.stringify(result), {
    ...prettierOptions,
    filepath: contributionDataPath,
  });
  await fs.writeFile(contributionDataPath, formatted);
};
await main();
