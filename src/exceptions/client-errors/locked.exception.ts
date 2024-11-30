import { BaseRpcException } from "../base-rpc.exception";

export class LockedRpcException extends BaseRpcException {
  constructor(message = "Locked") {
    super(423, "Locked", message);
  }
}
