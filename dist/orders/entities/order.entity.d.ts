import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Order {
    id: number;
    user: User;
    product: Product;
    quantity: number;
    total: number;
}
