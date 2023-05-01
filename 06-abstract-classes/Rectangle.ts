import { Shape } from "./Shape";

export class Rectangle extends Shape {
  calculateArea(): number {
    return this._width * this._length;
  }
  constructor(
    private thenX: number,
    private thenY: number,
    private _width: number,
    private _length: number
  ) {
    super(thenX, thenY);
  }

  public set width(value: number) {
    this._width = value;
  }
  public get width(): number {
    return this._width;
  }

  public set length(value: number) {
    this._length = value;
  }

  public get length(): number {
    return this._length;
  }

  getInfo(): string {
    return super.getInfo() + `, width=${this._width}, length=${this._length}`;
  }
}
