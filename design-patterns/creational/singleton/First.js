import { cache } from "./utils/cache";
export class First {
  constructor() {
    cache.add("book", "Harry Potter");
  }
}
