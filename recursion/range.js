// Exercise completed 031617
// 3. Write a JavaScript program to get the integers in range (x, y). Go to the editor
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]


var output = [];
function range(a, b) {
   if (a >= b - 1) {
     return output;
   } 
   else {
     output.push(a + 1);
     return range(a + 1, b);
   }
 }
console.log(range(2, 9));