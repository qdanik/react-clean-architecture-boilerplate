import { ModuleOptions } from 'webpack';
import rules from './rules';

export default (): ModuleOptions => ({
  rules: rules(),
  strictExportPresence: true,
})