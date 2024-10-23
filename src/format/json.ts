import fs from 'node:fs/promises';
import path from 'node:path';
import * as process from 'process';

import { Validator } from '@cfworker/json-schema';
import { resolveConfig, format as prettierFormat } from 'prettier';

import type { Contribution, ContributionDetail } from '@/types/resume';

const main = async () => {
  const formatting = process.argv[process.argv.length - 1] === '--format';
  const prettierConfigPath = path.join(process.cwd(), '.prettierrc.json');
  const contributionSchemaPath = path.join(process.cwd(), 'schemas', 'contributions.json');
  const contributionDataPath = path.join(process.cwd(), 'src', 'data', 'contributions.json');
  const contributionSchema = JSON.parse(await fs.readFile(contributionSchemaPath, 'utf8'));
  const schemaValidator = new Validator(contributionSchema, '2020-12', false);
  const contributionData: Contribution[] = JSON.parse(await fs.readFile(contributionDataPath, 'utf8'));
  const validation = schemaValidator.validate(contributionData);
  if (!validation.valid) {
    console.error(...validation.errors);
    process.exit(1);
  }
  if (!formatting) {
    process.exit(0);
  }

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
  const prettierOptions = await resolveConfig(contributionDataPath, { config: prettierConfigPath });
  const formatted = await prettierFormat(JSON.stringify(result), {
    ...prettierOptions,
    filepath: contributionDataPath,
  });
  await fs.writeFile(contributionDataPath, formatted);
};
await main();
