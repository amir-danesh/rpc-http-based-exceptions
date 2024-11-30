import { BaseRpcException } from "../base-rpc.exception";

export class NotAcceptableRpcException extends BaseRpcException {
  constructor(message = "Not Acceptable") {
    super(406, "Not Acceptable", message);
  }
}
