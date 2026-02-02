import { CallHandler, ExecutionContext, Inject, Injectable, NestInterceptor } from '@nestjs/common'
import { Request, Response } from 'express'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'
import { Observable, tap } from 'rxjs'
import { Logger } from 'winston'

@Injectable()
export class InvokeRecordInterceptor implements NestInterceptor {
  constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const httpContext = context.switchToHttp()

    const request = httpContext.getRequest<Request>()
    const response = httpContext.getResponse<Response>()

    const userAgent = request.headers['user-agent']
    const { ip, method, url } = request

    const userInfo = request.user?.id ? `USER:${request.user?.username}(${request.user?.id})` : 'USER:guest'

    const currentTime = Date.now()

    return next.handle().pipe(
      tap((res) => {
        this.logger.http(
          `[${method} › ${url}] ${userInfo} IP:${ip} UA:${userAgent} CODE:${response.statusCode} RES[${Date.now() - currentTime}ms]:${JSON.stringify(res)}`,
        )
      }),
    )
  }
}
