const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const carr = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatable values
carMakers.push(100); // hover it to see error // type inference stops number to push in array of string

// Help with "map"

carMakers.map((car: string): string => {
  return car;
});
