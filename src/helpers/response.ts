import { StatusCodes } from 'http-status-codes';
import { DefaultResponse } from '../@types';

export function handleStatus<T>(status: StatusCodes, data: T): DefaultResponse<T> {
  return {
    status,
    message: StatusCodes[status],
    data,
  };
}
