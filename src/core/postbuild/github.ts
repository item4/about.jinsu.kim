import fs from 'node:fs/promises';
import path from 'node:path';

export const generateConfigFiles = async () => {
  await fs.writeFile(path.join(process.cwd(), 'out', 'CNAME'), 'about.jinsu.kim', 'utf8');
};
