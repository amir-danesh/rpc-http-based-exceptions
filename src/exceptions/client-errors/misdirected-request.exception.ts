import { BaseRpcException } from "../base-rpc.exception";

export class MisdirectedRequestRpcException extends BaseRpcException {
  constructor(message = "Misdirected Request") {
    super(421, "Misdirected Request", message);
  }
}
