import {DependencyInjector} from 'core/types';
import {Container, interfaces} from 'inversify';
import forEach from 'lodash/forEach';

export class DiContainer implements DependencyInjector.IContainer {
  private _container = new Container();

  getContainer(): interfaces.Container {
    return this._container;
  }

  setConstantService(type: string, service: DependencyInjector.TConstantService): this {
    this._container.bind(type).toConstantValue(service);

    return this;
  }

  setDynamicService(type: string, Instance: DependencyInjector.TService): this {
    this._container.bind(type).toDynamicValue((context: interfaces.Context) => new Instance(context))

    return this;
  }

  setService(type: string, service: DependencyInjector.TService): this {
    this._container.bind(type).to(service);

    return this;
  }

  setServices(serviceList: DependencyInjector.TServiceList): this {
    forEach(serviceList, (service: DependencyInjector.TService, type: string) => {
      this.setService(type, service);
    });

    return this;
  }
  
}
