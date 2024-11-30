import { BaseRpcException } from "../base-rpc.exception";

export class UnprocessableEntityRpcException extends BaseRpcException {
  constructor(message = "Unprocessable Entity") {
    super(422, "Unprocessable Entity", message);
  }
}
