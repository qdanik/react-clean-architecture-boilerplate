import {Container} from 'inversify'
import {baseAdapters} from './base';

export const container = new Container({
  autoBindInjectable: true,
})

container.load(baseAdapters);