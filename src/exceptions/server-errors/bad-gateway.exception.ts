import { BaseRpcException } from "../base-rpc.exception";

export class BadGatewayRpcException extends BaseRpcException {
  constructor(message = "Bad Gateway") {
    super(502, "Bad Gateway", message);
  }
}
