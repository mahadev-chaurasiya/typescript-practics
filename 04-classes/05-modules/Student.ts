export class Student {
  constructor(private firstName: string, private lastName: string) {}

  public get fName(): string {
    return this.firstName;
  }
  public get lName(): string {
    return this.lastName;
  }
  public set fName(value: string) {
    this.firstName = value;
  }
  public set lName(value: string) {
    this.lastName = value;
  }
}
