import { Controller, Post, Body, Req, UseGuards, Get } from '@nestjs/common';
import { ConsentService } from './consent.service.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js'; // Assume we create this

@Controller('consent')
@UseGuards(JwtAuthGuard)
export class ConsentController {
  constructor(private readonly consentService: ConsentService) {}

  @Post('grant')
  async grantConsent(@Req() req: any, @Body() body: { systemName: string; purpose: string }) {
    return this.consentService.grantConsent(req.user.userId, body.systemName, body.purpose);
  }

  @Post('revoke')
  async revokeConsent(@Req() req: any, @Body() body: { systemName: string }) {
    return this.consentService.revokeConsent(req.user.userId, body.systemName);
  }
}
