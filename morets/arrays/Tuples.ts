const pepsi: [string, boolean, number] = ["brown", true, 40]; // it is a tuple // it has very consistance order of element

pepsi[0] = 10; // gets error by ts

// can also do

/*

type Drink = [string, boolean, number];   // it is Type alias

const pepsi: Drink = ['brown', true, 40];  // can reuse drink
const sprite: Drink = ['clear', true, 40]; // can reuse drink

*/
