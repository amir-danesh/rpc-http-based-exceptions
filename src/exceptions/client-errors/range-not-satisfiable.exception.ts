import { BaseRpcException } from "../base-rpc.exception";

export class RangeNotSatisfiableRpcException extends BaseRpcException {
  constructor(message = "Range Not Satisfiable") {
    super(416, "Range Not Satisfiable", message);
  }
}
