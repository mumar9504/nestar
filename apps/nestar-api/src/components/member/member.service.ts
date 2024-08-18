import { Injectable } from '@nestjs/common';

@Injectable()
export class MemberService {

  public async signup(): Promise<string> {
    console.log('Service signup');
    return 'signup executed!';
  }

  public async login(): Promise<string> {
    console.log('Service login');
    return 'login executed!';
  }

  public async updateMember(): Promise<string> {
    console.log('Service updateMember');
    return 'updateMember executed!';
  }

  public async getMember(): Promise<string> {
    console.log('Service getMember');
    return 'getMember executed!';
  }
}
