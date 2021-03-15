import {connectModulesWithDi} from 'core/domain/helpers';
import * as Api from './api';
import * as Controller from './controller';
import * as Gateway from './gateway';
import * as Presenter from './presenter';
import * as UseCase from './usecase';

connectModulesWithDi([
  Api,
  Controller,
  Gateway,
  UseCase,
  Presenter,
])

export {
  Controller,
  Presenter,
}