import { BaseRpcException } from "../base-rpc.exception";

export class GatewayTimeoutRpcException extends BaseRpcException {
  constructor(message = "Gateway Timeout") {
    super(504, "Gateway Timeout", message);
  }
}
