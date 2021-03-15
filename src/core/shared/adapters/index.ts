import {connectModulesWithDi} from 'core/domain/helpers';
import * as Adapters from './adapters';

connectModulesWithDi(Adapters)

export {
  Adapters,
}