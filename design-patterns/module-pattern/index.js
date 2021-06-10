// // through the use of a closure we expose an object
// // as a public API which manages the private objects array
// function createCollection() {
//   // private members
//   var objects = [];

//   // public members
//   return {
//     addObject: function (object) {
//       objects.push(object);
//     },
//     removeObject: function (object) {
//       var index = objects.indexOf(object);
//       if (index >= 0) {
//         objects.splice(index, 1);
//       }
//     },
//     getObjects: function () {
//       return objects;
//     },
//   };
// }

// const collection = createCollection();

// collection.addObject("Bob");
// collection.addObject("Alice");
// collection.addObject("Franck");
// // prints ["Bob", "Alice", "Franck"]
// console.log(collection.getObjects());
// collection.removeObject("Alice");
// // prints ["Bob", "Franck"]
// console.log(collection.getObjects());
// console.log(collection.objects); // undefined (private)

{
  function initializeConfiguration(values) {
    this.randomNumber = Math.random();
    values = values || {};
    this.number = values.number || 5;
    this.size = values.size || 10;
  }

  const config = new initializeConfiguration({});
  console.log(config.size);
}
