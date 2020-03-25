export default function insertionsort(arr, n, pace, toggleIsOn, finish) {
	let a = [];
	for (let i = 0; i < n; i++) {
		let temp = arr[i];
		let j = i;

		while (j > 0 && temp < arr[j - 1]) {
			a.push([1, j, j - 1]);
			a.push([2, j, j - 1, arr[j - 1], arr[j]]);
			arr[j] = arr[j - 1];
			j = j - 1;
		}
		arr[j] = temp;
		a.push([2, j, j, arr[j], arr[j]]);
		a.push([3, j]);
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
