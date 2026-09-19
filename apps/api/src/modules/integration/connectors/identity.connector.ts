import { Injectable } from '@nestjs/common';
import { GovernmentConnector, CanonicalCitizenData } from '../interfaces/government-connector.interface.js';

@Injectable()
export class IdentityConnector implements GovernmentConnector {
  getSystemName(): string {
    return 'AADHAAR_IDENTITY';
  }

  async fetchData(identifier: string, authData: any): Promise<any> {
    // Simulating external network call to Mock Aadhaar API
    console.log(`[IdentityConnector] Fetching data for ${identifier}`);
    const baseUrl = process.env.API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/mock-api/identity/${identifier}`);
    if (!res.ok) {
      throw new Error('Identity verification failed');
    }
    return res.json();
  }

  mapToCanonical(rawData: any): Partial<CanonicalCitizenData> {
    return {
      name: rawData.full_name,
      dateOfBirth: rawData.dob,
      identityVerified: rawData.identity_status === 'VERIFIED',
    };
  }
}
