import { BaseRpcException } from "../base-rpc.exception";

export class RequestHeaderFieldsTooLargeRpcException extends BaseRpcException {
  constructor(message = "Request Header Fields Too Large") {
    super(431, "Request Header Fields Too Large", message);
  }
}
