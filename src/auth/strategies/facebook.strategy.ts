import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientId: '',
      clientSecret: '',
      callbackURL: '',
      scope: 'email',
      profileFields: ['emails', 'name'],
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
    };
    const payload = {
      user,
      accessToken,
    };
    console.log(payload);
    done(null, payload);
  }
}
