import { BaseRpcException } from "../base-rpc.exception";

export class UnsupportedMediaTypeRpcException extends BaseRpcException {
  constructor(message = "Unsupported Media Type") {
    super(415, "Unsupported Media Type", message);
  }
}
