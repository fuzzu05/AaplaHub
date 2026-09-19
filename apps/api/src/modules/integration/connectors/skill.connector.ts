import { Injectable } from '@nestjs/common';
import { GovernmentConnector, CanonicalCitizenData } from '../interfaces/government-connector.interface.js';

@Injectable()
export class SkillConnector implements GovernmentConnector {
  getSystemName(): string {
    return 'MAHARASHTRA_SKILL_DB';
  }

  async fetchData(identifier: string, authData: any): Promise<any> {
    // Simulating external network call to Mock Skill API
    console.log(`[SkillConnector] Fetching data for ${identifier}`);
    const baseUrl = process.env.API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/mock-api/mahasem/${identifier}`);
    if (!res.ok) {
      throw new Error('Skill verification failed');
    }
    return res.json();
  }

  mapToCanonical(rawData: any): Partial<CanonicalCitizenData> {
    return {
      skills: [rawData.certification],
    };
  }
}
