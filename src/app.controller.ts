import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }
}
