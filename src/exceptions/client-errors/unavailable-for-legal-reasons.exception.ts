import { BaseRpcException } from "../base-rpc.exception";

export class UnavailableForLegalReasonsRpcException extends BaseRpcException {
  constructor(message = "Unavailable For Legal Reasons") {
    super(451, "Unavailable For Legal Reasons", message);
  }
}
