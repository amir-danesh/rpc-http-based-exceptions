import { BaseRpcException } from "../base-rpc.exception";

export class ServiceUnavailableRpcException extends BaseRpcException {
  constructor(message = "Service Unavailable") {
    super(503, "Service Unavailable", message);
  }
}
