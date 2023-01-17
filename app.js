class Person {
    constructor(name, age) {
        this.info = name + "s age is " + age;
    }
}

  var john = new Person('john', 34)

  //Test.assertEquals(john.info, 'johns age is 34')

  console.log(john.name + "s age is " + john.age); // 