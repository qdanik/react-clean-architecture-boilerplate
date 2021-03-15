export namespace Http {
  export enum Method {
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
  
  export enum TokenTypes {
    Bearer = 'Bearer',
    Basic = 'Basic'
  }
}