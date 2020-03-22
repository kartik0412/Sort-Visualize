export default function heapsort(arr, n, pace, toggleIsOn, finish) {
	let a = [];
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		heapify(arr, n, i, a);
	}
	for (let i = n - 1; i >= 0; i--) {
		let x = arr[0];
		arr[0] = arr[i];
		arr[i] = x;
		a.push([1, 0, i]);
		a.push([2, 0, i, arr[0], arr[i]]);
		a.push([3, i]);
		heapify(arr, i, 0, a);
	}
	for (let i = 0; i <= a.length; i++) {
		if (i === a.length) {
			setTimeout(() => {
				toggleIsOn();
				finish(arr);
			}, pace * (i - 1));
		} else if (a[i][0] === 1) {
			setTimeout(() => {
				if (i > 0 && a[i - 1][0] !== 3) {
					document.getElementById(a[i - 1][1]).style.backgroundColor = "#FFD700";
					document.getElementById(a[i - 1][2]).style.backgroundColor = "#FFD700";
				}
				document.getElementById(a[i][1]).style.backgroundColor = "red";
				document.getElementById(a[i][2]).style.backgroundColor = "red";
			}, pace * i);
		} else if (a[i][0] === 2) {
			setTimeout(() => {
				if (i > 0 && a[i - 1][0] !== 3) {
					document.getElementById(a[i - 1][1]).style.backgroundColor = "#FFD700";
					document.getElementById(a[i - 1][2]).style.backgroundColor = "#FFD700";
				}
				document.getElementById(a[i][1]).style.height = `${a[i][3]}px`;
				document.getElementById(a[i][2]).style.height = `${a[i][4]}px`;
				document.getElementById(a[i][1]).style.backgroundColor = "green";
				document.getElementById(a[i][2]).style.backgroundColor = "green";
			}, pace * i);
		} else if (a[i][0] === 3) {
			setTimeout(() => {
				if (i > 0 && a[i - 1][0] !== 3) {
					document.getElementById(a[i - 1][1]).style.backgroundColor = "#FFD700";
					document.getElementById(a[i - 1][2]).style.backgroundColor = "#FFD700";
				}
				document.getElementById(a[i][1]).style.backgroundColor = "#00ff44";
			}, pace * i);
		}
	}
}

function heapify(arr, n, i, a) {
	let largest = i;
	let l = 2 * i + 1;
	let r = 2 * i + 2;

	if (l < n && arr[l] > arr[largest]) {
		a.push([1, largest, l]);
		a.push([2, largest, l, arr[largest], arr[l]]);
		largest = l;
	}
	if (r < n && arr[r] > arr[largest]) {
		a.push([1, largest, r]);
		a.push([2, largest, r, arr[largest], arr[r]]);
		largest = r;
	}
	if (largest !== i) {
		let x = arr[largest];
		let y = arr[i];
		arr[largest] = y;
		arr[i] = x;
		a.push([1, largest, i]);
		a.push([2, largest, i, arr[largest], arr[i]]);
		heapify(arr, n, largest, a);
	}
}
