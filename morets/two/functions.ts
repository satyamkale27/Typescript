const add = (a: number, b: number): number => {
  /* number is return type of this fun */
  return a + b;
  // type inference works on return type of function, it identifyes value by return type
};

const substract = (a: number, b: number) => {
  return a - b; // type inference knows autonaticly the value type of function using return type
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(forecast);
