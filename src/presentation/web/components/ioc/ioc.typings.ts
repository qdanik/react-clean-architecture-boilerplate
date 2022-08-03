import React from 'react';

import { Container, ContainerModule } from 'containers/config';

export type InjectContainers = ContainerModule | ContainerModule[];

export interface ContainerContext {
  container: Container | null;
}

export interface IoCProps {
  container: Container;
  children: React.ReactNode | React.ReactNode[];
}

export interface InjectContainersProps {
  containers: ContainerModule[];
  children: React.ReactNode | React.ReactNode[];
}
