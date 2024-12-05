import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
export declare class OrdersService {
    private orderRepositery;
    constructor(orderRepositery: Repository<Order>);
    create(createOrderDto: CreateOrderDto): Promise<CreateOrderDto & Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): string;
    update(id: number, updateOrderDto: UpdateOrderDto): string;
    remove(id: number): string;
}
