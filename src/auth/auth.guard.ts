
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { jwtConstants } from './constants';
  import { Request } from 'express';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      
      const request = context.switchToHttp().getRequest();
      
      
      
      const token = this.extractTokenFromHeader(request);
    
      if (!token) {
        throw new UnauthorizedException();
      }
      try {
        
        const payload = await this.jwtService.verifyAsync(
          token,
          {
            secret: jwtConstants.secret
          }
        );
        // 💡 We're assigning the payload to the request object here
        // so that we can access it in our route handlers
        // console.log(payload);
        
        request.uaer = payload;
        console.log(request.uaer);
        
      } catch {
        throw new UnauthorizedException();
      }
      return true;
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
    
      const tokenHeader = request.headers.token as string;
  
      // Check if 'tokenHeader' is undefined or null
      if (!tokenHeader) {
        return undefined;
      }
    
      const [ token] = tokenHeader.split(' ') ?? [];
      
      return token 
      // return type === 'Bearer' ? token : undefined;
    }
    
    
  }