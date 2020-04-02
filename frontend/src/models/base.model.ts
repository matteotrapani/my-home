export interface IBaseModel {
  id: string;
}

export abstract class BaseModel implements IBaseModel {
  id: string;
}
