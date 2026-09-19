export interface CanonicalCitizenData {
  name?: string;
  dateOfBirth?: string;
  identityVerified?: boolean;
  panVerified?: boolean;
  skills?: string[];
}

export interface GovernmentConnector {
  getSystemName(): string;
  fetchData(identifier: string, authData: any): Promise<any>;
  mapToCanonical(rawData: any): Partial<CanonicalCitizenData>;
}
