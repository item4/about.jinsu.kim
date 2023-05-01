/* eslint-disable import/no-named-as-default-member */
import fs from 'node:fs/promises';
import path from 'node:path';

import prettier from 'prettier';

import type { Contribution, ContributionDetail } from '@/types/resume';

const main = async () => {
  const prettierConfigPath = path.join(process.cwd(), '.prettierrc.json');
  const contributionDataPath = path.join(process.cwd(), 'src', 'data', 'contributions.json');
  const contributionData: Contribution[] = JSON.parse(await fs.readFile(contributionDataPath, 'utf8'));
  contributionData.forEach((contrib) => {
    contrib.items = contrib.items
      .map((item) => {
        return Object.fromEntries(
          Object.entries(item).sort(([keyA], [keyB]) => {
            if (keyA < keyB) {
              return -1;
            }
            if (keyA > keyB) {
              return 1;
            }
            return 0;
          }),
        ) as ContributionDetail;
      })
      .sort((a, b) => a.number - b.number);
  });
  const result = contributionData.sort((a, b) => {
    if (a.group < b.group) {
      return -1;
    }
    if (a.group > b.group) {
      return 1;
    }
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    const nameA = a.name.split('/')[1].toLowerCase();
    const nameB = b.name.split('/')[1].toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  const prettierOptions = await prettier.resolveConfig(contributionDataPath, { config: prettierConfigPath });
  const formatted = prettier.format(JSON.stringify(result), {
    ...prettierOptions,
    filepath: contributionDataPath,
  });
  await fs.writeFile(contributionDataPath, formatted);
};
await main();
