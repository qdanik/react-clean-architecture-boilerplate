import {Container, interfaces} from 'inversify';
import forEach from 'lodash/forEach';

export function CombineContainers(containers: interfaces.Container[]): interfaces.Container {
  let containerStack;

  if (!containers.length) {
    throw new Error('Container doesn\'t');
  }

  forEach(containers, (container) => {
    if (containerStack) {
      containerStack = Container.merge(containerStack, container);

      return;
    }

    containerStack = container;
  });

  return containerStack;
}
