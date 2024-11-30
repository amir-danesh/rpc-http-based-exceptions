import { BaseRpcException } from "../base-rpc.exception";

export class UpgradeRequiredRpcException extends BaseRpcException {
  constructor(message = "Upgrade Required") {
    super(426, "Upgrade Required", message);
  }
}
