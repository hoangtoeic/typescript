import { Sorter } from "./sorter";

export class NumbersCollection extends Sorter{
 
  constructor(public data: number[]) {
    super();
    }

  get length(): number {
    return this.data.length;
  }
  compare(lefIndex: number, rightIndex: number):boolean
  {
    return this.data[lefIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
// const collection = new NumbersCollection([1,-2,-4,5]);
// collection.length;