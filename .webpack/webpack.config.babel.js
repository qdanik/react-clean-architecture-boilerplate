import build from './build';
import start from './start';

export default (config) => {
  let mode = 'start';
  if (typeof process.env.npm_lifecycle_event !== 'undefined') {
    mode = process.env.npm_lifecycle_event;
  }

  switch (mode) {
    case 'build':
      return build(config);
    case 'start':
    default:
      return start(config);
  }
};
