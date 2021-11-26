class Vehicle2 {
  // color: string = 'red';
  constructor(public color: string) {
      this.color = color;
  }
  protected honk(): void{
    console.log('honk')
  }
}
const vehicle = new Vehicle2('orange');
console.log(vehicle.color);

class Car extends Vehicle2{
constructor(public wheels: number, color: string) {
  super(color);
}

   private drive(): void{
    console.log('drive extended')
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk()
  }
}

const car = new Car(111,'red');
car.startDrivingProcess();
//car.honk();