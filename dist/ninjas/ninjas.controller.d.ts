import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
export declare class NinjasController {
    private readonly ninjasService;
    constructor(ninjasService: NinjasService);
    getAllNinjas(weapon: string): Promise<import("./entities/ninja.entity").Ninja[]>;
    addNinja(CreateNinjaDto: CreateNinjaDto): any;
    deleteNinja(id: string): void;
}
