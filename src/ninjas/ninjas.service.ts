import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'ninjaA', weapon: 'starts' },
    { id: 2, name: 'ninjaB', weapon: 'nunChunks' },
  ];

  getNinjas(weapon?: string) {
    if (weapon) return this.ninjas.filter((el) => el.weapon == weapon);
    return this.ninjas;
  }

  create(CreateNinjaDto) {
    const newNinja = {
      id: Date.now(),
      ...CreateNinjaDto,
    };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  deleteNinja(id:number){
    this.ninjas = this.ninjas.filter((el)=> el.id!== id)

  }
}
