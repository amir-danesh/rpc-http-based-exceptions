import { BaseRpcException } from "../base-rpc.exception";

export class ForbiddenRpcException extends BaseRpcException {
  constructor(message = "Forbidden") {
    super(403, "Forbidden", message);
  }
}
