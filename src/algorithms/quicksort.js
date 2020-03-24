function partition(arr, low, high, a) {
	let pivot = arr[high];
	let i = low - 1;

	for (let j = low; j <= high - 1; j++) {
		if (arr[j] < pivot) {
			i++;
			let x = arr[i];
			arr[i] = arr[j];
			arr[j] = x;
			a.push([1, i, j]);
			a.push([2, i, j, arr[i], arr[j]]);
		}
	}

	let x = arr[i + 1];
	arr[i + 1] = arr[high];
	arr[high] = x;
	a.push([1, i + 1, high]);
	a.push([2, i + 1, high, arr[i + 1], arr[high]]);
	return i + 1;
}
function sort(arr, low, high, a) {
	if (low < high) {
		let pi = partition(arr, low, high, a);
		a.push([3, pi]);
		sort(arr, low, pi - 1, a);
		sort(arr, pi + 1, high, a);
	} else if (low === high) {
		a.push([3, low]);
	}
}

export default function quickSort(arr, n, pace, toggleIsOn, finish) {
	let a = [];
	sort(arr, 0, n - 1, a);
	for (let i = 0; i <= a.length; i++) {
		if (i === a.length) {
			setTimeout(() => {
				toggleIsOn();
				finish(arr);
			}, pace * i);
		} else if (a[i][0] === 1) {
			setTimeout(() => {
				if (i > 0 && a[i - 1][0] !== 3) {
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
