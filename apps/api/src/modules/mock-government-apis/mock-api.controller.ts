import { Controller, Get, Param } from '@nestjs/common';

@Controller('mock-api')
export class MockGovernmentApiController {
  @Get('identity/:id')
  getIdentity(@Param('id') id: string) {
    return {
      full_name: 'Rahul Sharma',
      dob: '2003-05-14',
      identity_status: 'VERIFIED'
    };
  }

  @Get('pan/:id')
  getPan(@Param('id') id: string) {
    return {
      pan_holder_name: 'Rahul Sharma',
      pan_status: 'ACTIVE'
    };
  }

  @Get('mahasem/:id')
  getSkill(@Param('id') id: string) {
    return {
      candidateName: 'Rahul Sharma',
      certification: 'Electrician Level 2'
    };
  }
}
