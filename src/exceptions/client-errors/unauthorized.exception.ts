import { BaseRpcException } from "../base-rpc.exception";

export class UnauthorizedRpcException extends BaseRpcException {
  constructor(message = "Unauthorized") {
    super(401, "Unauthorized", message);
  }
}
