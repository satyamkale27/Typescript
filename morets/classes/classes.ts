class Vechicle {
  //   public drive(): void {
  //     console.log("chugga chugga");
  //   }

  color: string;

  constructor(color: string) {
    this.color = color; // does initial assigment
  }

  protected honk(): void {
    console.log("beep");
  }
}

class Carr extends Vechicle {
  constructor(public wheels: number, color: string) {
    // public wheels: number   creates public field wheels and assigns agrument to it in same line it is ts functionality
    super(color);
  }
  private drive(): void {
    console.log("vroom"); // overite the method in this class only(child class) // cant overwrite the access like private,public,protected
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk(); // child can also access this method
  }
}

const vechicle = new Vechicle("orange");
// vechicle.drive();
// vechicle.honk();

const carrr = new Carr(4, "orange");
carrr.startDrivingProcess();
console.log(carrr.color);
