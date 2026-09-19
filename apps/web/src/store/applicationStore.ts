/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

interface ApplicationState {
  currentStep: 'SERVICES' | 'ELIGIBILITY' | 'CONSENT' | 'FETCHING' | 'APPLICATION' | 'PAYMENT' | 'SUCCESS';
  selectedService: string | null;
  citizenData: any | null;
  applicationId: string | null;
  feeAmount: number;
  
  setStep: (step: ApplicationState['currentStep']) => void;
  selectService: (serviceName: string, fee: number) => void;
  setCitizenData: (data: any) => void;
  setApplicationId: (id: string) => void;
  setFeeAmount: (fee: number) => void;
  reset: () => void;
}

export const useApplicationStore = create<ApplicationState>((set) => ({
  currentStep: 'SERVICES',
  selectedService: null,
  citizenData: null,
  applicationId: null,
  feeAmount: 0,
  
  setStep: (step) => set({ currentStep: step }),
  selectService: (serviceName, feeAmount) => set({ selectedService: serviceName, feeAmount, currentStep: 'ELIGIBILITY' }),
  setCitizenData: (data) => set({ citizenData: data }),
  setApplicationId: (id) => set({ applicationId: id }),
  setFeeAmount: (fee) => set({ feeAmount: fee }),
  reset: () => set({
    currentStep: 'SERVICES',
    selectedService: null,
    citizenData: null,
    applicationId: null,
    feeAmount: 0,
  }),
}));
