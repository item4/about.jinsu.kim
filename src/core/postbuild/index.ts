import { generateConfigFiles } from '@/core/postbuild/github.ts';

const main = async () => {
  await generateConfigFiles();
};

await main();
