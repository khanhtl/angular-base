import { BaseEntity } from './../../../shared/models/entities/base.entity';
export class ProductEntity extends BaseEntity{
  id?: number;
  title?:string;
  price?:string;
  category?:string;
  description?:string;
  image?: string;
}
