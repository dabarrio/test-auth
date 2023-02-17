import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientId: '',
      clientSecret: '',
      callbackURL: '',
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
