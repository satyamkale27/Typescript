// some types in typescript
// let id: number = 5;
// let company: string = "Acme Corp";
// let isPublisher: boolean = true;
// let ids: number[] = [1, 2, 3, 4];
// let x: any = "pedro";
// let xArr: any[] = ["pedro", 0, true];

// const concatenateStrings = (a: string, b: string): string => {
//   // string parameter and string return type
//   return a + b;
// };

// console.log(concatenateStrings("Hello", "world"));
// console.log(concatenateStrings("5", "10"));

// interface UserInterface {
//   // it is BluePrint of object and how it looks like
//   id: number;
//   name: string;
//   age?: number; // ? means it is optional
//   greet(message: string): void; // function which is returning nothing
// }

// const User: UserInterface = {
//   id: 2,
//   name: "Satyam",
//   greet(message) {
//     console.log(message);
//   },
// };

// User.greet("Hello");

// if (!User.age) {
//   console.log("User is not defined");
// } else {
//   console.log(User.age);
// }

// type IDdfieldType = string | number;

// const printId = (id: IDdfieldType) => {
//   // it can be number and also a string, accepts both |(union)
//   console.log("iD" + id);
// };

// printId("123");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// interface BusinessPartner {
//   name: string;
//   creditScore: number;
// }

// interface UserIdentity {
//   id: number;
//   email: string;
// }

// type Employee = BusinessPartner & UserIdentity; // & meanse intersection

// const signContract = (employee: Employee): void => {
//   console.log(
//     "Contract signed by " + employee.name + " with email: " + employee.email
//   );
// };

// signContract({
//   name: "Satyam",
//   creditScore: 800,
//   id: 34,
//   email: "satyam@gmail.com",
// });

enum LoginError {
  Unauthorizzed = "unauthorized",
  NoUser = "nouser",
  WrongCrdentials = "wrongcredentials",
  Internal = "internal",
}

const printErrorMsg = (error: LoginError) => {
  if (error == LoginError.Unauthorizzed) {
    console.log("user not authorised");
  } else if (error == LoginError.WrongCrdentials) {
    console.log("Wrong crendientials");
  } else if (error == LoginError.NoUser) {
    console.log("No user was found with that username");
  } else {
    console.log("internal error");
  }
};

printErrorMsg(LoginError.WrongCrdentials);
