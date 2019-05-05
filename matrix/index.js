 // --- Directions
 // Write a function that accepts an integer N
 // and returns a NxN spiral matrix.
 // --- Examples
 //   matrix(2)
 //     [[1, 2],
 //     [4, 3]]
 //   matrix(3)
 //     [[1, 2, 3],
 //     [8, 9, 4],
 //     [7, 6, 5]]
 //  matrix(4)
 //     [[1,   2,  3, 4],
 //     [12, 13, 14, 5],
 //     [11, 16, 15, 6],
 //     [10,  9,  8, 7]]

 // function matrix(n) {
 //     let result=[];
 //     for(let i=0;i<n;i++){
 //         result.push([]);
 //     }
 //     let start_row=0,
 //         end_row=n-1,
 //         start_column=0,
 //         end_column=n-1,
 //         counter=1;
 //     while(start_column<=end_column && start_row <= end_row){
 //         // Top Row
 //         for(i=start_column;i<=end_column;i++){
 //             result[start_row][i]=counter;
 //             counter++
 //         }
 //         start_row++;

 //         // Right Column
 //         for(i=start_row;i<=end_row;i++){
 //             result[i][end_column]=counter
 //             counter++
 //         }
 //         end_column--
 //         // Bottom Row
 //         for(let i=end_column;i>=start_column;i--){
 //             result[end_row][i]=counter++
 //         }
 //         end_row--;

 //         // start column
 //         for(let i=end_row;i>=start_row;i--){
 //             result[i][start_column]=counter
 //             counter++
 //         }

 //         start_column++
 //     }
 //     return result;
 // }

 function matrix(n) {
     let result = [];
     for (let i = 0; i < n; i++) {
         result.push([]);
     }

     let counter = 1,
         sr = 0,
         er = n - 1,
         sc = 0,
         ec = n - 1;

    while(sr<=er && sc <= ec){

        // --------->
        for(i=sc;i<=ec;i++){
            result[sr][i]=counter++
        }
        sr++;

        // |
        // |
        // V
        for(i=sr;i<=er;i++){
            result[i][ec]=counter++
        }
        ec--;

        // <-------
        for(i=ec;i>=sc;i--){
            result[er][i]=counter++
        }
        er--;

        // ^
        // |
        // |
        // |
        for(i=er;i>=sr;i--){
            result[i][sc]=counter++
        }
        sc++;
    }
    return result;
 }

 matrix(3)
 module.exports = matrix;
