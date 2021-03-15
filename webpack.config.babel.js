import Development from './webpack/development';
import Production from './webpack/production';

export default () => {
  let mode = 'build:dev';
  if (typeof process.env.npm_lifecycle_event !== 'undefined') {
    mode = process.env.npm_lifecycle_event;
  }

  switch (mode) {
    case 'build':
      return Production(false);
    case 'build:local':
      return Production(true);
    case 'start':
    default:
      return Development;
  }
};
