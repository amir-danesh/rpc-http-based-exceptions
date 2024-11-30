import { BaseRpcException } from "../base-rpc.exception";

export class NotFoundRpcException extends BaseRpcException {
  constructor(message = "Not Found") {
    super(404, "Not Found", message);
  }
}
