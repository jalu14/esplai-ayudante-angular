import { BaseEntity } from './base.entity';

export class MemberEntity extends BaseEntity {
  public givenName: string;
  public middleName: string;
  public surName: string;
  public description: string;
  public birthDate: string;

  public contactList?: any[];
  public allergyList?: any[];

  constructor(element: any | MemberEntity) {
    super(element);

    this.givenName = element.givenName;
    this.middleName = element.middleName;
    this.surName = element.surName;
    this.description = element.description;
    this.birthDate = element.birthDate;

    this.contactList = element.contactList ? element.contactList.map(c => c) : [];
    this.allergyList = element.allergyList ? element.allergyList.map(a => a) : [];
  }
}
