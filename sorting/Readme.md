The time complexity of comparison-based sorting algorithms are mostly O(n^2).
Main comparison-based sorting algorithms are:
  Bubble Sort
  Selection Sort
  Insertion Sort
**Bubble Sort**
Given an array of N elements, Bubble Sort will:
  1.Compare a pair of adjacent items (a, b),
  2.Swap that pair if the items are out of order (in this case, when a > b),
  3.Repeat Step 1 and 2 until we reach the end of array (the last pair is the (N-2)-th and (N-1)-th items as we use 0-based indexing),
  4.By now, the largest item will be at the last position.
  5.We then reduce N by 1 and repeat Step 1 until we have N = 1.

**Selection Sort**
Given an array of N items and L = 0, Selection Sort will:
  1.Find the position X of the smallest item in the range of [L...N−1],
  2.Swap X-th item with the L-th item,
  3.Increase the lower-bound L by 1 and repeat Step 1 until L = N-2.
