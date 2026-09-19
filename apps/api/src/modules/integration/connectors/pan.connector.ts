import { Injectable } from '@nestjs/common';
import { GovernmentConnector, CanonicalCitizenData } from '../interfaces/government-connector.interface.js';

@Injectable()
export class PanConnector implements GovernmentConnector {
  getSystemName(): string {
    return 'PAN_INCOMETAX';
  }

  async fetchData(identifier: string, authData: any): Promise<any> {
    // Simulating external network call to Mock PAN API
    console.log(`[PanConnector] Fetching data for ${identifier}`);
    const baseUrl = process.env.API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/mock-api/pan/${identifier}`);
    if (!res.ok) {
      throw new Error('PAN verification failed');
    }
    return res.json();
  }

  mapToCanonical(rawData: any): Partial<CanonicalCitizenData> {
    return {
      // PAN typically doesn't override the primary name in AaplaHub unless explicitly needed
      panVerified: rawData.pan_status === 'ACTIVE',
    };
  }
}
