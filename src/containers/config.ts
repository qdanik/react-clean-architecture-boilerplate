/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as inversify from 'inversify';
import type { interfaces } from 'inversify';
import { ServiceIdentifierOrFunc } from 'inversify/lib/annotation/lazy_service_identifier';

export type ServiceIdentifier<T> = interfaces.ServiceIdentifier<T>;

export class Container extends inversify.Container {}

export class ContainerModule extends inversify.ContainerModule {}

export const Injectable = inversify.injectable;

export const Inject = inversify.inject;

export const Named = inversify.named;

export const PostConstruct = inversify.postConstruct;

export const InjectNamed =
  <T>(serviceIdentifier: ServiceIdentifierOrFunc<T>, name: string | number | symbol) =>
  (target: any, targetKey: string, index?: number): void => {
    Inject(serviceIdentifier)(target, targetKey, index);
    Named(name)(target, targetKey, index);
  };
