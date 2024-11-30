import { BaseRpcException } from "../base-rpc.exception";

export class InsufficientStorageRpcException extends BaseRpcException {
  constructor(message = "Insufficient Storage") {
    super(507, "Insufficient Storage", message);
  }
}
