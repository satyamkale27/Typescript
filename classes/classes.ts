class Vechicle {
  //   public drive(): void {
  //     console.log("chugga chugga");
  //   }
  protected honk(): void {
    console.log("beep");
  }
}

class Carr extends Vechicle {
  private drive(): void {
    console.log("vroom"); // overite the method in this class only(child class) // cant overwrite the access like private,public,protected
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk(); // child can also access this method
  }
}

// const vechicle = new Vechicle();
// vechicle.drive();
// vechicle.honk();

const carrr = new Carr();
carrr.startDrivingProcess();
