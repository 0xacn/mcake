import Matrix from "./index";

const a = new Matrix(2, 3, [[1, 2, 3], [4, 5, 6]]);
const b = new Matrix(3, 2, [[7, 8], [9, 10], [11, 12]]);
const c = Matrix.multiply(a, b);

console.log(`Result: ${c.data}`);
