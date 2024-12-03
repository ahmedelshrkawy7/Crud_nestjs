export declare class NinjasService {
    private ninjas;
    getNinjas(weapon?: string): {
        id: number;
        name: string;
        weapon: string;
    }[];
    create(CreateNinjaDto: any): any;
    deleteNinja(id: number): void;
}
