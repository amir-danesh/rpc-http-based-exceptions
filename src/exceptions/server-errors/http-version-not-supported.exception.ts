import { BaseRpcException } from "../base-rpc.exception";

export class HTTPVersionNotSupportedRpcException extends BaseRpcException {
  constructor(message = "HTTP Version Not Supported") {
    super(505, "HTTP Version Not Supported", message);
  }
}
