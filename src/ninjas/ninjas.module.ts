import { Module } from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { NinjasController } from './ninjas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ninja } from './entities/ninja.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ninja])],
  controllers: [NinjasController],
  providers: [NinjasService],
  exports: [NinjasService], // Export if used in other modules
})
export class NinjasModule {}
