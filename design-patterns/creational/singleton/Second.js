import { cache } from "./utils/cache";
export class Second {
  constructor() {
    console.log(cache.get("book"));
  }
}
