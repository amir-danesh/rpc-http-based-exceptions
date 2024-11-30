import { BaseRpcException } from "../base-rpc.exception";

export class FailedDependencyRpcException extends BaseRpcException {
  constructor(message = "Failed Dependency") {
    super(424, "Failed Dependency", message);
  }
}
