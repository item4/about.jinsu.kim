import { generateConfigFiles } from './github';
import { minifyXMLFiles } from './minify';

const main = async () => {
  await generateConfigFiles();
  await minifyXMLFiles();
};

await main();
