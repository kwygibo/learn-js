
class Foo {
    // This is a computed property. It will not be picked up as a constructor.
    ["constructor"]() {
        console.log("called");
        this.a = 1;
    }
}

const foo = new Foo(); // No log
console.log(foo); // Foo {}
foo.constructor(); // Logs "called"
console.log(foo); // Foo { a: 1 }