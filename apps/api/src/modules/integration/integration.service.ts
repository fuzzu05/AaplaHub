import { Injectable, BadRequestException } from '@nestjs/common';
import { IdentityConnector } from './connectors/identity.connector.js';
import { PanConnector } from './connectors/pan.connector.js';
import { SkillConnector } from './connectors/skill.connector.js';
import { CanonicalCitizenData } from './interfaces/government-connector.interface.js';
import { db } from '../../../prisma/db.js'; // Assuming Prisma Next db client path

@Injectable()
export class IntegrationService {
  constructor(
    private readonly identityConnector: IdentityConnector,
    private readonly panConnector: PanConnector,
    private readonly skillConnector: SkillConnector,
  ) {}

  async fetchAndMapCitizenData(userId: number, identifier: string): Promise<CanonicalCitizenData> {
    const canonicalData: CanonicalCitizenData = {};
    const requestId = `AH-REQ-${Date.now()}`;

    // Helper to run connector and log audit
    const runConnector = async (connector: any, systemName: string) => {
      try {
        // 1. Check Consent
        const consent = await db.orm.public.Consent.where({ userId, systemName }).first();
        if (!consent || consent.revokedAt) {
          throw new BadRequestException(`Consent not granted for ${systemName}`);
        }

        // 2. Fetch Data
        const rawData = await connector.fetchData(identifier, {});
        
        // 3. Map Data
        const mappedData = connector.mapToCanonical(rawData);
        Object.assign(canonicalData, mappedData);

        // 4. Log Success
        await db.orm.public.IntegrationAuditLog.create({
          userId,
          requestId,
          systemName,
          action: 'FETCH_AND_MAP',
          status: 'SUCCESS',
        });
      } catch (error: any) {
        // Log Failure
        await db.orm.public.IntegrationAuditLog.create({
          userId,
          requestId,
          systemName,
          action: 'FETCH_AND_MAP',
          status: 'FAILED',
          details: error.message,
        });
        throw error;
      }
    };

    // Execute integrations
    await runConnector(this.identityConnector, 'AADHAAR_IDENTITY');
    await runConnector(this.panConnector, 'PAN_INCOMETAX');
    await runConnector(this.skillConnector, 'MAHARASHTRA_SKILL_DB');

    return canonicalData;
  }
}
