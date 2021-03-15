import {connectModulesWithDi} from 'core/domain/helpers';
import * as Services from './services';

connectModulesWithDi(Services)

export {
  Services
}