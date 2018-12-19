

export function QR(n: number, a: number[][], b: number[], x: number[]) 
        : void {
        //QR
        let alpha: number, k: number, t: number;
        for (let j = 0; j < (n - 1); j++) {
            alpha = 0;
            for (let i = j; i < n; i++) {
                alpha += a[i][j] * a[i][j];
            }
            alpha = Math.sqrt(alpha);
            if (a[j][j] >= 0) {
                alpha *= -1;
            }
            k = 1 / (alpha * alpha - alpha * a[j][j]);
            a[j][j] -= alpha;
            for (let i = (j + 1); i < n; i++) {
                t = 0;
                for (let l = j; l < n; l++) {
                    t += a[l][j] * a[l][i];
                }
                for (let l = j; l < n; l++) {
                    a[l][i] -= k * a[l][j] * t;
                }
            }
            t = 0;
            for (let i = j; i < n; i++) {
                t += a[i][j] * b[i];
            }
            for (let i = j; i < n; i++) {
                b[i] -= k * a[i][j] * t;
            }
            a[j][j] = alpha;
        }
        for (let i = (n - 1); i >= 0; i--) {
            x[i] = b[i];
            for (let j = i + 1; j < n; j++) {
                x[i] -= a[i][j] * x[j];
            }
            x[i] /= a[i][i];
        }
        for (let i = 0; i < 3; i++) {
            console.log(`In QR X[${i}] = ${x[i]}`);
        }
}