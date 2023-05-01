import { Shape } from "./Shape";

export class Circle extends Shape {
  calculateArea(): number {
    return Math.PI * Math.pow(this._radius, 2);
  }
  constructor(
    private thenX: number,
    private thenY: number,
    private _radius: number
  ) {
    super(thenX, thenY);
  }

  public set setRadius(value: number) {
    this._radius = value;
  }
  public get getRadius(): number {
    return this._radius;
  }

  getInfo(): string {
    return super.getInfo() + `, radius is = ${this._radius}`;
  }
}
