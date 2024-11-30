
# RPC HTTP Based Exception

A collection of custom RPC Exceptions for NestJS Microservices, standardizing error responses.

You can Basically throw RPC Exceptions that are standard HTTP Exceptions.

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

It is mostly useful when you are working with gateway or other services that communicate with RPC, but need Standard HTTP responses.

## Available Exceptions

Client errors (4xx):
```bash
throw new BadRequestRpcException()
throw new UnauthorizedRpcException()
throw new PaymentRequiredRpcException()
throw new ForbiddenRpcException()
throw new NotFoundRpcException()
throw new MethodNotAllowedRpcException()
throw new NotAcceptableRpcException()
throw new ProxyAuthenticationRequiredRpcException()
throw new RequestTimeoutRpcException()
throw new ConflictRpcException()
throw new GoneRpcException()
throw new LengthRequiredRpcException()
throw new PreconditionFailedRpcException()
throw new PayloadTooLargeRpcException()
throw new URITooLongRpcException()
throw new UnsupportedMediaTypeRpcException()
throw new RangeNotSatisfiableRpcException()
throw new ExpectationFailedRpcException()
throw new ImATeapotRpcException()
throw new MisdirectedRequestRpcException()
throw new UnprocessableEntityRpcException()
throw new LockedRpcException()
throw new FailedDependencyRpcException()
throw new TooEarlyRpcException()
throw new UpgradeRequiredRpcException()
throw new PreconditionRequiredRpcException()
throw new TooManyRequestsRpcException()
throw new RequestHeaderFieldsTooLargeRpcException()
throw new UnavailableForLegalReasonsRpcException()
```

Server errors (5xx):
```bash
throw new InternalServerErrorRpcException()
throw new NotImplementedRpcException()
throw new BadGatewayRpcException()
throw new ServiceUnavailableRpcException()
throw new GatewayTimeoutRpcException()
throw new HTTPVersionNotSupportedRpcException()
throw new VariantAlsoNegotiatesRpcException()
throw new InsufficientStorageRpcException()
throw new LoopDetectedRpcException()
throw new NotExtendedRpcException()
throw new NetworkAuthenticationRequiredRpcException()
```