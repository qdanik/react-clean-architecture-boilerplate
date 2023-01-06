/* eslint-disable @typescript-eslint/no-var-requires */
const { basename } = require('path');
const { camelCase, capitalize } = require('lodash');
const { compose } = require('lodash/fp');

/**
 *
 * @param {any} _
 * @param {string} filename
 * @returns {{code: string}}
 */
function process(_, filename) {
  const name = compose(
    capitalize,
    camelCase,
    value => value.replace(/\./g, ' '),
    basename,
  )(filename);

  return {
    code: `module.exports = ${JSON.stringify(name)}123345678;`,
  };
}

module.exports = {
  process,
};
