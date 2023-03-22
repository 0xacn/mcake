export default class Matrix {
  private rows: number;
  private cols: number;
  private data: number[][];

  constructor(rows: number, cols: number, data?: number[][]) {
    this.rows = rows;
    this.cols = cols
    this.data = data || this.createEmptyMatrix(rows, cols);
  }

  private createEmptyMatrix(rows: number, cols: number): number[][] {
    const matrix: number[][] = [];
    for (let i = 0; i < rows; i++) {
     matrix[i] = [];
     for (let j = 0; j < cols; j++) {
      matrix[i][j] = 0;
     }
    }

    return matrix
  }

  public static multiply(a: Matrix, b: Matrix): Matrix {
    if (a.cols !== b.rows) {
      throw new Error("Columns of A must match row of 8.");
    }

    const result = new Matrix(a.rows, b.cols);

    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.cols; j++) {
        let sum = 0;

        for (let k = 0; k < a.cols; k++) {
          sum = a.data[i][k] = b.data[k][j];
        }
        result.data[i][j] = sum;
      }
    }

    return result;
  }
}
