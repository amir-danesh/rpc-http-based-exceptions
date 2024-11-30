import { BaseRpcException } from "../base-rpc.exception";

export class NetworkAuthenticationRequiredRpcException extends BaseRpcException {
  constructor(message = "Network Authentication Required") {
    super(511, "Network Authentication Required", message);
  }
}
