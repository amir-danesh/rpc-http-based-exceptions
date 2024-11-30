import { BaseRpcException } from "../base-rpc.exception";

export class NotImplementedRpcException extends BaseRpcException {
  constructor(message = "Not Implemented") {
    super(501, "Not Implemented", message);
  }
}
