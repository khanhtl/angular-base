import { BaseEntity } from "../entities";

export type ServiceResponseDto<T extends BaseEntity> = {
  success: boolean;
  serverMessage: string;
  userService: string;
  statusCode: string;
  data: T[] | number;
}
