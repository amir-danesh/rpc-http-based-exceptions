import { BaseRpcException } from "../base-rpc.exception";

export class MethodNotAllowedRpcException extends BaseRpcException {
  constructor(message = "Method Not Allowed") {
    super(405, "Method Not Allowed", message);
  }
}
