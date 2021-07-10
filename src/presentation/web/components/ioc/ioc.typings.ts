import React from 'react';
import { Container, ContainerModule } from 'containers/core';

export type InjectContainers = ContainerModule | ContainerModule[];

export interface ContainerContext {
  container: Container | null;
}

export interface IoCProps {
  container: Container;
  children: React.ReactElement<any> | React.ReactElement<any>[];
}

export interface InjectContainersProps {
  containers: ContainerModule[];
  children: React.ReactElement<any> | React.ReactElement<any>[];
}
