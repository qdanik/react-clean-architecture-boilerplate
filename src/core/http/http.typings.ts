export enum HttpMethods {
  POST = 'post',
  PUT = 'put',
  GET = 'get',
  DELETE = 'delete',
  HEAD = 'head',
  OPTIONS = 'options',
  PATCH = 'patch',
  PURGE = 'purge',
  LINK = 'link',
  UNLINK = 'unlink',
}

export enum HttpTokenTypes {
  Bearer = 'Bearer',
  Basic = 'Basic',
}

export type HttpRequestConfig = Partial<{
  url: string;
  method: string | HttpMethods;
  baseURL: string;
  headers: any;
  params: any;
  paramsSerializer: any;
  data: any;
}>;

export interface HttpResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: HttpRequestConfig;
}

export interface AbortPromise<T> extends Promise<T> {
  abort?: () => void;
}
