import { BaseRpcException } from "../base-rpc.exception";

export class ProxyAuthenticationRequiredRpcException extends BaseRpcException {
  constructor(message = "Proxy Authentication Required") {
    super(407, "Proxy Authentication Required", message);
  }
}
