import {connectModulesWithDi} from 'core/domain/helpers';
import * as Controller from './controller';
import * as Presenter from './presenter';

connectModulesWithDi([
  Presenter,
  Controller,
])

export {
  Presenter,
  Controller
}