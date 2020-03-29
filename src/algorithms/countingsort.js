export default function countingsort(arr, n, pace, toggleIsOn, finish) {
    let output = new Array(n);
    let a = [];
    let maxx = Math.max(...arr);
    let count = new Array(maxx + 1).fill(0);

    for (let i = 0; arr[i]; ++i) {
        a.push([3, 0, 0]);
        ++count[arr[i]];
    }

    for (let i = 1; i <= maxx; ++i) {
        count[i] += count[i - 1];
    }

    for (let i = 0; arr[i]; ++i) {
        let x = count[arr[i]] - 1;
        output[x] = arr[i];
        a.push([1, x, x]);
        a.push([2, x, x, output[x], output[x]]);
        a.push([3, x, x]);
        --count[arr[i]];
    }

    for (let i = 0; i < n; i++) arr[i] = output[i];

    for (let i = 0; i <= a.length; i++) {
        if (i === a.length) {
            setTimeout(() => {
                toggleIsOn();
                finish(arr);
            }, pace * i);
        } else if (a[i][0] === 1) {
            setTimeout(() => {
                document.getElementById(a[i][1]).style.backgroundColor = "red";
                document.getElementById(a[i][2]).style.backgroundColor = "red";
            }, pace * i);
        } else if (a[i][0] === 2) {
            setTimeout(() => {
                document.getElementById(a[i][1]).style.height = `${a[i][3]}px`;
                document.getElementById(a[i][2]).style.height = `${a[i][4]}px`;
                document.getElementById(a[i][1]).style.backgroundColor = "#00ff44";
                document.getElementById(a[i][2]).style.backgroundColor = "#00ff44";
            }, pace * i);
        } else if (a[i][0] === 3) {
            setTimeout(() => {
                let x = document.getElementById("swap2").innerHTML;
                document.getElementById("swap2").innerHTML = Number(x) + 1;
                document.getElementById(a[i][1]).style.backgroundColor = "#00ff44";
                document.getElementById(a[i][2]).style.backgroundColor = "#00ff44";
            }, pace * i);
        }
    }
}
