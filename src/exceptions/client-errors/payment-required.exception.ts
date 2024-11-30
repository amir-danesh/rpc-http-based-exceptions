import { BaseRpcException } from "../base-rpc.exception";

export class PaymentRequiredRpcException extends BaseRpcException {
  constructor(message = "Payment Required") {
    super(402, "Payment Required", message);
  }
}
