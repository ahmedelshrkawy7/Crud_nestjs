import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  getAllNinjas(@Query('weapon') weapon: string) {
    return this.ninjasService.getNinjas(weapon);
  }

  @Post()
  @UseGuards(BeltGuard)
  addNinja(@Body(new ValidationPipe()) CreateNinjaDto: CreateNinjaDto) {
    return this.ninjasService.create(CreateNinjaDto);
  }

  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return this.ninjasService.deleteNinja(+id);
  }

  // @Get(':id')
  // getOneNinja(@Param('id') id: string) {
  //   return this.ninjasService.getNinjaById(id);
  // }
}
