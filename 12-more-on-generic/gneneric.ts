class ArrayOfNumbers {
  constructor ( public collection: number[])  { }

  get (index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString{
  constructor( public collection: string[]) {}
  get (index: number): string {
    return this.collection[index];
  }
}

class ArrayOfThing<T> {
  constructor(public collection: T[]) {}
  get(index: number):T {
    return this.collection[index];
  }
}
const arr=new ArrayOfThing(['a','b','c']);

// Example with generic function

function printString(arr: string[]): void {
  for (let i=0;i<arr.length;i++) {
    console.log(arr[i])
  }
}

function printNumber(arr: number[]): void {
  for (let i=0;i<arr.length;i++) {
    console.log(arr[i])
  }
}

function printAnyThing<T>(arr:T[]): void {
  for (let i=0;i<arr.length;i++) {
    console.log(arr[i])
    
}
}

printAnyThing<string>(['a','b','c']);

//////////Generic constraint

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house')
  }
}

interface   Printable {
  print(): void;
}


function priontHouseOrCars<T extends Printable>(arr: T[]): void {
  for (let i=0; i<arr.length;i++){
    arr[i].print();
  }
}

priontHouseOrCars<House>([new House(),new House()]);








