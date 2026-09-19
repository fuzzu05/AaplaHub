import { Module } from '@nestjs/common';
import { ConsentService } from './consent.service.js';
import { ConsentController } from './consent.controller.js';
import { AuthModule } from '../auth/auth.module.js';

@Module({
  imports: [AuthModule],
  providers: [ConsentService],
  controllers: [ConsentController],
  exports: [ConsentService],
})
export class ConsentModule {}
