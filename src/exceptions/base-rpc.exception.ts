import { RpcException } from "@nestjs/microservices";

export abstract class BaseRpcException extends RpcException {
    constructor(statusCode: number, error: string, message: string) {
      super({
        statusCode,
        message,
        error,
      });
    }
  }