import { generateConfigFiles } from './github.ts';

const main = async () => {
  await generateConfigFiles();
};

await main();
