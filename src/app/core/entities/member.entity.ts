import { BaseEntity } from './base.entity';

export class MemberEntity extends BaseEntity {
  public givenName: string;
  public middleName: string;
  public surName: string;
  public description: string;
  public birthDate: string;

  public contactList: any[];
  public allergyList: any[];

  constructor(element: any | MemberEntity) {
    super(element);
  }
}
