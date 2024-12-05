import { Repository } from 'typeorm';
import { Ninja } from './entities/ninja.entity';
export declare class NinjasService {
    private NinjaRepository;
    private ninjas;
    constructor(NinjaRepository: Repository<Ninja>);
    getNinjas(weapon: string): Promise<Ninja[]>;
    create(CreateNinjaDto: any): any;
    deleteNinja(id: number): void;
}
