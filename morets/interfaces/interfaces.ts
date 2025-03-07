interface vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 200,
  broken: true,
  summary(): string {
    return `Name:${this.name}`;
  },
};

const printVechicle = (vehicle: vehicle): void => {
  console.log(`Name:${vehicle.name}`);
  console.log(`Name:${vehicle.year}`);
  console.log(`Name:${vehicle.broken}`);
};

printVechicle(oldCivic);

/*

// done using Anotation 

const printVechicle = (vehicle: {
  name: string;     // using annotations object structure has to be written in every function that makes code duplication, and hard to read
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name:${vehicle.name}`);
  console.log(`Name:${vehicle.year}`);
  console.log(`Name:${vehicle.broken}`);
};

printVechicle(oldCivic);

*/
