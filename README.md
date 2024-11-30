
# RPC HTTP Based Exception

A collection of custom RPC Exceptions for NestJS Microservices, standardizing error responses.

You can basically throw RPC Exceptions that are standard HTTP Exceptions.

## Installation

```bash
npm i rpc-http-based-exceptions
```

## Usage

```
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'signin-cmd' })
  async signin(
    @Payload() data: any,
  ): Promise<any> {
    throw new BadRequestRpcException('Password is incorrect')
  }
}
```

It is mostly useful when you are working with gateway or other services that communicate with RPC, but need standard HTTP responses.
