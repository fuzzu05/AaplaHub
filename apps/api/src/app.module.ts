import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

import { AuthModule } from './modules/auth/auth.module.js';
import { ConsentModule } from './modules/consent/consent.module.js';
import { IntegrationModule } from './modules/integration/integration.module.js';
import { ApplicationModule } from './modules/application/application.module.js';
import { AuditModule } from './modules/audit/audit.module.js';
import { MockGovernmentApiModule } from './modules/mock-government-apis/mock-api.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'api',
    }),
    AuthModule,
    ConsentModule,
    IntegrationModule,
    ApplicationModule,
    AuditModule,
    MockGovernmentApiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
