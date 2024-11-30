import { BaseRpcException } from "../base-rpc.exception";

export class GoneRpcException extends BaseRpcException {
  constructor(message = "Gone") {
    super(410, "Gone", message);
  }
}
