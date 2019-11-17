export class EventEntity {
  public name: string;
  public description: string;
  public isPublic: boolean;

  public endsSameDay: boolean;
  public startDate: string;
  public endDate: string;

  public createdBy: string;
  public createdDate: string;

  public managerList: any[];
  public attendantList: any[];

  public taskList: any[];

  constructor(element: any | EventEntity) {
    this.name = element.name || null;
    this.description = element.description || null;
    this.isPublic = element.isPublic || false;

    this.endsSameDay = element.endsSameDay || true;
    this.startDate = element.startDate || null;
    this.endDate = element.endDate || null;

    this.managerList = element.managerList && element.managerList.length ? element.managerList.map(m => m) : [];
    this.attendantList = element.attendantList && element.attendantList.length ? element.attendantList.map(a => a) : [];
    this.taskList = element.taskList && element.taskList.length ? element.taskList.map(t => t) : [];
  }
}
