import { BaseRpcException } from "../base-rpc.exception";

export class TooManyRequestsRpcException extends BaseRpcException {
  constructor(message = "Too Many Requests") {
    super(429, "Too Many Requests", message);
  }
}
