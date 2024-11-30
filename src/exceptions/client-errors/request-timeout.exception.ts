import { BaseRpcException } from "../base-rpc.exception";

export class RequestTimeoutRpcException extends BaseRpcException {
  constructor(message = "Request Timeout") {
    super(408, "Request Timeout", message);
  }
}
