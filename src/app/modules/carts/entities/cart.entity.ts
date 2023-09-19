import { BaseEntity } from './../../../shared/models/entities/base.entity';
export class CartEntity extends BaseEntity{
  productId?:number;
  productPrice?:number;
  quantity?:number;
}
