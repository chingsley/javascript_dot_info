module.exports.errorTest = function errorTest() {
  try {
    console.log("try block");
    return "return value";
    // throw new Error("error thrown!!!");
  } catch (error) {
    console.log("catch block: ", error);
    // throw error;
  } finally {
    console.log("finally...");
  }
};
