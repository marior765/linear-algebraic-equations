
export function LDL(n: number, a: number[][], b: number[], x: number[]) 
        : void {
	for (let j = 0; j < n; j++) {
		for (let k = 0; k < j; k++) {
			a[j][j] -= a[j][k] * a[j][k] * a[k][k];
		}
		for (let i = (j + 1); i < n; i++) {
			for (let k = 0; k < j; k++) {
				a[i][j] -= a[i][k] * a[k][k] * a[j][k];
			}
			a[i][j] /= a[j][j];
		}
	}
	for (let i = 0; i < n; i++) {
		x[i] = b[i];
		for (let j = 0; j < i; j++) {
			x[i] -= a[i][j] * x[j];
		}
	}
	for (let i = 0; i < n; i++) {
		x[i] = x[i] / a[i][i];
	}
	for (let i = (n - 1); i >= 0; i--) {
		for (let j = (i + 1); j < n; j++) {
			x[i] -= a[j][i] * x[j];
		}
	}
	for (let i = 0; i < 3; i++) {
        console.log(`In LDL X[${i}] = ${x[i]}`);
	}
}