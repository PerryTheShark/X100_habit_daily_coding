function pow(number) {
    let x = number;
    return x*x;
}

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

const rand = new Person("Rand McKinnon", 33, "M");
const ken = new Person("Ken Jones", 39, "M");

// Animal properties and method encapsulation
const Animal = {
    type: "Invertebrates", // Default value of properties
    displayType() {
      // Method which will display type of Animal
      console.log(this.type);
    },
  };
  
  // Create new animal type called animal1
  const animal1 = Object.create(Animal);
  animal1.displayType(); // Logs: Invertebrates
  
  // Create new animal type called fish
  const fish = Object.create(Animal);
  fish.type = "Fishes";
  fish.displayType(); // Logs: Fishes

  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  const myCar = new Car("Eagle", "Talon TSi", 1993);

  console.log(myCar)