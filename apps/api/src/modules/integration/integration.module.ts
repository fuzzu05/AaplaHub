import { Module } from '@nestjs/common';
import { IdentityConnector } from './connectors/identity.connector.js';
import { PanConnector } from './connectors/pan.connector.js';
import { SkillConnector } from './connectors/skill.connector.js';
import { IntegrationService } from './integration.service.js';

@Module({
  providers: [IdentityConnector, PanConnector, SkillConnector, IntegrationService],
  exports: [IntegrationService],
})
export class IntegrationModule {}
