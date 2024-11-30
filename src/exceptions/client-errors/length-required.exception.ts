import { BaseRpcException } from "../base-rpc.exception";

export class LengthRequiredRpcException extends BaseRpcException {
  constructor(message = "Length Required") {
    super(411, "Length Required", message);
  }
}
