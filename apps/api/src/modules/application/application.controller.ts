import { Controller, Post, Body, Req, UseGuards, Get, Param } from '@nestjs/common';
import { ApplicationService } from './application.service.js';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { IntegrationService } from '../integration/integration.service.js';

@Controller('applications')
@UseGuards(JwtAuthGuard)
export class ApplicationController {
  constructor(
    private readonly appService: ApplicationService,
    private readonly integrationService: IntegrationService
  ) {}

  @Post('apply-with-consent')
  async applyWithConsent(
    @Req() req: any,
    @Body() body: { serviceName: string; identifier: string; fee: number }
  ) {
    // 1. Fetch and map canonical data from mock APIs (will throw if consent missing)
    const canonicalData = await this.integrationService.fetchAndMapCitizenData(
      req.user.userId,
      body.identifier
    );

    // 2. Create the application draft using the aggregated data
    const application = await this.appService.submitApplication(
      req.user.userId,
      body.serviceName,
      canonicalData,
      body.fee
    );

    return { application, canonicalData };
  }

  @Post(':appId/pay')
  async mockPay(@Param('appId') appId: string) {
    return this.appService.processPayment(appId);
  }

  @Get('my-applications')
  async getMyApps(@Req() req: any) {
    return this.appService.getCitizenApplications(req.user.userId);
  }

  @Get('all') // Should ideally be protected by Officer role guard
  async getAllApps() {
    return this.appService.getAllApplications();
  }

  @Post(':appId/status')
  async updateStatus(@Param('appId') appId: string, @Body() body: { status: 'APPROVED'|'REJECTED' }) {
    return this.appService.updateStatus(appId, body.status);
  }
}
