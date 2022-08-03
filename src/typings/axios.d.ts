/* eslint-disable import/no-self-import */
import 'axios';

declare module 'axios' {
  export interface AxiosPromise<T = unknown> extends Promise<AxiosResponse<T>> {
    abort?: () => void;
  }
}
