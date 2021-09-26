import * as inversify from 'inversify';
import type { interfaces } from 'inversify';

export type ServiceIdentifier<T> = interfaces.ServiceIdentifier<T>;

export class Container extends inversify.Container {}

export class ContainerModule extends inversify.ContainerModule {}

export const Injectable = inversify.injectable;

export const Inject = inversify.inject;
