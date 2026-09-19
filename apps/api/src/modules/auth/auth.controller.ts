import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('mock-oauth-login')
  async mockLogin(@Body() body: { email: string; name: string }) {
    // In a real flow, this data comes from an OAuth provider callback.
    // For the POC, the frontend sends this after the mock "OAuth Consent Screen".
    return this.authService.mockOAuthLogin(body);
  }
}
