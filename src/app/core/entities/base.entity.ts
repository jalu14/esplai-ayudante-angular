export class BaseEntity {
  public id: number;
  public createdBy: string;
  public createdDate: string;

  constructor(element: any) {
    this.id = element.id || null;
    this.createdBy = element.createdBy || true;
    this.createdDate = element.createdDate || null;
  }
}
