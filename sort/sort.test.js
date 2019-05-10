const MergeSort = require('./mergesort');
const mergeSort = MergeSort.mergeSort;
const merge = MergeSort.merge;

const selectionSort = require('./selectionsort');
const bubbleSort = require('./bubblesort');

const quickSort = require('./quicksort');

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

describe('Merge sort', () => {
  test('merge function can join together two sorted arrays', () => {
    const left = [1, 10];
    const right = [2, 8, 12];

    expect(merge(left, right)).toEqual([1, 2, 8, 10, 12]);
  });

  test('sorts an array', () => {
    expect(mergeSort(getArray())).toEqual(getSortedArray());
  });
});

describe('Bubble sort', () => {
  test('sorts an array', () => {
    expect(bubbleSort(getArray())).toEqual(getSortedArray());
  });
});

describe('Selection sort', () => {
  test('sorts an array', () => {
    expect(selectionSort(getArray())).toEqual(getSortedArray());
  });
});

describe('Quicksort', () => {
  test('quicksort an array', () => {
    expect(quickSort(getArray())).toEqual(getSortedArray());
  })
})