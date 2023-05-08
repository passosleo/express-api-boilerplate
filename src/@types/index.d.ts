import { StatusCodes } from 'http-status-codes';

export interface DefaultResponse<T> {
  status: StatusCodes;
  message: string;
  data?: T;
}
