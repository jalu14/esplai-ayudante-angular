export class EventEntity {
  public name: string;
  public memberList: any[];
  public description: string;
  public isPublic: boolean;

  public endsSameDay: boolean;
  public startDate: string;
  public endDate: string;

  constructor(element: any | EventEntity) {
    this.name = element.name || null;
    this.memberList = element.memberList && element.memberList.length ? element.memberList.map(m => m) : [];
    this.description = element.description || null;
    this.isPublic = element.isPublic || false;

    this.endsSameDay = element.endsSameDay || true;
    this.startDate = element.startDate || null;
    this.endDate = element.endDate || null;
  }
}
