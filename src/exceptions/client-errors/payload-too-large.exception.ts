import { BaseRpcException } from "../base-rpc.exception";

export class PayloadTooLargeRpcException extends BaseRpcException {
  constructor(message = "Payload Too Large") {
    super(413, "Payload Too Large", message);
  }
}
