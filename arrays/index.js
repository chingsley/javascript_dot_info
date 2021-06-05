{
  // function handleExclusiveValues(promo, changes) {
  //   const exclusiveFields = [
  //     // ["title", "titleV2"],
  //     // ["description", "descriptionV2"],
  //     "title",
  //     "titleV2",
  //     "description",
  //     "descriptionV2",
  //   ];
  //   const pArr = exclusiveFields.filter(([field1, field2]) => {
  //     // if (promo[field1] && changes[field2]) {
  //     //   return true;
  //     // }
  //     // return false;
  //     return promo[field1] && changes[field2];
  //   });
  //   return pArr;
  // }
  // const a = handleExclusiveValues({ title: "john" }, { titleV2: "james" });
  // console.log(">>>>>>>>>>>>", a);
}

{
  //   // Flattening multi-dimensional array
  //   const arr = [5, [1, 2], [4, 8]];
  //   console.log(arr.flat()); //returns [5, 1, 2, 4, 8]
  //   const twoLevelArr = [4, ["John", 7, [5, 9]]];
  //   console.log(twoLevelArr.flat(2)); //returns [4, "John", 7, 5, 9]
}

{
  // // EXTRACT UNIQUE VALUES
  // const languages = [
  //   "JavaScript",
  //   "Python",
  //   "Python",
  //   "JavaScript",
  //   "HTML",
  //   "Python",
  // ];
  // console.log(new Set(languages));
  // const uniqueLanguages = [...new Set(languages)];
  // console.log(uniqueLanguages);
}

{
  // // CONVERTING STRING TO ARRAY
  // console.log([..."john"]);
}

{
  // CONVERT A NUMBER INTO AN ARRAY OF DIGITS
  const toArray = (num) => [...`${num}`].map((elem) => parseInt(elem));
  console.log(toArray(1234)); //returns [1, 2, 3, 4]
  console.log(toArray(758999)); //returns [7, 5, 8, 9, 9, 9]
}
