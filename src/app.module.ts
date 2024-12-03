import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasController } from './ninjas/ninjas.controller';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [NinjasModule, UsersModule],
  controllers: [AppController, NinjasController],
  providers: [AppService],
})
export class AppModule {}
