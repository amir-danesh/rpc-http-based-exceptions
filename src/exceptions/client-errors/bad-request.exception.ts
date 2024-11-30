import { BaseRpcException } from "../base-rpc.exception";

export class BadRequestRpcException extends BaseRpcException {
  constructor(message = "Bad Request") {
    super(400, "Bad Request", message);
  }
}
