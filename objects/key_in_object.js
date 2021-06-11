{
  const employee = {
    name: "Chris",
    age: 25,
  };
  console.log("name" in employee); //returns true.
  console.log("age" in employee); //returns true.
  console.log("experience" in employee); //retuens false.
}

module.exports = {};
