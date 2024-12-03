import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
export declare class NinjasController {
    private readonly ninjasService;
    constructor(ninjasService: NinjasService);
    getAllNinjas(weapon: string): {
        id: number;
        name: string;
        weapon: string;
    }[];
    addNinja(CreateNinjaDto: CreateNinjaDto): any;
    deleteNinja(id: string): void;
}
