import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { authorizantionToLoginPayload } from 'src/utils/base-64-converter';

export const UserId = createParamDecorator((_, ctx: ExecutionContext) => {
  const { authorization } = ctx.switchToHttp().getRequest().headers;

  console.log('authorizations', authorization)

  const loginPayload = authorizantionToLoginPayload(authorization);

  return loginPayload?.id;
});