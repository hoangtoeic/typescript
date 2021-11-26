const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsbyMake: string[][] = [];

//help with inference when extracting values
const car2 = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values


// help with 'map'
carMakers.map((car:string): string =>{
  return car.toUpperCase();
}) 

// flexible types
const importantDates: (Date | string)[] =  [];
importantDates.push('2021');
importantDates.push(new Date());