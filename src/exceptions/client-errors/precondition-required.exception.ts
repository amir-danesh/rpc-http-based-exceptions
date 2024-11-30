import { BaseRpcException } from "../base-rpc.exception";

export class PreconditionRequiredRpcException extends BaseRpcException {
  constructor(message = "Precondition Required") {
    super(428, "Precondition Required", message);
  }
}
