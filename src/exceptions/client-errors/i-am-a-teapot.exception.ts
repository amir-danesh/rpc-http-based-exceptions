import { BaseRpcException } from "../base-rpc.exception";

export class ImATeapotRpcException extends BaseRpcException {
  constructor(message = "I'm a teapot") {
    super(418, "I'm a teapot", message);
  }
}
