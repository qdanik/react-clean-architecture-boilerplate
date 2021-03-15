export namespace Api {
  export enum IListOrder {
    ASC = 'ASC',
    DESC = 'DESC',
  }
  
  export interface IListParams {
    itemsPerPage?: number;
    order?: IListOrder;
    pageNumber?: number;
    sort?: string;
  }
  
  export interface IErrorBody {
    code: string
    detailMessage: string
    keys: string[]
  }
  
  export interface IErrorStatus {
    code: string
    details: string
    message: string
  }
  
  export interface IErrorResponse {
    body: IErrorBody
    status: IErrorStatus
  }
}