import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { db } from '../../../prisma/db.js';

@Controller('audit')
@UseGuards(JwtAuthGuard)
export class AuditController {
  @Get('my-activity')
  async getMyActivity(@Req() req: any) {
    const results = await db.orm.public.IntegrationAuditLog.where({ userId: req.user.userId }).orderBy(model => model.createdAt.desc()).all();
    return results;
  }

  @Get('all-activity') // Admin
  async getAllActivity() {
    const results = await db.orm.public.IntegrationAuditLog.orderBy(model => model.createdAt.desc()).all();
    return results;
  }
}
