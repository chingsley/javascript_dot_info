function handleExclusiveValues(promo, changes) {
  const exclusiveFields = [
    // ["title", "titleV2"],
    // ["description", "descriptionV2"],
    "title",
    "titleV2",
    "description",
    "descriptionV2",
  ];
  const pArr = exclusiveFields.filter(([field1, field2]) => {
    // if (promo[field1] && changes[field2]) {
    //   return true;
    // }
    // return false;
    return promo[field1] && changes[field2];
  });

  return pArr;
}

const a = handleExclusiveValues({ title: "john" }, { titleV2: "james" });
console.log(">>>>>>>>>>>>", a);
