import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientId: '364190431614-c9mbienlmeilf9nr9r8mck6h72bv5nl8.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'https://api.aptoclick.com/auth/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: (err: any, user: any, info?: any) => void,
  ): Promise<any> {
    const { name, emails } = profile;

    const user = {
      email: emails[0].value,
      name: name.givenName,
      accessToken,
    };

    console.log(user);
    done(null, user);
  }
}
