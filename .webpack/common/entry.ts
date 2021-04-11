import { Entry } from 'webpack';
import { APP_INIT_FILE } from '../constants'

export default (): Entry => ({
  main: APP_INIT_FILE,
})
