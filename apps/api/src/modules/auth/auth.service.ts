import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { db } from '../../../prisma/db.js';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async mockOAuthLogin(profile: any) {
    // Upsert user based on mock profile
    let user = await db.orm.public.User.where({ email: profile.email }).first();
    
    if (!user) {
      user = await db.orm.public.User.create({
        email: profile.email,
        name: profile.name,
        role: profile.email === 'officer@gov.in' || profile.email === 'officer@aaplahub.gov.in' ? 'OFFICER' : 'CITIZEN',
      });
    }

    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    };
  }
}
