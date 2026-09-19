import { Module } from '@nestjs/common';
import { MockGovernmentApiController } from './mock-api.controller.js';

@Module({
  controllers: [MockGovernmentApiController]
})
export class MockGovernmentApiModule {}
