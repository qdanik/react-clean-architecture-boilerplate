import * as inversify from 'inversify';

export type ServiceIdentifier<T> = inversify.ServiceIdentifier<T>;

export class Container extends inversify.Container {}

export class ContainerModule extends inversify.ContainerModule {}

export const Injectable = inversify.injectable;

export const Inject = inversify.inject;

export const Named = inversify.named;

export const PostConstruct = inversify.postConstruct;

export const InjectNamed =
  <T>(serviceIdentifier: ServiceIdentifier<T>, name: string | number | symbol) =>
  <Target>(target: Target, targetKey: string, index?: number): void => {
    Inject(serviceIdentifier)(target, targetKey, index);
    Named(name)(target, targetKey, index);
  };
