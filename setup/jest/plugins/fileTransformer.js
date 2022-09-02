/* eslint-disable @typescript-eslint/no-var-requires */
const { basename } = require('path');

/**
 *
 * @param {any} _
 * @param {string} filename
 * @returns {string}
 */
function process(_, filename) {
  return {
    code: `module.exports = ${JSON.stringify(basename(filename))};`,
  };
}

module.exports = {
  process,
};
