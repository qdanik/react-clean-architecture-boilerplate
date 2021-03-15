import {interfaces} from "inversify";

export namespace DependencyInjector {
  export type TService<T = any> = new (...args: any[]) => T; 

  export type TConstantService<T = any> = T; 

  export type TServiceList = Record<string, TService>;

  export interface IContainer {  
    getContainer: () => interfaces.Container;

    setConstantService: (type: string, service: TConstantService) => this;
    setDynamicService: (type: string, service: TService) => this;
    setService: (type: string, service: TService) => this;
  }
}