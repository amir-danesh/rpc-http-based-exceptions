import { BaseRpcException } from "../base-rpc.exception";

export class LoopDetectedRpcException extends BaseRpcException {
  constructor(message = "Loop Detected") {
    super(508, "Loop Detected", message);
  }
}
