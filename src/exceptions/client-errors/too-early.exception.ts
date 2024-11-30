import { BaseRpcException } from "../base-rpc.exception";

export class TooEarlyRpcException extends BaseRpcException {
  constructor(message = "Too Early") {
    super(425, "Too Early", message);
  }
}
