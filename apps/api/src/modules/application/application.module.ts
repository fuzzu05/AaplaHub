import { Module } from '@nestjs/common';
import { ApplicationService } from './application.service.js';
import { ApplicationController } from './application.controller.js';
import { IntegrationModule } from '../integration/integration.module.js';
import { AuthModule } from '../auth/auth.module.js';

@Module({
  imports: [IntegrationModule, AuthModule],
  providers: [ApplicationService],
  controllers: [ApplicationController],
})
export class ApplicationModule {}
