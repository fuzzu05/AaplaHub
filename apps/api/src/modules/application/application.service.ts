import { Injectable } from '@nestjs/common';
import { db } from '../../../prisma/db.js';

@Injectable()
export class ApplicationService {
  async submitApplication(userId: number, serviceName: string, canonicalData: any, fee: number) {
    const applicationId = `AH-${Math.floor(100000 + Math.random() * 900000)}`;

    return db.orm.public.ServiceApplication.create({
      applicationId,
      userId,
      serviceName,
      fee,
      canonicalData,
      status: 'SUBMITTED', // Or DRAFT if payment is pending
      isPaid: false,
    });
  }

  async processPayment(applicationId: string) {
    const application = await db.orm.public.ServiceApplication.where({ applicationId }).first();
    if (!application) throw new Error("Application not found");

    await db.orm.public.ServiceApplication.where({ id: application.id }).delete();
    
    return db.orm.public.ServiceApplication.create({
      applicationId: application.applicationId,
      userId: application.userId,
      serviceName: application.serviceName,
      fee: application.fee,
      canonicalData: application.canonicalData,
      status: 'UNDER_REVIEW',
      isPaid: true,
    });
  }

  async updateStatus(applicationId: string, status: 'APPROVED' | 'REJECTED') {
    const application = await db.orm.public.ServiceApplication.where({ applicationId }).first();
    if (!application) throw new Error("Application not found");

    await db.orm.public.ServiceApplication.where({ id: application.id }).delete();

    return db.orm.public.ServiceApplication.create({
      applicationId: application.applicationId,
      userId: application.userId,
      serviceName: application.serviceName,
      fee: application.fee,
      canonicalData: application.canonicalData,
      status: status,
      isPaid: application.isPaid,
    });
  }

  async getCitizenApplications(userId: number) {
    const results = await db.orm.public.ServiceApplication.where({ userId }).all();
    return results;
  }

  async getAllApplications() {
    const results = await db.orm.public.ServiceApplication.all();
    return results;
  }

  async deleteApplication(applicationId: string) {
    const application = await db.orm.public.ServiceApplication.where({ applicationId }).first();
    if (application) {
      await db.orm.public.ServiceApplication.where({ id: application.id }).delete();
      return { success: true };
    }
    return { success: false };
  }
}
