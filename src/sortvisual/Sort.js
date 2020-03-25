import React from "react";
import "./Sort.css";
import heapsort from "../algorithms/heapsort";
import bubblesort from "../algorithms/bubblesort";
import selectionsort from "../algorithms/selectionsort";
import insertionsort from "../algorithms/insertionsort";
import mergesort from "../algorithms/mergesort";
import quicksort from "../algorithms/quicksort";
import countingsort from "../algorithms/countingsort";
import radixsort from "../algorithms/radixsort";

class SortVisualization extends React.Component {
	constructor() {
		super();
		this.state = {
			size: 50,
			array: [],
			ison: false
		};
		this.bubbleSort = this.bubbleSort.bind(this);
		this.selectionSort = this.selectionSort.bind(this);
		this.insertionSort = this.insertionSort.bind(this);
		this.mergeSort = this.mergeSort.bind(this);
		this.resetArray = this.resetArray.bind(this);
		this.heapSort = this.heapSort.bind(this);
		this.quickSort = this.quickSort.bind(this);
		this.countingSort = this.countingSort.bind(this);
		this.radixSort = this.radixSort.bind(this);
		this.handleRange = this.handleRange.bind(this);
		this.toggleIsOn = this.toggleIsOn.bind(this);
		this.handleFinish = this.handleFinish.bind(this);
	}

	componentDidMount() {
		this.resetArray();
	}

	handleFinish(array) {
		this.setState({
			array: array
		});
	}

	resetArray() {
		let array = [];
		for (let i = 0; i < this.state.size; i++) {
			array.push(getRandomArbitrary(5, 360));
		}
		let NewValue = 55 - Math.floor(((array.length - 10) * (50 - 5)) / (150 - 10) + 5);
		this.setState(
			{
				array: array,
				speed: NewValue,
				ison: false
			},
			() => {
				document.getElementById("swap").innerHTML = 0;
				let x = Math.floor((1024 - this.state.size * 2) / this.state.size);
				for (let i = 0; i < array.length; i++) {
					document.getElementById(i).style.background = "#FFD700";
					document.getElementById(i).style.width = `${x}px`;
				}
			}
		);
	}

	toggleIsOn() {
		this.setState({
			ison: !this.state.ison
		});
	}

	handleRange(evt) {
		let array = [];
		for (let i = 0; i < evt.target.value; i++) {
			array.push(getRandomArbitrary(5, 360));
		}

		let NewValue = 57 - Math.floor(((array.length - 10) * (55 - 4)) / (150 - 10) + 5);
		this.setState(
			{
				size: array.length,
				array: array,
				speed: NewValue
			},
			() => {
				document.getElementById("swap").innerHTML = 0;
				let x = Math.floor((1024 - this.state.size * 2) / this.state.size);
				for (let i = 0; i < array.length; i++) {
					document.getElementById(i).style.background = "#FFD700";
					document.getElementById(i).style.width = `${x}px`;
				}
			}
		);
	}

	bubbleSort() {
		let arr = this.state.array;
		let n = this.state.array.length;
		this.setState(
			{
				ison: true
			},
			() => {
				bubblesort(arr, n, this.state.speed, this.toggleIsOn, this.handleFinish);
			}
		);
	}

	selectionSort() {
		let arr = this.state.array;
		let n = arr.length;
		this.setState(
			{
				ison: true
			},
			() => {
				selectionsort(arr, n, this.state.speed, this.toggleIsOn, this.handleFinish);
			}
		);
	}

	insertionSort() {
		let arr = this.state.array;
		let n = arr.length;
		this.setState(
			{
				ison: true
			},
			() => {
				insertionsort(arr, n, this.state.speed, this.toggleIsOn, this.handleFinish);
			}
		);
	}

	heapSort() {
		let arr = this.state.array;
		let n = arr.length;
		this.setState(
			{
				ison: true
			},
			() => {
				heapsort(arr, n, this.state.speed, this.toggleIsOn, this.handleFinish);
			}
		);
	}
	mergeSort() {
		let arr = this.state.array;
		let n = arr.length;
		this.setState(
			{
				ison: true
			},
			() => {
				mergesort(arr, n, this.state.speed, this.toggleIsOn, this.handleFinish);
			}
		);
	}
	quickSort() {
		let arr = this.state.array;
		let n = arr.length;
		this.setState(
			{
				ison: true
			},
			() => {
				quicksort(arr, n, this.state.speed, this.toggleIsOn, this.handleFinish);
			}
		);
	}

	countingSort() {
		let arr = this.state.array;
		let n = arr.length;
		this.setState(
			{
				ison: true
			},
			() => {
				countingsort(arr, n, this.state.speed, this.toggleIsOn, this.handleFinish);
			}
		);
	}

	radixSort() {
		let arr = this.state.array;
		let n = arr.length;
		this.setState(
			{
				ison: true
			},
			() => {
				radixsort(arr, n, this.state.speed, this.toggleIsOn, this.handleFinish);
			}
		);
	}

	render() {
		const { array } = this.state;
		return (
			<>
				<div className='header'>
					<label className='speed'>
						<span>Speed</span>
						<input
							className='slider'
							disabled={this.state.ison}
							onChange={this.handleRange}
							value={this.state.size}
							type='range'
							min='10'
							max='150'
						/>
					</label>

					<button disabled={this.state.ison} className='btn' onClick={this.bubbleSort}>
						Bubble Sort
					</button>
					<button disabled={this.state.ison} className='btn' onClick={this.selectionSort}>
						Selection Sort
					</button>
					<button disabled={this.state.ison} className='btn' onClick={this.insertionSort}>
						Insertion Sort
					</button>
					<button disabled={this.state.ison} className='btn' onClick={this.mergeSort}>
						Merge Sort
					</button>
					<button disabled={this.state.ison} className='btn' onClick={this.heapSort}>
						Heap Sort
					</button>
					<button disabled={this.state.ison} className='btn' onClick={this.quickSort}>
						Quick Sort
					</button>
					<button disabled={this.state.ison} className='btn' onClick={this.countingSort}>
						Counting Sort
					</button>
					<button disabled={this.state.ison} className='btn' onClick={this.radixSort}>
						Radix Sort
					</button>
					<button disabled={this.state.ison} className='btn' onClick={this.resetArray}>
						Reset
					</button>
				</div>

				<div className='arrayContainer'>
					{array.map((x, i) => (
						<div key={i} id={i} style={{ height: `${x}px` }} className='arrayBar'></div>
					))}
				</div>
				<div className='swapBox'>
					<p className='swapContainer'>
						Swaps :
						<span id='swap' className='swapValue'>
							0
						</span>
					</p>
				</div>
			</>
		);
	}
}

function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

export default SortVisualization;
