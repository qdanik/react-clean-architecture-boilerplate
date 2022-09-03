import minimist from 'minimist';
import path from 'path';
import { Plop, run } from 'plop';
import { fileURLToPath } from 'url';

const args = process.argv.slice(2);
const argv = minimist(args);
const dirname = path.dirname(fileURLToPath(import.meta.url));

Plop.prepare(
  {
    completion: argv.completion,
    configPath: path.join(dirname, './plopfile.ts'),
    cwd: argv.cwd,
    preload: argv.preload || [],
  },
  env => {
    run(env, undefined, true).catch((error: string) => {
      throw new Error(error);
    });
  },
);
