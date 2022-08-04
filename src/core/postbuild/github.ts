import fs from 'fs/promises';
import path from 'path';

export const generateConfigFiles = async () => {
  await fs.writeFile(
    path.join(process.cwd(), 'out', 'CNAME'),
    'about.jinsu.kim',
    'utf8',
  );
};
