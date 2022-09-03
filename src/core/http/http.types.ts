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

export type HttpHeaders = Record<string, string | number | boolean>;

export type HttpParams = Record<string, string>;

export interface HttpResponseData {
  [index: number]:
    | string
    | null
    | boolean
    | number
    | Record<string, HttpResponseData>
    | Array<HttpResponseData>;
}

export type HttpRequestConfig = Partial<{
  url: string;
  method: string | HttpMethods;
  baseURL: string;
  headers: HttpHeaders;
  params: HttpParams;
  data: HttpResponseData;
}>;

export interface HttpResponse<T = HttpResponseData> {
  data: T;
  status: number;
  statusText: string;
  headers: HttpHeaders;
  config: HttpRequestConfig;
}
