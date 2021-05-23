const { errorTest } = require("./errors");
const { ValidationError, NotFoundError } = require("./errors/customErrors");

{
  // console.log(errorTest());
}

{
  // try {
  //     const ve = new ValidationError("bad request");
  //     // console.log(ve);
  //     throw ve;
  //   } catch (error) {
  //     console.log(error.message, error.status, error.name);
  //     console.log(error instanceof ValidationError);
  //   }
}

{
  // try {
  //   throw new NotFoundError("result not found!!!");
  // } catch (error) {
  //   console.log(error.message, error.status, error.name);
  //   console.log(error instanceof NotFoundError);
  // }
}
