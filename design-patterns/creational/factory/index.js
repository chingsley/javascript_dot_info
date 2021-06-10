import { DishFactory } from "./dishFactory.js";

let dishFactory = new DishFactory();
let shrimpEntree = dishFactory.createDish("Shrimp Cutlets", "entree");
let lambMain = dishFactory.createDish("Lamb Chops", "main course");
let baklavaDessert = dishFactory.createDish("Baklava", "dessert");

console.log(shrimpEntree, lambMain, baklavaDessert);
