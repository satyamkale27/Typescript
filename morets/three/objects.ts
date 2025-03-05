const profile = {
  name: "satyam",
  age: 21,
  coords: {
    lat: 0,
    lng: 15, // nested object
  },

  setAge(age: number): void {
    this.age = age; // function inside object
  },
};

const { age, name }: { age: number; name: string } = profile; // destructuring with type notations
// if we want to use destructuring we have to write thwe structure of profile object

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
