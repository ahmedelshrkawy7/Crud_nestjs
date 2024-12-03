import { Module } from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { NinjasController } from './ninjas.controller';

@Module({
  controllers: [NinjasController],
  providers: [NinjasService],
  exports: [NinjasService], // Export if used in other modules
})
export class NinjasModule {}
