import { Subject } from "./subject.js";

let subject = new Subject();

function Observer1() {
  console.log("Hi from Observable 1");
}

function Observer2() {
  console.log("Hi from Observable 2");
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);

subject.notifyAll();

subject.unsubscribe(Observer2);
subject.notifyAll();
