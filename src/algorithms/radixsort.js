function countsort(arr, n, place, a) {
	let freq = new Array(10).fill(0);
	let output = new Array(n);

	for (let i = 0; i < n; i++) {
		freq[Math.floor(arr[i] / place) % 10]++;
	}

	for (let i = 1; i < 10; i++) {
		freq[i] += freq[i - 1];
	}

	for (let i = n - 1; i >= 0; i--) {
		let x = freq[Math.floor(arr[i] / place) % 10] - 1;
		output[x] = arr[i];
		freq[Math.floor(arr[i] / place) % 10]--;
	}

	for (let i = 0; i < n; i++) {
		arr[i] = output[i];
		a.push([1, i, i]);
		a.push([2, i, i, arr[i], arr[i]]);
	}
}
export default function radixsort(arr, n, pace, toggleIsOn, finish) {
	let maxx = Math.max(...arr);
	let a = [];
	for (let i = 1; Math.floor(maxx / i) > 0; i *= 10) {
		countsort(arr, n, i, a);
	}
	for (let i = 0; i <= a.length; i++) {
		if (i === a.length) {
			for (let j = 0; j <= arr.length; j++) {
				if (j === arr.length) {
					setTimeout(() => {
						toggleIsOn();
						finish(arr);
					}, pace * (i + 1 + j));
				} else {
					setTimeout(() => {
						document.getElementById(j).style.backgroundColor = "#00ff44";
					}, pace * (i + j + 1));
				}
			}
		} else if (a[i][0] === 1) {
			setTimeout(() => {
				if (i > 0 && a.length - i >= 2 * n) {
					document.getElementById(a[i - 1][1]).style.backgroundColor = "#FFD700";
					document.getElementById(a[i - 1][2]).style.backgroundColor = "#FFD700";
				}
				document.getElementById(a[i][1]).style.backgroundColor = "red";
				document.getElementById(a[i][2]).style.backgroundColor = "red";
				let value = document.getElementById("swap").innerHTML;
				document.getElementById("swap").innerHTML = Number(value) + 1;
			}, pace * i);
		} else if (a[i][0] === 2) {
			setTimeout(() => {
				if (i > 0) {
					document.getElementById(a[i - 1][1]).style.backgroundColor = "#FFD700";
					document.getElementById(a[i - 1][2]).style.backgroundColor = "#FFD700";
				}
				document.getElementById(a[i][1]).style.height = `${a[i][3]}px`;
				document.getElementById(a[i][2]).style.height = `${a[i][4]}px`;
				let x = document.getElementById("swap").innerHTML;
				document.getElementById("swap").innerHTML = Number(x) + 1;
				document.getElementById(a[i][1]).style.backgroundColor = "#00ff44";
				document.getElementById(a[i][2]).style.backgroundColor = "#00ff44";
			}, pace * i);
		}
	}
}
