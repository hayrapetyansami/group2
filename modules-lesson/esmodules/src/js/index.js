// import {a, b, sajkdhajshf as c} from "./modules/test";
// import {hi} from "./modules/test";
// import * as data from "./modules/test";
import test, * as fromTest from "./modules/test";

console.log(test);

const {a, b, sajkdhajshf:c, hi} = fromTest;

console.log(a);
console.log(b);
console.log(c);

console.log(hi("John"));