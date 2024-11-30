import { BaseRpcException } from "../base-rpc.exception";

export class ExpectationFailedRpcException extends BaseRpcException {
  constructor(message = "Expectation Failed") {
    super(417, "Expectation Failed", message);
  }
}
