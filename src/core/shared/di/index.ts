import {DiContainer} from './DiContainer';
import {CombineContainers} from './helpers';

const Di = new DiContainer();

export {
  Di,
  DiContainer as CustomContainer,
  CombineContainers
};