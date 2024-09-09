// EASY - 1945. SUM OF DIGITS OF STRING AFTER CONVERT

// const getLucky = function(s, k) {
//     let num = [...s].map(el => el.charCodeAt() - 96).join("");
//     let total = 0;
//     for (let i = 0; i < k; i++) {
//         total = num.split("").reduce((total, el) => total + Number(el), 0);
//         num = total.toString();
//     }
//     return total;
// };

// Testing

// console.log(getLucky("iiii", 1));
// console.log(getLucky("leetcode", 2));
// console.log(getLucky("zbax", 2));

// NORMAL - 874. WALKING ROBOT SIMULATION
// function robotSim(commands, obstacles) {

//     function checkObstacles(prev, stepDirection, isY, idxVal, obstacles) {
//         const toggle = (val) => val ? 1 : 0;
//         const distance = prev + stepDirection;
//         const obstacleList = obstacles.filter(el => el[toggle(isY)] === idxVal).map(el => el[toggle(!isY)]);
//         const i = stepDirection < 0 ? -1 : 1;
//         while (prev !== distance) {
//             prev += i;
//             if (obstacleList.includes(prev)) {
//                 stepDirection < 0 ? prev++ : prev--;
//                 break;
//             };
//         }
//         return prev;
//     }

//     let direction = [1, 1, -1, -1];
//     let x = y = 0;
//     let i = 0;
//     let maxim = 0;

//     for (const steps of commands) {
//         if (steps < 0) {
//             steps === -1 ? i++ : i--;
//             i %= 4;
//             continue;
//         }

//         let stepDirection = steps * direction.at(i);

//         if (i % 2 === 0) { 
//             y = checkObstacles(y, stepDirection, false, x, obstacles);
//         } else {
//             x = checkObstacles(x, stepDirection, true, y, obstacles);
//         }
//         maxim = Math.max(maxim, x ** 2 + y ** 2);
//     }
//     return maxim;
// }

// Testing

// robotSim([4, -1, 3], []);
// robotSim([4, -1, 4, -2, 4], [[2, 4]]);
// robotSim([6, -1, -1, 6], [[0, 0]]);
// robotSim([-2, 8, 3, 7, -1], [[-4, -1], [1, -1], [1, 4], [5, 0], [4, 5], [-2, -1], [2, -5], [5, 1], [-3, -1], [5, -3]]);
// robotSim([7, -2, -2, 7, 5], [[-3, 2], [-2, 1], [0, 1], [-2, 4], [-1, 0], [-2, -3], [0, -3], [4, 4], [-3, 3], [2, 2]]);

// 1266. MINIMUM TIME VISITING ALL POINTS

// const minTimeToVisitAllPoints = function(points) {
//     let total = 0;
//     for (let i = 1; i < points.length; i++) {
//         let x = Math.abs(points[i][0] - points[i - 1][0]);
//         let y = Math.abs(points[i][1] - points[i - 1][1]);
//         total += Math.max(x, y);
//     }
//     console.log(total);
//     return total;
// };

// Testing

// minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]]);
// minTimeToVisitAllPoints([[3, 2], [-2, 2]]);
// minTimeToVisitAllPoints([[559, 511], [932, 618], [-623, -443], [431, 91], [838, -127], [773, -917], [-500, -910], [830, -417], [-870, 73], [-864, -600], [450, 535], [-479, -370], [856, 573], [-549, 369], [529, -462], [-839, -856], [-515, -447], [652, 197], [-83, 345], [-69, 423], [310, -737], [78, -201], [443, 958], [-311, 988], [-477, 30], [-376, -153], [-272, 451], [322, -125], [-114, -214], [495, 33], [371, -533], [-393, -224], [-405, -633], [-693, 297], [504, 210], [-427, -231], [315, 27], [991, 322], [811, -746], [252, 373], [-737, -867], [-137, 130], [507, 380], [100, -638], [-296, 700], [341, 671], [-944, 982], [937, -440], [40, -929], [-334, 60], [-722, -92], [-35, -852], [25, -495], [185, 671], [149, -452]]);

// 1385. Find the Distance Value Between Two Arrays

// const findTheDistanceValue = function(arr1, arr2, d) {
//     const results = [0, 0];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(d >= Math.abs(arr1[i] - arr2[j])) break;
//             results[0] += 1;
//         }
//         if (results[0] === arr2.length) results[1]++;
//         results[0] = 0;
//     }
//     console.log(results[1]);
//     return results[1];
// };

// Testing

// findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2);
// findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3);
// findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6);

// 1374. Generate a String With Characters That Have Odd Counts

// const generateTheString = function(n) {
//     const firstLen = n % 2 !== 0 ? n : n - 1;
//     const secondLen = n - firstLen;
//     const result = [...new Array(firstLen).fill("a"), ...new Array(secondLen).fill("b")];
//     console.log(result.join(""));
//     return result.join("");
// };

// generateTheString(4);
// generateTheString(2);
// generateTheString(7);
// generateTheString(5);

// 1437. Check If All 1's Are at Least Length K Places Away

// const kLengthApart = function(nums, k) {
//     let i = nums.indexOf(1);
//     while( i !== nums.lastIndexOf(1)) {
//         let j = i + 1;
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] === 1) {
//                 if (j - i <= k) {
//                     return false
//                 } else {
//                     i = j;
//                     break;
//                 }
//             }
//         }
//     }
//     return true;
// };

// kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2);
// kLengthApart([1, 0, 0, 1, 0, 1], 2);
// kLengthApart([0, 0, 1, 0], 4);

// 1523. Count Odd Numbers in an Interval Range

// const countOdds = function(low, high) {
//     let checkLow = low % 2 !== 0 ? low : low + 1;
//     let checkHigh = high % 2 !== 0 ? high : high - 1;
//     return ((checkHigh - checkLow) / 2) + 1
// };

// countOdds(3, 7);
// countOdds(8, 10);
// countOdds(0, 10);
