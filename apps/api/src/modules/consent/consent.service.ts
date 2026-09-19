import { Injectable } from '@nestjs/common';
import { db } from '../../../prisma/db.js';

@Injectable()
export class ConsentService {
  async grantConsent(userId: number, systemName: string, purpose: string) {
    const existing = await db.orm.public.Consent.where({ userId, systemName }).first();
    
    if (existing) {
      await db.orm.public.Consent.where({ id: existing.id }).delete();
      return db.orm.public.Consent.create({
        userId,
        systemName,
        purpose,
        grantedAt: new Date().toISOString(),
        revokedAt: null
      });
    }

    return db.orm.public.Consent.create({
      userId,
      systemName,
      purpose,
    });
  }

  async revokeConsent(userId: number, systemName: string) {
    const existing = await db.orm.public.Consent.where({ userId, systemName }).first();
    if (existing) {
      await db.orm.public.Consent.where({ id: existing.id }).delete();
      return db.orm.public.Consent.create({
        userId: existing.userId,
        systemName: existing.systemName,
        purpose: existing.purpose,
        grantedAt: existing.grantedAt,
        revokedAt: new Date().toISOString()
      });
    }
  }

  async checkConsent(userId: number, systemName: string): Promise<boolean> {
    const consent = await db.orm.public.Consent.where({ userId, systemName }).first();
    return !!(consent && !consent.revokedAt);
  }
}
