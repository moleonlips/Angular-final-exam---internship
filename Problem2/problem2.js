function findPaths(matrix) {
     let output = [];
     let path = "";
   
     const n = matrix.length;
     const m = matrix[0].length;
     const goal = [n - 1, m - 1];
   
     find([0, 0], "");
     return output[0];
   
     function find(state = [0, 0], path) {
       if (isEqual(state, goal)) {
         output.push(path);
         return;
       }
       const rightCoor = right(state);
       const downCoor = down(state);
   
       if (canGoRight(state) && matrix[rightCoor[0]][rightCoor[1]] !== 1) {
         find(right(state), path + "R");
       }
       if (canGoDown(state) && matrix[downCoor[0]][downCoor[1]] !== 1) {
         find(down(state), path + "D");
       }
     }

     function isEqual(a, b) {
       return a[0] === b[0] && a[1] === b[1];
     }

     function canGoRight(state) {
       return state[1] < m - 1;
     }

     function canGoDown(state) {
       return state[0] < n - 1;
     }

     function right(state) {
       return [state[0], state[1] + 1];
     }

     function down(state) {
       return [state[0] + 1, state[1]];
     }
   }
   const matrix = [
     [0, 0, 0, 0, 0, 0, 0],
     [1, 1, 0, 1, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 1],
   ];
   console.log(findPaths(matrix))