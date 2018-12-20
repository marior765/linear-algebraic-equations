
export function LU(n: number, a: number[][], b: number[], x: number[])
    : number[] {
        for (let j = 0; j < n; j++) {
            for (let i = j; i < n; i++) {
                for (let k = 0; k <= j - 1; k++)
                    a[i][j] -= (a[i][k] * a[k][j]);
            }
            //
            for (let i = j + 1; i < n; i++) {
                for (let k = 0; k <= j - 1; k++)
                    a[j][i] -= (a[j][k] * a[k][i]);
                a[j][i] /= a[j][j];
            }
        }
        //LY=B
        for (let i = 0; i < n; i++) {
            x[i] = b[i];
            for (let j = 0; j <= i - 1; j++)
                x[i] -= (a[i][j] * x[j]);
            x[i] /= a[i][i];
        }
        //Ux = Y
        for (let i = n - 1; i >= 0; i--) {
            for (let j = i + 1; j < n; j++) {
                x[i] -= a[i][j] * x[j];
            }
        }
        for (let i = 0; i < n; i++) {
            console.log(`In LU X[${i}] = ${x[i]}`);
        }
        return x;
}