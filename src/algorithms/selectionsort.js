export default function selectionsort(arr, n, pace, toggleIsOn, finish) {
	let a = [];
	for (let i = 0; i < n; i++) {
		let min = i;
		for (let j = i + 1; j < n; j++) {
			if (arr[min] > arr[j]) {
				min = j;
				a.push([1, min, min]);
			}
			a.push([2, j, j, arr[j], arr[j]]);
		}
		if (min !== i) {
			let tmp = arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
			a.push([1, min, i]);
			a.push([2, min, i, arr[min], arr[i]]);
		}
		a.push([3, i]);
	}
	for (let i = 0; i <= a.length; i++) {
		if (i === a.length) {
			setTimeout(() => {
				toggleIsOn();
				finish(arr);
			}, pace * (i - 1));
		} else if (a[i][0] === 1) {
			console.log(i);
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
