import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Response } from 'express'
import { map, Observable } from 'rxjs'

@Injectable()
export class FormatResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const httpContext = context.switchToHttp()
    const response = httpContext.getResponse<Response>()

    return next.handle().pipe(
      map((data) => {
        return {
          code: response.statusCode,
          status: 'success',
          data,
        }
      }),
    )
  }
}
