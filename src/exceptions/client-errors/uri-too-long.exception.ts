import { BaseRpcException } from "../base-rpc.exception";

export class URITooLongRpcException extends BaseRpcException {
  constructor(message = "URI Too Long") {
    super(414, "URI Too Long", message);
  }
}
