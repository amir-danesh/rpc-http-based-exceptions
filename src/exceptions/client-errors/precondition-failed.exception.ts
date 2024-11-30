import { BaseRpcException } from "../base-rpc.exception";

export class PreconditionFailedRpcException extends BaseRpcException {
  constructor(message = "Precondition Failed") {
    super(412, "Precondition Failed", message);
  }
}
