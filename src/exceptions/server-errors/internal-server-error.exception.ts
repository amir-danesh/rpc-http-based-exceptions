import { BaseRpcException } from "../base-rpc.exception";

export class InternalServerErrorRpcException extends BaseRpcException {
  constructor(message = "Internal Server Error") {
    super(500, "Internal Server Error", message);
  }
}
