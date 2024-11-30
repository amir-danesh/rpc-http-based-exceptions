import { BaseRpcException } from "../base-rpc.exception";

export class VariantAlsoNegotiatesRpcException extends BaseRpcException {
  constructor(message = "Variant Also Negotiates") {
    super(506, "Variant Also Negotiates", message);
  }
}
