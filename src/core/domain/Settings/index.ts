import {connectModulesWithDi} from 'core/domain/helpers';
import * as Controller from './controller';
import * as Gateway from './gateway';
import * as Presenter from './presenter';
import * as UseCase from './usecase';

connectModulesWithDi([
  Controller,
  Gateway,
  UseCase,
  Presenter,
])

export {
  Controller,
  Presenter,
}