import { User } from '../../user/user.entity';
import { createParamDecorator } from '@nestjs/common';

export const GqlUser = createParamDecorator(
    (data, [root, args, ctx, info]): User => ctx.req.user,
  );