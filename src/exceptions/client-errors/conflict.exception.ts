import { BaseRpcException } from "../base-rpc.exception";

export class ConflictRpcException extends BaseRpcException {
  constructor(message = "Conflict") {
    super(409, "Conflict", message);
  }
}
