class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log("name: " + this.name + ", age: " + this.age);
  }
}
let person1 = new Person("Victor", 17);
let person2 = new Person("Alice", 38);
person1.getInfo();
person2.getInfo();

class Car {
  owner;
  constructor(brend, model, year, number) {
    this.brend = brend;
    this.model = model;
    this.year = year;
    this.number = number;
    //console.log(this.brend, this.model, this.year, this.number);
  }
  addOwner(owner) {
    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log("you are too young to be an owner");
    }

    {
      console.log(this.brend, this.model, this.year, this.number, owner);
    }
  }
  getCarInfo() {
    if (this.owner) {
      this.owner.getInfo();
    }
  }
}

let bmw = new Car("bmw", "x5", "2019", "AA 2123 HB");
bmw.addOwner(person1);

let toyota = new Car("toyota", "camry", "2020", "BH 5894 AB");
toyota.addOwner(person2);
