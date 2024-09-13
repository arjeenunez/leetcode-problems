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

// Testing

// countOdds(3, 7);
// countOdds(8, 10);
// countOdds(0, 10);

// 1496. Path Crossing

// const isPathCrossing = function(path) {
//     let x = y = 0;
//     const set = new Set();
//     set.add(`${x}-${y}`);
//     const dir = {N: 1, S: -1, E: +1, W: -1};
//     for (let letter of path) {
//         if (letter === "N" || letter === "S") {
//             y += dir[letter];
//         } else {
//             x += dir[letter];
//         }
//         set.add(`${x}-${y}`);
//     }
//     console.log(set)
//     return set.size !== path.length + 1;
// };

// Testing

// isPathCrossing("NESWW");

// 1480. Running Sum of 1d Array

// const runningSum = function(nums) {
//     let total = 0;
//     return nums.map(el => total += el);
// };

// Testing

// runningSum([1, 2, 3, 4]);
// runningSum([1, 1, 1, 1, 1]);
// runningSum([3, 1, 2, 10, 1]);

// 1539. Kth Missing Positive Number

// const findKthPositive = function(arr, k) {
//     let i = 0;
//     while (k !== 0) {
//         i++;
//         if (!arr.includes(i)) k--;
//     }
//     return i;
// };

// Testing

// findKthPositive([2, 3, 4, 7, 11], 5);
// findKthPositive([2, 3, 4, 7, 11], 5);

// 1544. Make The String Great

// const makeGood = function(s) {
//     for (let i = 1; i < s.length; i++) {
//         if (s[i] !== s[i - 1] && s[i].toLowerCase() === s[i - 1].toLowerCase()) {
//             s = s.slice(0, i - 1) + s.slice(i + 1);
//             i = 0;
//         }
//     }
//     return s;
// };

// Testing

// makeGood("leEeetcode");
// makeGood("abBAcC");
// makeGood("s");

// 1550. Three Consecutive Odds

// const threeConsecutiveOdds = function(arr) {
//     return arr.filter((el, idx, arr) => arr[idx - 1] % 2 === 1 && el % 2 === 1 && arr[idx + 1] % 2 === 1);
// };

// Testing

// threeConsecutiveOdds([2, 6, 4, 1]);
// threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]);

// 1576. Replace All ?'s to Avoid Consecutive Repeating Characters

// const modifyString = function(s) {
//     const rando = () => Math.floor(Math.random() * 26) + 97;
//     const arr = [...s];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "?") {
//             arr[i] = String.fromCharCode(rando());
//             while (arr[i - 1] === arr[i] || arr[i] === arr[i + 1]) {
//                 arr[i] = String.fromCharCode(rando());
//             }
//         }
//     }
//     return arr.join("")
// };

// Testing

// modifyString("?zs")
// modifyString("ubv?w");
// modifyString("u?v?wd??");

// 1588. Sum of All Odd Length Subarrays

// const sumOddLengthSubarrays = function(arr) {
//     let sum = 0;
//     let i = 0;
//     let len = 1;
//     while (len <= arr.length) {
//         sum += arr.slice(i, len + i).reduce((total, el) => total + el);
//         i++;
//         if (!arr[i + len - 1]) {
//             len += 2;
//             i = 0;
//         }
//     };
//     return sum;
// };

// Testing

// sumOddLengthSubarrays([1, 4, 2, 5, 3]);
// sumOddLengthSubarrays([1, 2]);
// sumOddLengthSubarrays([10, 11, 12]);

// 1566. Detect Pattern of Length M Repeated K or More Times

// const containsPattern = function(arr, m, k) {
//     for (let i = 0; arr[i + m - 1]; i++) {
//         let check = 1;
//         let temp = "";
//         for (let j = i; arr[j + m - 1]; j += m) {
//             let comp = arr.slice(j, m + j).join("-");
//             if (temp === comp) {
//                 check++;
//                 if (check >= k) return true
//             } else {
//                 check = 1;
//             }
//             temp = comp; 
//         }
//     }
//     return false;
// };

// containsPattern([1, 2, 4, 4, 4, 4], 1, 3);
// containsPattern([1, 2, 1, 2, 1, 1, 1, 3], 2, 2);
// containsPattern([1, 2, 1, 2, 1, 3], 2, 3);
// containsPattern([1, 2, 3, 1, 2], 2, 2);
// containsPattern([2, 2, 2, 2], 2, 3);
// containsPattern([2, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 2], 1, 4);

// 2220. Minimum Bit Flips to Convert Number

// const minBitFlips = function(start, goal) {
//     let totalFlips = 0;
//     const remainder = val => val ? val % 2 : 0;
//     while (start > 0 || goal > 0) {
//         if (remainder(start) !== remainder(goal)) totalFlips++;
//         start = Math.floor(start / 2);
//         goal = Math.floor(goal / 2);
//     }
//     console.log(totalFlips);
//     return totalFlips;
// };

// Testing

// minBitFlips(3, 4);
// minBitFlips(10, 7);

// 1684. Count the Number of Consistent Strings

// const countConsistentStrings = function(allowed, words) {
//     const filteredWords = words.filter(word => {
//         for (let i = 0; i < word.length; i++) {
//             if (!allowed.includes(word[i])) return "";
//         }
//         return word;
//     })
//     return filteredWords.length
// };

// countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]);
// countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]);
// countConsistentStrings("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]);

// 1684. Count the Number of Consistent Strings

// var countConsistentStrings = function(allowed, words) {
//     const filteredWords = words.filter(word => {
//         for (let i = 0; i < word.length; i++) {
//             if (!allowed.includes(word[i])) return "";
//         }
//         return word;
//     })
//     return filteredWords.length
// };

// countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]);