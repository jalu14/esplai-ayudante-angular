import { BaseEntity } from './base.entity';

export class MemberEntity extends BaseEntity {
  public givenName: string;
  public middleName: string;
  public surName: string;
  public description: string;
  public birthDate: string;
  public gender: 'male' | 'female';
  public isInstructor: boolean;
  public currentBranch: number;

  public contactList?: any[];
  public allergyList?: any[];
  public documentList?: any[];

  constructor(element: any | MemberEntity) {
    super(element);

    this.givenName = element.givenName;
    this.middleName = element.middleName;
    this.surName = element.surName;
    this.description = element.description;
    this.birthDate = element.birthDate;
    this.gender = element.gender;
    this.isInstructor = element.isInstructor;
    this.currentBranch = element.currentBranch;

    this.contactList = element.contactList ? element.contactList.map(c => c) : [];
    this.allergyList = element.allergyList ? element.allergyList.map(a => a) : [];
    this.documentList = element.documentList ? element.documentList.map(d => d) : [];
  }
}
