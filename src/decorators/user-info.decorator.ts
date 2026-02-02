import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Request } from 'express'

export const UserInfo = createParamDecorator((propertyKey: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request>()

  if (!request.user) {
    return null
  }

  return propertyKey ? request.user[propertyKey] : request.user
})
