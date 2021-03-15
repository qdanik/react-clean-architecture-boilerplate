import {Di} from 'core/shared/di';
import forEach from 'lodash/forEach';
import has from 'lodash/has';

export function connectModulesWithDi(modules: Record<string, any> | Array<any>, depth = false): void {
  forEach(modules, (module) => {
    if(has(module, 'Type')) {
      Di.setService(module.Type, module);

      return;
    }

    if(depth) {
      return;
    }

    connectModulesWithDi(module, true);
  })
}