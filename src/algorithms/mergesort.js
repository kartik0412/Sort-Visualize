function Sort(arr, l, r, a) {
	if (l < r) {
		let m = l + Math.floor((r - l) / 2);
		Sort(arr, l, m, a);
		Sort(arr, m + 1, r, a);
		merge(arr, l, m, r, a);
	} else if (l === 0 && r === arr.length - 1) {
		a.push([3, l]);
	}
}

function merge(arr, l, m, r, a) {
	let i = l;
	let mid = m;
	let j = mid + 1;
	let k = 0;
	let temp = [];
	while (i <= mid && j <= r) {
		if (arr[i] <= arr[j]) {
			temp[k] = arr[i];
			if (l !== 0 && r !== arr.length - 1) a.push([1, i, j]);
			a.push([2, l + k, arr[i]]);
			if (l === 0 && r === arr.length - 1) {
				a.push([3, l + k]);
			}
			i++;
		} else {
			temp[k] = arr[j];
			if (l !== 0 && r !== arr.length - 1) a.push([1, i, j]);
			a.push([2, l + k, arr[j]]);
			if (l === 0 && r === arr.length - 1) {
				a.push([3, l + k]);
			}
			j++;
		}
		k++;
	}
	while (i <= mid) {
		temp[k] = arr[i];
		if (l !== 0 && r !== arr.length - 1) a.push([1, i, i]);
		a.push([2, l + k, arr[i++]]);
		if (l === 0 && r === arr.length - 1) {
			a.push([3, l + k]);
		}
		k++;
	}
	while (j <= r) {
		temp[k] = arr[j];
		if (l !== 0 && r !== arr.length - 1) a.push([1, j, j]);
		a.push([2, l + k, arr[j++]]);
		if (l === 0 && r === arr.length - 1) {
			a.push([3, l + k]);
		}
		k++;
	}
	k = 0;
	for (let x = l; x <= r; x++) {
		arr[x] = temp[k++];
	}
}

export default function mergesort(arr, n, pace, toggleIsOn, finish) {
	let a = [];
	Sort(arr, 0, n - 1, a);
	for (let i = 0; i <= a.length + 1; i++) {
		if (i === a.length + 1) {
			setTimeout(() => {
				toggleIsOn();
				finish(arr);
			}, pace * (i - 1));
		} else if (i === a.length && i > 0) {
			setTimeout(() => {
				if (i > 0 && a[i - 1][0] !== 3) {
					document.getElementById(a[i - 1][1]).style.backgroundColor = "#FFD700";
					if (a[i - 1][0] !== 2) {
						document.getElementById(a[i - 1][2]).style.backgroundColor = "#FFD700";
					}
				}
			}, pace * i);
		} else if (a[i][0] === 1) {
			setTimeout(() => {
				if (i > 0 && a[i - 1][0] !== 3) {
					document.getElementById(a[i - 1][1]).style.backgroundColor = "#FFD700";
					if (a[i - 1][0] !== 2) {
						document.getElementById(a[i - 1][2]).style.backgroundColor = "#FFD700";
					}
				}
				document.getElementById(a[i][1]).style.background = "red";
				document.getElementById(a[i][2]).style.background = "red";
			}, pace * i);
		} else if (a[i][0] === 2) {
			setTimeout(() => {
				if (i > 0 && a[i - 1][0] !== 3) {
					document.getElementById(a[i - 1][1]).style.backgroundColor = "#FFD700";
					if (a[i - 1][0] !== 2) {
						document.getElementById(a[i - 1][2]).style.backgroundColor = "#FFD700";
					}
				}
				document.getElementById(a[i][1]).style.background = "green";
				document.getElementById(a[i][1]).style.height = `${a[i][2]}px`;
			}, pace * i);
		} else {
			if (i > 0 && a[i - 1][0] !== 3) {
				document.getElementById(a[i - 1][1]).style.backgroundColor = "#FFD700";
				if (a[i - 1][0] !== 2) {
					document.getElementById(a[i - 1][2]).style.backgroundColor = "#FFD700";
				}
			}
			setTimeout(() => {
				document.getElementById(a[i][1]).style.background = "#00ff44";
			}, pace * i);
		}
	}
}
