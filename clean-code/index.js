{
  let name = "John";
  //Bad way.
  if (name === "John" || name === "Ben" || name === "Chris") {
    console.log("included");
  }
  //Better way.
  if (["John", "Ben", "Chris"].includes(name)) {
    console.log("included");
  }
}
