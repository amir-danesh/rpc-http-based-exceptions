import { BaseRpcException } from "../base-rpc.exception";

export class NotExtendedRpcException extends BaseRpcException {
  constructor(message = "Not Extended") {
    super(510, "Not Extended", message);
  }
}
