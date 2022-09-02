import { basename } from 'path';

export function process(_: unknown, filename: string) {
  return `module.exports = ${JSON.stringify(basename(filename))};`;
}
