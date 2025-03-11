"use strict";

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

// 1310. XOR Queries of a Subarray

// const xorQueries = function(arr, queries) {
//     const newQueries = queries.map(query => arr.slice(query[0], query[1] + 1).reduce((total, el) => total ^ el));
//     return newQueries;
// };

// xorQueries([1, 3, 4, 8], [[0, 1], [1, 2], [0, 3], [3, 3]]);
// xorQueries([4, 8, 2, 10], [[2, 3], [1, 3], [0, 0], [0, 3]]);

// 2419. Longest Subarray With Maximum Bitwise AND

// const longestSubarray = function(nums) {
//     const maxim = Math.max(...nums);
//     let counter = 0;
//     let len = 0;
//     for (let i = 0; i < nums.length; i++) {
//         (nums[i] & maxim) === maxim ? counter++ : counter = 0;
//         len = Math.max(len, counter);
//     }
//     return len;
// }

// longestSubarray([1, 2, 3, 3, 2, 2]);
// longestSubarray([1, 2, 3, 4]);
// longestSubarray([100, 5, 5]);

// 1370. Increasing Decreasing String

// const sortString = function(s) {

//     const letters = [...new Set(s)].sort();
//     s = [...s];
//     let newStr = "";
//     let i = 0;

//     while (s.length) {
//         console.log(letters[i]);
//         if (s.indexOf(letters[i]) !== -1) {
//             newStr += s.splice(s.indexOf(letters[i]), 1);
//         }
//         i++;
//         if (i >= letters.length) {
//             letters.reverse();
//             i = 0;
//         }
//     }
//     return newStr;
// };

// sortString("aaaabbbbcccc");
// sortString("rat");

// 884. Uncommon Words from Two Sentences

// const uncommonFromSentences = function(s1, s2) {
//     return [...s1.split(" "), ...s2.split(" ")].filter((el, i, arr) => arr.filter(e => e === el).length === 1);
// };

// uncommonFromSentences("this apple is sweet", "this apple is sour");
// uncommonFromSentences("apple apple", "banana");

// 2727. Is Object Empty

// const isEmpty = function(obj) {
//     return !Object.values(obj).length ? true : false;
// };

// isEmpty({ "x": 5, "y": 42 });
// isEmpty({});
// isEmpty([null, false, 0]);

// 1002. Find Common Characters

// const commonChars = function(words) {
//     let word = [];
//     let check = 0;
//     for (const letter of words[0]) {
//         check = 0;
//         for (let j = 1; j < words.length; j++) {
//             if (words[j].includes(letter)) {
//                 words[j] = words[j].replace(letter, "");
//             } else {
//                 check++;
//             }
//         }
//         if (check === 0) word.push(letter);
//     }
//     return word;
// };

// commonChars(["bella", "label", "roller"]);
// commonChars(["cool", "lock", "cook"]);

// 806. Number of Lines To Write String

// const numberOfLines = function(widths, s) {
//     let rows = 0;
//     let total = 0;
//     for (let i = 0; i < s.length; i++) {
//         total += widths[s[i].charCodeAt() - 97];
//         if (total > 100) i--;
//         if (total > 100 || total % 100 === 0) {
//             rows++;
//             total = 0;
//         }
//     }
//     return [rows + Math.ceil(total / 100), !total ? 100 : total];
// };

// numberOfLines([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "abcdefghijklmnopqrstuvwxyz");
// numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "bbbcccdddaaa");

// 941. Valid Mountain Array

// const validMountainArray = function(arr) {
//     const mountainTop = Math.max(...arr);
//     const mountainIdx = arr.indexOf(mountainTop);
//     const upArr = arr.slice(0, mountainIdx + 1);
//     const downArr = arr.slice(mountainIdx);
//     if (upArr.length <=1 || downArr.length <= 1) return false;
//     let i = 0;
//     while (upArr[i] !== undefined || downArr[i] !== undefined) {
//         if (upArr[i] >= upArr[i + 1] && upArr[i + 1]) return false;
//         if (downArr[i] <= downArr[i + 1] && downArr[i + 1]) return false;
//         i++;
//     }
//     return true;
// };

// validMountainArray([2, 1]);
// validMountainArray([3, 5, 5]);
// validMountainArray([0, 3, 2, 1]);

// 3280. Convert Date to Binary

// const convertDateToBinary = function(date) {
//     return date
//             .split("-")
//             .map(el => (+el).toString(2))
//             .join("-");
    
// };

// convertDateToBinary("2080-02-29");
// convertDateToBinary("1900-01-01");

// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence

// const isPrefixOfWord = function(sentence, searchWord) {
//     const words = sentence.split(" ");
//     for (let [idx, word] of words.entries()) {
//         if (!word.indexOf(searchWord)) return idx + 1; 
//     }
//     return -1;
// };

// isPrefixOfWord("i love eating burger", "burg");
// isPrefixOfWord("this problem is an easy problem", "pro");
// isPrefixOfWord("i am tired", "you");

// 1592. Rearrange Spaces Between Words

// const reorderSpaces = function(text) {
//     const wordArr = text.split(" ").filter(el => el);
//     const totalWords = wordArr.length;
//     const totalSpace = [...text].reduce((total, el) => el === " " ? ++total : total, 0);
//     const evenSpace = totalWords === 1 ? 0 : Math.floor(totalSpace / (totalWords - 1));
//     const remSpace = totalSpace - (evenSpace * (totalWords - 1));
//     let result = "";
//     for (let i = 0; i < wordArr.length - 1; i++) {
//         result += wordArr[i].padEnd(wordArr[i].length + evenSpace, " ");
//     }
//     result += wordArr.at(-1);
//     return result.padEnd(result.length + remSpace, " ");
// };

// reorderSpaces("  this   is  a sentence ");
// reorderSpaces(" practice   makes   perfect");
// reorderSpaces("this   is  a sentence ");

// 9. Palindrome Number

// const isPalindrome = function(x) {
//     let xStr = x.toString();
//     let rStr = xStr.split("").reverse().join("");
//     return xStr === rStr;
// };

// isPalindrome(121);
// isPalindrome(-121);
// isPalindrome(10);

// 859. Buddy Strings

// const buddyStrings = function(s, goal) {
//     if (s.length !== goal.length) return false;
//     const strArr = [];
//     [...s].forEach((el, i) => el !== goal[i] ? strArr.push(i) : null);
//     const [i, j] = strArr;
//     if (strArr.length > 2) return false;
//     if (!strArr.length) return s.length !== new Set(s).size;
//     if (s[i] === goal[j] && goal[i] === s[j]) return true;
//     return false;
// };

// buddyStrings("ab", "ba");
// buddyStrings("ab", "ab");
// buddyStrings("aa", "aa");

// 1232. Check If It Is a Straight Line

// const checkStraightLine = function(coordinates) {
//     let temp = null;
//     for (let i = 1; i < coordinates.length; i++) {
//         let [x2, y2] = coordinates[i];
//         let [x1, y1] = coordinates[i - 1];
//         let current = x2 - x1 === 0 ? null : (y2 - y1) / (x2 - x1);
//         if (i > 1 && current !== temp) return false;
//         temp = current;
//     }
//     return true;
// };

// checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]);
// checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]);
// checkStraightLine([[0, 0], [0, 1], [0, -1]]);

// 1317. Convert Integer to the Sum of Two No-Zero Integers

// const getNoZeroIntegers = function(n) {
//     for (let i = n; i >= 0; i--) {
//         if (i.toString().includes("0")) continue;
//         if ((n - i).toString().includes("0")) continue;
//         return [i, n - i];
//     }
// };

// getNoZeroIntegers(2);
// getNoZeroIntegers(11);
// getNoZeroIntegers(1010);

// 1497. Check If Array Pairs Are Divisible by k

// const canArrange = function(arr, k) {
//     const arrMap = new Map();
//     const arrSet = new Set();
//     arr.forEach(el => {
//         let freq = ((el % k) + k) % k;
//         arrMap.get(freq) ? arrMap.set(freq, arrMap.get(freq) + 1) : arrMap.set(freq, 1);
//     });
//     for (let [key, value] of arrMap.entries()) {
//         if (arrSet.has(key)) continue;
//         if ((key === 0 && value % 2 === 0) || key === k ) continue;
//         if (value !== arrMap.get(k - key)) return false;
//         arrSet.add(key);
//         arrSet.add(k - key);
//     }
//     return true;
// };

// canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5);
// canArrange([1, 2, 3, 4, 5, 6], 7);
// canArrange([1, 2, 3, 4, 5, 6], 10);

// 1331. Rank Transform of an Array

// const arrayRankTransform = function(arr) {
//     const rankArr = [...new Set(arr)].sort((a, b) => a - b);
//     const obj = rankArr.reduce((newObj, el, idx) => {
//         newObj[el] = idx + 1;
//         return newObj;
//     }, {});
//     return arr.map(el => obj[el]);
// };

// arrayRankTransform([40, 10, 20, 30]);
// arrayRankTransform([100, 100, 100]);
// arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]);

// 1071. Greatest Common Divisor of Strings

// const gcdOfStrings = function(str1, str2) {
//     const [minim, maxim] = [str1, str2].sort((a, b) => a.length - b.length);
//     if (!str1.startsWith(str2[0])) return "";
    
//     let result = "";
//     const getLength = (str, strRep) => str.replaceAll(strRep, "").length;

//     for (let i = 1; i <= minim.length; i++) {
//         let temp = minim.slice(0, i);
//         console.log(temp);
//         if (!getLength(maxim, temp) && !getLength(minim, temp)) {
//             result = temp.length > result.length ? temp : result;
//         };
//     }
//     return result;
// };

// gcdOfStrings("ABCABC", "ABC");
// gcdOfStrings("ABABAB", "ABAB");
// gcdOfStrings("ABABABAB", "ABAB");

// 1450. Number of Students Doing Homework at a Given Time

// const busyStudent = function(startTime, endTime, queryTime) {
//     return startTime.reduce((total, el, idx) => {
//         if ([el, endTime[idx], queryTime].sort((a, b) => a - b)[1] === queryTime) {
//             return total += 1;
//         } else {
//             return total
//         }
//     }, 0);
// };

// busyStudent([1, 2, 3], [3, 2, 7], 4);
// busyStudent([4], [4], 4);

// 2696. Minimum String Length After Removing Substrings

// const minLength = function(s) {
//     while(s.includes("AB") || s.includes("CD")) {
//         s = s.replaceAll("AB", "");
//         s = s.replaceAll("CD", "");
//     }
//     return s.length;
// };

// minLength("ABFCACDB");
// minLength("ACBBD")

// 125. Valid Palindrome

// const isPalindrome = function(s) {
//     s = s.replaceAll(/[^a-zA-Z0-9]/gi, "").toLowerCase();
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== s[s.length - 1 - i]) return false;
//         if (i === (s.length - 1 - i)) return true;
//     }
//     return true;
// };

// isPalindrome("A man, a plan, a canal: Panama");
// isPalindrome("race a car");
// isPalindrome(" ");

// 921. Minimum Add to Make Parentheses Valid

// const minAddToMakeValid = function(s) {
//     while(s.includes("()")) {
//         s = s.replaceAll("()", "");
//     }
//     return s.length;
// };

// minAddToMakeValid("())");
// minAddToMakeValid("(((");

// 1436. Destination City

// const destCity = function(paths) {
//     for (let i = 0; i < paths.length; i++) {
//         let check = 0;
//         for (let j = 0; j < paths.length; j++) {
//             if (paths[i][1] === paths[j][0]) {
//                 check++;
//                 break;
//             }
//         }
//         if (!check) return paths[i][1];
//     }
// };

// destCity([["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]);
// destCity([["B", "C"], ["D", "B"], ["C", "A"]]);
// destCity([["A", "Z"]]);

// 830. Positions of Large Groups

// const largeGroupPositions = function(s) {
//     let groups = [];
//     let startIdx = 0;
//     let counter = 0;
//     for (let i = 1; i <= s.length; i++) {
//         if (s[i] === s[i - 1]) {
//             counter++;
//         } else {
//             if (counter >= 2) groups.push([startIdx, i - 1]);
//             startIdx = i;
//             counter = 0;
//         }
//     }
//     return groups;
// };

// largeGroupPositions("abbxxxxzzy");
// largeGroupPositions("abc");
// largeGroupPositions("abcdddeeeeaabbbcd");
// largeGroupPositions("aaa");

// 1417. Reformat The String

// const reformat = function(s) {

//     const arr = [...s]
//         .reduce((total, el) => isNaN(el) ? [[...total[0], el], total[1]] : [total[0], [...total[1], el]], [[], []])
//         .sort((a, b) => a.length - b.length);
    
//     if (arr[1].length - arr[0].length > 1) return "";
//     let i = 0;
//     let newStr = "";

//     while(arr[1][i] !== undefined) {
//         newStr += arr[1][i];
//         if (arr[0][i] === undefined) break;
//         newStr += arr[0][i];
//         i++;
//     }
//     console.log(newStr);
//     return newStr;
// };

// reformat("a0b1c2");
// reformat("leetcode");
// reformat("1229857369");
// reformat("ab123");
// reformat("j");
// reformat("619mama");
// reformat("a12bcd");

// 357. Count Numbers with Unique Digits

// const countNumbersWithUniqueDigits = function(n) {
//     let previous = 1;
//     for (let i = 1; i <= n; i++) {
//         let temp = 1;
//         for (let j = 2; j <= i; j++) {
//             temp *= 11 - j;
//         }
//         previous = (9 * temp) + previous
//     }
//     return previous;
// };

// countNumbersWithUniqueDigits(0);
// countNumbersWithUniqueDigits(1);
// countNumbersWithUniqueDigits(2);
// countNumbersWithUniqueDigits(4);

// 1464. Maximum Product of Two Elements in an Array

// var maxProduct = function(nums) {
//     nums.sort((a, b) => a - b);
//     return (nums.at(-1) - 1) * (nums.at(-2) - 1)
// };

// maxProduct([3, 4, 5, 2]);
// maxProduct([1, 5, 4, 5]);
// maxProduct([3, 7]);

// 70. Climbing Stairs

// const climbStairs = function(n) {
//     const arr = [0, 1];
//     for (let i = 2; i <= n + 1; i++) {
//         arr.push(arr[i - 1] + arr[i - 2]);
//     }
//     return arr.at(-1);
// };

// climbStairs(2);
// climbStairs(3);

// 1189. Maximum Number of Balloons

// const maxNumberOfBalloons = function(text) {
//     const balloonText = text.replaceAll(/[^"balon"]/gi, "");
//     const map = new Map();
//     for (let letter of balloonText) {
//         map.has(letter) ? map.set(letter, map.get(letter) + 1) : map.set(letter, 1);
//     }
//     if (map.size < 5) return 0;
//     const minim = Math.min(map.get("b"), map.get("a"), map.get("n"));
//     const minim2 = Math.min(map.get("l"), map.get("o"));
//     for (let i = minim; i > 0; i--) {
//         if (i * 2 <= minim2) return i;
//     }
//     return 0;
    
// };

// maxNumberOfBalloons("nlaebolko");
// maxNumberOfBalloons("loonbalxballpoon");
// maxNumberOfBalloons("leetcode");

// 338. Counting Bits

// const countBits = function(n) {
//     return Array.from({length: n + 1}, (el, idx) => idx).map(el => el.toString(2).length - el.toString(2).replaceAll(1, "").length);
// };

// countBits(2);
// countBits(5);

// 349. Intersection of Two Arrays

// const intersection = function(nums1, nums2) {
//     const intersects = [];
//     const nums = [nums1, nums2].sort((a, b) => a.length - b.length);
//     for (let num of nums[0]) {
//         if (intersects.includes(num)) continue;
//         if (nums[1].includes(num)) intersects.push(num);
//     }
//     return intersects;
// };

// intersection([1, 2, 2, 1], [1, 2]);
// intersection([1, 2, 2, 1], [2, 2]);
// intersection([1, 2, 2, 3, 3, 1], [1, 2, 3]);

// 263. Ugly Number

// const isUgly = function(n) {
//     if(n <= 0) return false;
//     while(n > 0) {
//         if (n % 2 === 0) {
//             n /= 2;
//             continue;
//         }
//         if (n % 3 === 0) {
//             n /= 3;
//             continue;
//         }
//         if (n % 5 === 0) {
//             n /= 5;
//             continue;
//         }
//         if (n === 1) return true;
//         return false;
//     }  
// };

// isUgly(2);
// isUgly(1);
// isUgly(-7);
// isUgly(14);
// isUgly(5);

// 2501. Longest Square Streak in an Array

// const longestSquareStreak = function(nums) {
//     const obj = {};
//     nums = [...new Set(nums)].sort((a, b) => a - b);
//     for (let num of nums) {
//         obj[num] = 1;
//         let temp = 0;
//         let temp2 = num;
//         if (!Number.isInteger(Math.sqrt(num))) continue;
        
//         while(Number.isInteger(num)) {
//             temp = num;
//             num = Math.sqrt(num);
//             if (!obj[num]) break;
//         }
//         if (temp2 === temp) continue;
//         obj[temp] ? obj[temp]++ : obj[temp] = 1;
//     }
//     const longest = Math.max(...Object.values(obj));
//     return longest !== 1 ? longest : -1;
// };

// longestSquareStreak([4, 3, 6, 16, 8, 2]);
// longestSquareStreak([2, 3, 5, 6, 7]);
// longestSquareStreak([4, 3, 10, 100, 10000, 2]);

// 942. DI String Match

// const diStringMatch = function(s) {
//     let i = 0;
//     let j = s.length;
//     const arr = new Array(s.length + 1).fill(0);
//     const arrMap = arr.map((el, idx) => {
//         let temp = 0;
//         if (s[idx] === "I") {
//             temp = i;
//             i++;
//         } else {
//             temp = j;
//             j--;
//         }
//         return temp;
//     });
//     return arrMap;
// };

// diStringMatch("DIDI");
// diStringMatch("III");
// diStringMatch("DDI");

// 1025. Divisor Game

// const divisorGame = function(n) {
//     return n % 2 === 0 ? true : false;
// };

// divisorGame(2);
// divisorGame(3);

// 925. Long Pressed Name

// const isLongPressedName = function(name, typed) {

//     const unique = str => [...str].reduce((result, el, idx, arr) => el === arr[idx - 1] ? result : result += el, "");
//     if (unique(name) !== unique(typed)) return false;

//     for (let i = 0; i < name.length; i++) {
//         const idx = typed.indexOf(name[i]);
//         if (idx === -1) return false;
//         typed = typed.slice(idx + 1);
//     }
//     return true;
// };

// isLongPressedName("alex", "aaleexxa");
// isLongPressedName("alex", "aaleexx");
// isLongPressedName("saeed", "ssaaedddd");

// 1758. Minimum Changes To Make Alternating Binary String

// const minOperations = function(s) {
//     let check = true;
//     let total0 = total1 = 0;
//     for (const num of s) {
//         if (!!+num !== check) total0++;
//         if (!!+num === check) total1++;
//         check = !check;
//     }
//     return Math.min(total0, total1);
// };

// minOperations("111");
// minOperations("1101");
// minOperations("10");
// minOperations("00011");

// 1646. Get Maximum in Generated Array

// var getMaximumGenerated = function(n) {
//     const nums = [];
//     for (let i = 0; i < n + 1; i++) {
//         if (!i || i === 1) nums[i] = i;
//         let even = i * 2;
//         let odd = i * 2 + 1;
//         if (2 <= even && even <= n) nums[even] = nums[i];
//         if (2 <= odd && odd <= n) nums[odd] = nums[i] + nums[i + 1];
//     }
//     return Math.max(...nums);
// };

// getMaximumGenerated(0);
// getMaximumGenerated(7);
// getMaximumGenerated(2);
// getMaximumGenerated(3);

// 2490. Circular Sentence

// var isCircularSentence = function(sentence) {
//     const arr1 = sentence.split(" ");
//     const arr2 = [...arr1, arr1[0]];
//     for (let [i, word] of arr2.entries()) {
//         if (i === 0) continue;
//         if (arr2[i - 1].at(-1) !== word[0]) return false;
//     }
//     return true;
// };

// isCircularSentence("leetcode exercises sound delightful");
// isCircularSentence("eetcode");
// isCircularSentence("Leetcode is cool");

// 796. Rotate String

// const rotateString = function(s, goal) {
//     return s.length !== goal.length ? false : [...s, ...s].join("").includes(goal);
// };

// rotateString("abcde", "cdeab");
// rotateString("abcde", "abced");
// rotateString("aa", "a");

// 2404. Most Frequent Even Element

// const mostFrequentEven = function(nums) {
//     const obj = {};
//     let appearsMost = 0;
//     let minim = null;
//     for (const num of nums) {
//         if (num % 2 !== 0) continue;
//         obj[num] ? obj[num]++ : obj[num] = 1;
//         if (appearsMost < obj[num]) {
//             appearsMost = obj[num];
//             minim = num;
//         };
//         if (appearsMost === obj[num]) minim = num <= minim ? num : minim;
//     }
//     return minim ?? -1;
// };

// mostFrequentEven([0, 1, 2, 2, 4, 4, 1]);
// mostFrequentEven([4, 4, 4, 9, 2, 4]);
// mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7]);

// 3340. Check Balanced String

// const isBalanced = function(num) {
//     const sumIndices = (arr, isEven) => [...num]
//                                     .filter((el, i) => isEven ? i % 2 === 0 : i % 2 !== 0)
//                                     .reduce((total, el) => Number(total) + Number(el), 0);
//     const sumEven = sumIndices(num, true);
//     const sumOdd = sumIndices(num, false);
//     return sumEven === sumOdd;
// };

// isBalanced("1234");
// isBalanced("24123");

// 3300. Minimum Element After Replacement With Digit Sum

// const minElement = function (nums) {
//     return Math.min(...nums.map(el => [...el.toString()].reduce((total, el) => total + Number(el), 0)));
// }

// minElement([10, 12, 13, 14]);
// minElement([1, 2, 3, 4]);
// minElement([999, 19, 199]);

// 3270. Find the Key of the Numbers

// const generateKey = function(num1, num2, num3) {
//     const nums = [num1, num2, num3].map(el => el.toString().padStart(4, "0"));
//     return +Array.from({length: 4}, (el, i) => Math.min(...nums.map(num => num[i]))).join("");
// };

// generateKey(1, 2, 3);
// generateKey(1, 10, 1000);
// generateKey(987, 789, 879);

// 3019. Number of Changing Keys

// const countKeyChanges = function(s) {
//     return [...s].reduce((total, el, i, arr) => i === 0 ? total : el.toLowerCase() !== arr[i - 1].toLowerCase() ? ++total : total, 0);
// };

// countKeyChanges("aAbBcC");
// countKeyChanges("AaAaAaaA");
// countKeyChanges("mDVD");

// 3162. Find the Number of Good Pairs I

// const numberOfPairs = function(nums1, nums2, k) {
//     let result = 0;
//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = 0; j < nums2.length; j++) {
//             if (nums1[i] % (nums2[j] * k) === 0) result++;
//         }
//     }
//     return result;
// };

// numberOfPairs([1, 3, 4], [1, 3, 4], 1);
// numberOfPairs([1, 2, 4, 12], [2, 4], 3);

// 3038. Maximum Number of Operations With the Same Score I

// const maxOperations = function(nums) {
//     let result = [];
//     for (let [i, num] of nums.entries()) {
//         if ((i + 1) % 2 === 0) result.push(num + nums[i - 1]);
//         if (result.at(-1) !== result[0]) {
//             result.pop();
//             break;
//         }

//     }
//     return result.length;
// };

// maxOperations([3, 2, 1, 4, 5]);
// maxOperations([1, 5, 3, 3, 4, 1, 3, 2, 2, 3]);
// maxOperations([5, 3]);
// maxOperations([2, 2, 3, 2, 4, 2, 3, 3, 1, 3]);

// 2259. Remove Digit From Number to Maximize Result

// const removeDigit = function(number, digit) {
//     let maxim = 0n;
//     for (let i = 0; i < number.length; i++) {
//         if (number[i] === digit) {
//             const temp = BigInt(number.slice(0, i) + number.slice(i + 1));
//             maxim = maxim > temp ? maxim : temp;
//         }
//     }
//     return maxim.toString();
// };

// removeDigit("123");
// removeDigit("1231");
// removeDigit("551");

// 3285. Find Indices of Stable Mountains

// const stableMountains = function(height, threshold) {
//     return height.reduce((final, el, i, arr) => arr[i - 1] > threshold ? [...final, i] : final, []);
// };

// stableMountains([1, 2, 3, 4, 5], 2);
// stableMountains([10, 1, 10, 1, 10], 3);
// stableMountains([10, 1, 10, 1, 10], 10);

// 2027. Minimum Moves to Convert String

// const minimumMoves = function(s) {
//     let turns = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "X") {
//             turns++;
//             i += 2;
//             continue;
//         }
//     }
//     return turns;
// };

// minimumMoves("XXX");
// minimumMoves("XXOX");
// minimumMoves("OOOO");

// 1984. Minimum Difference Between Highest and Lowest of K Scores

// const minimumDifference = function(nums, k) {
//     let minim = Infinity;
//     const sortedNums = nums.toSorted((a, b) => a - b);
//     for (let [i, minNum] of sortedNums.entries()) {
//         let maxNum = sortedNums[i + k - 1];
//         if (!maxNum) break;
//         minim = Math.min(minim, maxNum - minNum);
//     }
//     return minim;
// };

// minimumDifference([90])
// minimumDifference([9, 4, 1, 7]);

// 3330. Find the Original Typed String I

// const possibleStringCount = function(word) {
//     return [...word].reduce((total, el, i, arr) => el === arr[i + 1] ? ++total : total, 1);
// };

// possibleStringCount("abbcccc");
// possibleStringCount("abcd");
// possibleStringCount("aaaa");
// possibleStringCount("ere");

// 3360. Stone Removal Game

// const canAliceWin = function(n) {
//     let isAliceWinning = false;
//     let i = 10;
//     while (n - i >= 0) {
//         isAliceWinning = !isAliceWinning;
//         n -= i;
//         i--;
//     }
//     return isAliceWinning;
// };

// canAliceWin(12);
// canAliceWin(1);
// canAliceWin(10);

// 2980. Check if Bitwise OR Has Trailing Zeros

// const hasTrailingZeros = function(nums) {
//     return nums.filter(el => el % 2 === 0).length > 1;
// };

// hasTrailingZeros([1, 2, 3, 4, 5]);
// hasTrailingZeros([1, 2]);
// hasTrailingZeros([1, 3, 5, 7, 9]);

// 2869. Minimum Operations to Collect Elements

// const minOperations = function (nums, k) {
//     const numSet = new Set();
//     let i = nums.length - 1;
//     let counter = 0;
//     while (i >= 0) {
//         if (numSet.has(k)) {
//             k--;
//         } else {
//             numSet.add(nums[i]);
//             counter++;
//             i--;
//         }
//         if (!k) break;
//     }
//     return counter;
// }

// minOperations([3, 1, 5, 4, 2], 2);
// minOperations([3, 1, 5, 4, 2], 5);
// minOperations([3, 2, 5, 3, 1], 3);

// 1346. Check If N and Its Double Exist

// const checkIfExist = function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (j === i) continue;
//             if (arr[i] === 2 * arr[j]) return true;
//         }
//     }
//     return false;
// };


// checkIfExist([10, 2, 5, 3]);
// checkIfExist([3, 1, 7, 11]);

// 2451. Odd String Difference

// const oddString = function(words) {
//     const getStr = word => Array.from({length: word.length - 1}, (el, i) => word[i + 1].charCodeAt() - word[i].charCodeAt()).join(",");
//     let obj = {};
//     for (let word of words) {
//         let str = getStr(word);
//         obj[str] ? obj[str] = [...obj[str], word] : obj[str] = [word];
//     }
//     for (let str in obj) {
//         if (obj[str].length === 1) return obj[str][0];
//     }
// };

// oddString(["adc", "wzy", "abc"]);
// oddString(["aaa", "bob", "ccc", "ddd"]);

// 2937. Make Three Strings Equal

// const findMinimumOperations = function(s1, s2, s3) {
//     let sum = 0;
//     for (let i = 0; i < s1.length; i++) {
//         if (s1[i] !== s2[i] || s1[i] !== s3[i]) break;
//         sum++;
//     }
//     return !sum ? - 1 : [s1, s2, s3].reduce((total, s) => total + (s.length - sum), 0);
// };

// findMinimumOperations("abc", "abb", "ab");
// findMinimumOperations("a", "a", "a");
// findMinimumOperations("dac", "bac", "cac");

// 3178. Find the Child Who Has the Ball After K Seconds

// const numberOfChild = function(n, k) {
//     let idx = 0;
//     let shouldAdd = false;
//     for (let i = 0; i < k; i++) {
//         if (idx === 0) shouldAdd = !shouldAdd;
//         if (idx === n - 1) shouldAdd = !shouldAdd;
//         shouldAdd ? idx++ : idx--;
//     }
//     return idx;
// };

// numberOfChild(3, 5);
// numberOfChild(5, 6);
// numberOfChild(4, 2);

// 3354. Make Array Elements Equal to Zero

// const countValidSelections = function(nums) {

//     const sum = arr => arr.reduce((total, el) => total + el, 0);
//     let result = 0;
//     let totalSoFar = 0;

//     for (let i = 0; i < nums.length; i++) {
//         totalSoFar += nums[i];
//         if (nums[i] === 0) {
//             let nums2 = sum(nums.slice(i + 1));
//             if (Math.abs(totalSoFar - nums2) === 1) result++;
//             if (nums2 === totalSoFar) result += 2;
//         }
//     }

//     return result;

// };

// countValidSelections([1, 0, 2, 0, 3]);
// countValidSelections([2, 3, 4, 0, 4, 1, 0]);

// 3264. Final Array State After K Multiplication Operations I

// const getFinalState = function(nums, k, multiplier) {
//     while (k > 0) {
//         let minim = Math.min(...nums);
//         let idx = nums.indexOf(minim);
//         nums[idx] *= multiplier;
//         k--;
//     }
//     return nums;
// };

// getFinalState([2, 1, 3, 5, 6], 5, 2);
// getFinalState([1, 2], 3, 4);

// 3083. Existence of a Substring in a String and Its Reverse

// var isSubstringPresent = function(s) {
//     const revS = s.split("").reverse("").join("");
//     for (let i = 1; i < s.length; i++) {
//         if(s.includes(revS.slice(i - 1, i + 1))) return true;
//     }
//     return false;
// };

// isSubstringPresent("leetcode");
// isSubstringPresent("abcba");
// isSubstringPresent("abcd");

// 1475. Final Prices With a Special Discount in a Shop

// const finalPrices = function(prices) {
//     return prices.map((el, idx, arr) => el - (arr.find((e, i, a) => e <= el && i > idx) ?? 0));
// };

// finalPrices([8, 4, 6, 2, 3]);
// finalPrices([1, 2, 3, 4, 5]);
// finalPrices([10, 1, 1, 6]);

// 3200. Maximum Height of a Triangle

// const maxHeightOfTriangle = function(red, blue) {
    
//     const getHeight = (first, second) => {
//         let even = 2;
//         while (true) {
//             first -= even - 1
//             second -= even;
//             if (first < 0) return even - 2;
//             if (second < 0) return even - 1;
//             even += 2;
//         }
//     }

//     const redFirst = getHeight(red, blue);
//     const blueFirst = getHeight(blue, red);

//     return redFirst >= blueFirst ? redFirst : blueFirst;

// };

// maxHeightOfTriangle(2, 4);
// maxHeightOfTriangle(2, 1);
// maxHeightOfTriangle(1, 1);
// maxHeightOfTriangle(1, 10);

// 3392. Count Subarrays of Length Three With a Condition

// const countSubarrays = function(nums) {
//     return nums.reduce((total, el, i, arr) => i > 1 && el + arr[i - 2] === (arr[i - 1] / 2) ? total += 1 : total, 0);
// };

// countSubarrays([1, 2, 1, 4, 1]);
// countSubarrays([1, 1, 1]);

// 3345. Smallest Divisible Digit Product I

// const smallestNumber = function(n, t) {
//     while (true) {
//         const product = n.toString().split("").reduce((prod, el) => +prod * +el);
//         if (product % t === 0) return n;
//         n++;
//     }
// };

// smallestNumber(10, 2);
// smallestNumber(15, 3);

// 3206. Alternating Groups I

// const numberOfAlternatingGroups = function(colors) {
//     let result = 0;
//     let circle = [...colors, ...colors];
//     for (let i = 0; i < colors.length; i++) {
//         if (circle[i] === circle[i + 2] && circle[i] !== circle[i + 1]) result++;
//     }
//     return result;
// };

// numberOfAlternatingGroups([1, 1, 1]);
// numberOfAlternatingGroups([0, 1, 0, 0, 1]);
// numberOfAlternatingGroups([1, 0, 1]);

// 3402. Minimum Operations to Make Columns Strictly Increasing

// const minimumOperations = function(grid) {

//     let count = 0;

//     for (let i = 1; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             if (grid[i][j] <= grid[i - 1][j]) {
//                 count++;
//                 grid[i][j] += 1;
//                 j--;
//             }
//         }
//     }

//     return count;
    
// };

// minimumOperations([[3, 2], [1, 3], [3, 4], [0, 1]]);
// minimumOperations([[3, 2, 1], [2, 1, 0], [1, 2, 3]]);

// 3407. Substring Matching Pattern

// const hasMatch = function(s, p) {
//     const first = p.slice(0, p.indexOf("*"));
//     const second = p.slice(p.indexOf("*") + 1);
//     const len = first.length;
//     const ind1 = s.indexOf(first);
//     if (ind1 === -1) return false;
//     const ind2 = s.lastIndexOf(second);
//     return ind1 + len <= ind2;
// };

// hasMatch("leetcode", "ee*e");
// hasMatch("car", "c*v");
// hasMatch("luck", "u*");

// 3423. Maximum Difference Between Adjacent Elements in a Circular Array

// const maxAdjacentDistance = function(nums) {
//     const arr = [...nums, ...nums];
//     let result = -Infinity;
//     for (let i = 0; i <= nums.length; i++) {
//         result = Math.max(result, Math.abs(arr[i] - arr[i + 1]));
//     }
//     return result;
// };

// maxAdjacentDistance([1, 2, 4]);
// maxAdjacentDistance([-5, -10, -5]);

// 3427. Sum of Variable Length Subarrays

// const subarraySum = function(nums) {
//     let total = 0;
//     for (let i = 1; i <= nums.length; i++) {
//         let start = Math.max(0, i - nums[i]);
//         let subNums = nums.slice(start, i);
//         total += subNums.reduce((total, el) => total + el);
//     }
//     return total;
// };

// subarraySum([2, 3, 1]);
// subarraySum([3, 1, 1, 2]);

// 3090. Maximum Length Substring With Two Occurrences

// const maximumLengthSubstring = function(s) {
//     let maxim = -Infinity;
//     for (let i = 0; i < s.length; i++) {
//         const newMap = new Map();
//         for (let j = i; j < s.length; j++) {
//             newMap.set(s[j], 1 + newMap.get(s[j]) || 1);
//             if (newMap.get(s[j]) > 2) break;
//             maxim = Math.max(maxim, j - i + 1);
//         }
//     }
//     return maxim;
// };

// maximumLengthSubstring("bcbbbcba");
// maximumLengthSubstring("aaaa");

// 3375. Minimum Operations to Make Array Values Equal to K

// Option#1
// const minOperations = function(nums, k) {
//     const newNums = [...new Set(nums)];
//     if (newNums.some(el => el < k)) return -1;
//     return newNums.filter(el => el > k).length;
// };

// Option#2
// const minOperations = function(nums, k) {
//     let optns = 0;
//     for (let [idx, val] of [...new Set(nums)].entries()) {
//         if (val < k) return -1;
//         if (val > k) optns++;
//     }
//     return optns;
// };

// minOperations([5, 2, 5, 4, 5]);
// minOperations([2, 1, 2]);

// 2951. Find the Peaks

// const findPeaks = function(mountain) {
//     return mountain
//                 .map((el, i, arr) => i === 0 || i === mountain.length - 1 ? 0 : el > arr[i - 1] && el > arr[i + 1] ? i : 0)
//                 .filter((el => el));
// };

// findPeaks([1, 4, 3, 8, 5]);
// findPeaks([1, 2, 2]);

// 3452. Sum of Good Numbers

// const sumOfGoodNumbers = function(nums, k) {
//     return nums.reduce((total, el, i, arr) => {
//         let low = arr[i - k] ?? 0;
//         let high = arr[i + k] ?? 0;
//         if (low < el && high < el) return total += el;
//         return total;
//     }, 0);
// };

// sumOfGoodNumbers([1, 3, 2, 1, 5, 4], 2);
// sumOfGoodNumbers([2, 1], 1);

// 3456. Find Special Substring of Length K

// const hasSpecialSubstring = function(s, k) {
//     for (let i = 0; i < s.length; i++) {
//         let tempStr = s.substring(i, i + k);
//         if (tempStr.length < k) return false;
//         let tempSet = new Set(s.substring(i, i + k));
//         if (tempSet.size === 1) {
//             if (s[i - 1] !== s[i] && s[i + k] !== s[i]) return true;
//         }
//     }
//     return false;
// };

// hasSpecialSubstring("aaabaaa", 3);
// hasSpecialSubstring("abc", 2);
// hasSpecialSubstring("h", 1);

// 3210. Find the Encrypted String

// const getEncryptedString = function(s, k) {
//     return [...s].reduce((total, el, i, arr) => total += arr[(i + k) % s.length], "");
// };

// getEncryptedString("dart");
// getEncryptedString("aaa");
// getEncryptedString("byd");

// 3461. Check If Digits Are Equal in String After Operations I

// const hasSameDigits = function(s) {
//     while (s.length > 2) {
//         let result = "";
//         for (let i = 1; i < s.length; i++) {
//             result += (Number(s[i]) + Number(s[i - 1])) % 10;
//         }
//         s = result;
//     }
//     return s[0] === s[1];
// };

// hasSameDigits("3902");
// hasSameDigits("34789");

// 1672. Richest Customer Wealth

// const maximumWealth = function(accounts) {
//     return accounts.reduce((high, el) => Math.max(high, el.reduce((t, e) => t + e)), 0);
// };

// maximumWealth([[1, 2, 3], [3, 2, 1]]);
// maximumWealth([[1, 5], [7, 3], [3, 5]])
// maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])

// 744. Find Smallest Letter Greater Than Target

// const nextGreatestLetter = function(letters, target) {
//     let targetNum = target.charCodeAt();
//     const lettersMap = [...new Set(letters)].map(el => el.charCodeAt());
//     for (const letter of lettersMap) {
//         if (letter > targetNum) return String.fromCharCode(letter);
//     }
//     return letters[0]
// };

// nextGreatestLetter(["c", "f", "j"], "a");
// nextGreatestLetter(["c", "f", "j"], "c");
// nextGreatestLetter(["x", "x", "y", "y"], "z");

// 1796. Second Largest Digit in a String

// const secondHighest = function(s) {
//     const set = new Set(s);
//     set.forEach((point, _, chars) => isNaN(point) ? chars.delete(point) : null);
//     return Number([...set].sort((a, b) => b - a)[1] ?? -1);
// }

// secondHighest("dfa12321afd");
// secondHighest("abc1111");

// 3471. Find the Largest Almost Missing Integer

// const largestInteger = function(nums, k) {

//     let maximum = -1;

//     for (let num of nums) {
//         let total = 0;
//         for (let i = 0; i < nums.length + 1 - k; i++) {
//             let set = new Set(nums.slice(i, k + i));
//             if (set.has(num)) total++;
//         }
//         if (total === 1) maximum = Math.max(maximum, num);
//     }
//     return maximum;

// }

// largestInteger([3, 9, 2, 1, 7], 3);
// largestInteger([3, 9, 7, 2, 1, 7], 4);
// largestInteger([0, 0], 1);

// 1769. Minimum Number of Operations to Move All Balls to Each Box

// const minOperations = function(boxes) {
//     return [...boxes].map((el, ind, arr) => arr.reduce((total, e, i) => e === "1" ? total += Math.abs(i - ind) : total, 0));
// };

// minOperations("110");
// minOperations("001011");

// 2657. Find the Prefix Common Array of Two Arrays

// const findThePrefixCommonArray = function(A, B) {
//     const set = new Set();
//     const arr = new Array(A.length).fill(0);
//     for (let i = 0; i < A.length; i++) {
//         set.add(A[i]);
//         set.add(B[i]);
//         arr[i] = (i + 1) * 2 - set.size;
//     }
//     return arr;
// };

// findThePrefixCommonArray([2, 3, 1], [3, 1, 2]);
// findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]);

// 1347. Minimum Number of Steps to Make Two Strings Anagram

// const minSteps = function(s, t) {

//     const map1 = new Map();
//     const map2 = new Map();

//     for (let i = 0; i < s.length; i++) {
//         map1.has(s[i]) ? map1.set(s[i], map1.get(s[i]) + 1) : map1.set(s[i], 1);
//         map2.has(t[i]) ? map2.set(t[i], map2.get(t[i]) + 1) : map2.set(t[i], 1);
//     }

//     let total = 0

//     for (let [letter, value] of map2.entries()) {
//         let check = map1.get(letter);
//         if (!check) {
//             total += value;
//             continue;
//         }
//         value - check < 0 ? map2.set(letter, 0) : map2.set(letter, value - check);
//         total += map2.get(letter);
//     }

//     return total;
// };

// minSteps("bab", "aba");

// 1877. Minimize Maximum Pair Sum in Array

// const minPairSum = function(nums) {
    
//     const sortedNums = nums.toSorted((a, b) => a - b);

//     let i = 0;
//     let j = nums.length - 1;
//     let maximum = 0;

//     while (i < j) {
//         maximum = Math.max(maximum, sortedNums[i] + sortedNums[j]);
//         i++;
//         j--;
//     }

//     return maximum;
// };

// minPairSum([3, 5, 2, 3]);
// minPairSum([3, 5, 4, 2, 4, 6]);

// 2785. Sort Vowels in a String

// const sortVowels = function(s) {

//     const vowels = "aeiouAEIOU";

//     const includedVowels = [...s].filter(letter => vowels.includes(letter)).sort((a, b) => a.charCodeAt() - b.charCodeAt());

//     let sortedWord = "";
//     let count = 0;

//     for (let letter of s) {
//         if (!vowels.includes(letter)) {
//             sortedWord += letter;
//         } else {
//             sortedWord += includedVowels[count];
//             count++;
//         }
//     }

//     return sortedWord;
// };

// sortVowels("lEetcOde", "lEOtcede");
// sortVowels("lYmpH", "lYmpH");

// 1980. Find Unique Binary String

// const findDifferentBinaryString = function(nums) {
//     for (let i = 0; i <= nums.length ** nums.length; i++) {
//         let binary = i.toString(2).padStart(nums.length, "0");
//         if (!nums.includes(binary)) return binary;
//     }
// };

// findDifferentBinaryString(["00", "01"]);
// findDifferentBinaryString(["01", "10"]);
// findDifferentBinaryString(["111", "011", "001"]);

// 46. Permutations

// const permute = function(nums) {
//     if (nums.length === 0) return [[]];

//     let outputs = [];

//     for (let i = 0; i < nums.length; i++) {
//         let currentNum = nums[i];
//         let remainingNums = nums.slice(0, i).concat(nums.slice(i + 1))
//         let permutations = permute(remainingNums);

//         for (const perm of permutations) {
//             outputs.push([currentNum, ...perm])
//         }
//     }

//     return outputs;
    
// };

// permute([1, 2, 3]);
// permute([0, 1]);
// permute([1, 2, 3, 4]);

// 3163. String Compression III

// const compressedString = function(word) {
//     let count = 0;
//     let str = "";
//     for (let i = 0; i < word.length; i++) {
//         count++;
//         if (count === 9 || word[i] !== word[i + 1]) {
//             str += count + word[i];
//             count = 0;
//         }
//     }
//     return str;
// };

// compressedString("abcde");
// compressedString("aaaaaaaaaaaaaaabb");

// 2379. Minimum Recolors to Get K Consecutive Black Blocks

// const minimumRecolors = function(blocks, k) {
    
//     let minimum = Infinity;
//     const arr = [...blocks];

//     for (let i = 0; i <= blocks.length - k; i++) {
//         let window = arr.slice(i, k + i);
//         minimum = Math.min(minimum, window.filter(el => el === "W").length);
//     }

//     return minimum;

// };

// minimumRecolors("WBBWWBBWBW");
// minimumRecolors("WBWBBBW");

// 1551. Minimum Operations to Make Array Equal

// const minOperations = function(n) {
//     let total = 0;
//     while (n > 1) {
//         total += (n - 1);
//         n -= 2;
//     }
//     return total;
// };

// minOperations(3);
// minOperations(6);

// 2149. Rearrange Array Elements by Sign

// const rearrangeArray = function(nums) {

//     let check = false;
//     let i = 0;
//     let j = 0;

//     return nums.map((el, ind, arr) => {
//         check = !check;
//         while (true) {
//             if (check) {
//                 if (arr[i] > 0) {
//                     let item = arr[i]
//                     i++;
//                     return item;
//                 }
//                 i++;
//             } else {
//                 if (arr[j] < 0) {
//                     let item = arr[j]
//                     j++;
//                     return item;
//                 }
//                 j++;
//             }
//         }
//     })
// };

// rearrangeArray([3, 1, -2, -5, 2, -4]);
// rearrangeArray([-1, 1]);

// 3208. Alternating Groups II

// const numberOfAlternatingGroups = function(colors, k) {
    
//     let wheel = colors.concat(colors.slice(0, k - 1));
//     let windowStart = 0;
//     let total = 0;
//     let check = wheel[0] ? true : false;
    
//     for (let windowEnd = 0; windowEnd < wheel.length; windowEnd++) {
//         if (check !== Boolean(wheel[windowEnd])) {
//             windowStart = windowEnd;
//             check = wheel[windowEnd] ? true : false;
//         }
//         if (windowEnd - windowStart >= k - 1) {
//             total += 1;
//             windowStart++;
//         }
//         if (windowStart >= colors.length) {
//             break;
//         }
//         check = !check;
//     }
//     return total;
// };

// numberOfAlternatingGroups([0, 1, 0, 1, 0]);
// numberOfAlternatingGroups([0, 1, 0, 0, 1, 0, 1]);
// numberOfAlternatingGroups([1, 1, 0, 1]);

// 4. Median of Two Sorted Arrays

// const findMedianSortedArrays = function(nums1, nums2) {

//     const len = nums1.length + nums2.length;

//     if (len === 1) return [...nums1, ...nums2][0];

//     const mid = Math.floor(len / 2);
//     const arr = [];
//     let i = 0;
//     let j = 0;

//     while (i + j < mid + 1) {
//         if ((nums1[i] ?? Infinity) < (nums2[j] ?? Infinity)) {
//             arr.push(nums1[i]);
//             i++;
//         } else if (nums1[i] === nums2[j]) {
//             arr.push(nums1[i]);
//             i++;
//             if (i + j >= mid + 1) break;
//             arr.push(nums2[j]);
//             j++;
//         } else {
//             arr.push(nums2[j]);
//             j++;
//         }
//     }

//     return len % 2 ? arr.at(-1) : (arr.at(-1) + arr.at(-2)) / 2
    
// };

// findMedianSortedArrays([1, 3], [2]);
// findMedianSortedArrays([1, 2], [3, 4]);
// findMedianSortedArrays([0, 0], [0, 0]);
// findMedianSortedArrays([1, 3], []);

// 2037. Minimum Number of Moves to Seat Everyone

// const minMovesToSeat = function(seats, students) {
//     const sortMe = arr => arr.sort((a, b) => a - b);
//     sortMe(seats);
//     sortMe(students);
//     return seats.reduce((total, el, i) => total += Math.abs(el - students[i]), 0);
// };

// minMovesToSeat([3, 1, 5], [2, 7, 4]);




// FIXME: To revisit
// const countOfSubstrings = function (word, k) {
    
//     const vowelAndConsonantCheck = word => {
//         let vowels = "aeiou";
//         let vowelCount = 0;
//         for (const [i, vowel] of [...vowels].entries()) {
//             if (word.includes(vowel)) vowelCount += 1;
//         }
//         let consonantCount = [...word].filter(el => !vowels.includes(el)).length;
//         return [vowelCount, consonantCount];
//     }

//     let windowStart = 0;
//     let windowEnd = windowStart + 1;
//     let total = 0;

//     while (windowStart < windowEnd) {
//         let window = word.slice(windowStart, windowEnd);
//         const [vowelCount, consonantCount] = vowelAndConsonantCheck(window);
//         if (windowEnd < word.length && consonantCount <= (k ? k : k + 1)) {
//             windowEnd++;
//         } else {
//             windowStart++;
//         }
//         if (vowelCount === 5 & consonantCount === k) total++;
//         console.log(window, vowelCount, consonantCount)
//     }
//     return total;
// };


// console.log(countOfSubstrings("aeiouqq", 1));
// console.log(countOfSubstrings("aeiou", 0));
// console.log(countOfSubstrings("ieaouqqieaouqq", 1));
// console.log(countOfSubstrings("iqeaouqi", 2));
// console.log(countOfSubstrings("buoeia", 0));
// console.log(countOfSubstrings("aadieuoh", 1));

// 2423. Remove Letter To Equalize Frequency

// var equalFrequency = function(word) {
//     const checkedLetters = [];
//     const createMap = function (str) {
//         const map = new Map();
//         [...str].forEach(letter => map.has(letter) ? map.set(letter, map.get(letter) + 1) : map.set(letter, 1));
//         return map;
//     }
//     for (const [i, letter] of [...word].entries()) {
//         if (checkedLetters.includes(letter)) continue;
//         let str = word.slice(0, i) + word.slice(i + 1);
//         checkedLetters.push(letter);
//         const map = createMap(str);
//         const iterator = map.values();
//         const first = iterator.next().value;
//         if (iterator.every(el => el === first)) return true;
//     }
//     return false;
// };

// console.log(equalFrequency("abcc"));
// console.log(equalFrequency("bac"));
// console.log(equalFrequency("aazz"));
// console.log(equalFrequency("aabc"));
// console.log(equalFrequency("abbcc"));

// 202. Happy Number

// const isHappy = function(n) {
//     const convert = num => num.toString().split("").reduce((total, el) => total + (el ** 2), 0);
//     let count = 0;
//     let checkedNums = [4];
//     while (!checkedNums.includes(n)) {
//         checkedNums.push(n);
//         n = convert(n);
//         if (n === 1) return true;
//     }
//     return false;
// };

// console.log(isHappy(19));
// console.log(isHappy(2));

// 2965. Find Missing and Repeated Values

// var findMissingAndRepeatedValues = function(grid) {
//     return grid
//             .flat()
//             .reduce((total, el, i, arr) => arr.slice(0, i).includes(el) ? [el, total[1] + i + 1] : [total[0], total[1] + i + 1 - el], [0, 0]);
// };

// findMissingAndRepeatedValues([[1, 3], [2, 2]]);
// findMissingAndRepeatedValues([[9, 1, 7], [8, 9, 2], [3, 4, 6]]);

// 374. Guess Number Higher or Lower

// const guessNumber = function(n) {
//     let left = 0;
//     let right = n;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (!guess(mid)) return mid;
//         if (guess(mid) > 0) left = mid + 1;
//         if (guess(mid) < 0) right = mid - 1;
//     }
//     return - 1;
// };

// guessNumber(10);
// guessNumber(10);

// 20. Valid Parentheses

// const isValid = function(s) {
//     const stack = [];
//     const pairs = {"}" : "{", "]" : "[", ")" : "("};

//     for (const item of s) {
//         if (["(", "{", "["].includes(item)) {
//             stack.push(item);
//         } else {
//             if (stack.pop() !== pairs[item]) return false;
//         }
//     }

//     return stack.length === 0;
// };

// isValid("()");
// isValid("()[]{}");
// isValid("(]");
// isValid("([])");

// 1047. Remove All Adjacent Duplicates In String

// const removeDuplicates = function(s) {
//     const stack = [];
//     for (let i = 0; i < s.length; i++) {
//         stack.at(-1) === s[i] ? stack.pop() : stack.push(s[i]);
//     }
//     return stack.join("");
// };

// removeDuplicates("aaaaaa");
// removeDuplicates("aabaca");

// 746. Min Cost Climbing Stairs

// const minCostClimbingStairs = function(cost) {
//     let n = cost.length;
//     if (n === 0) return 0;
//     if (n === 1) return cost[0];

//     let prev1 = cost[1];
//     let prev2 = cost[0];

//     for (let i = 2; i < n; i++) {
//         let curr = cost[i] + Math.min(prev1, prev2);
//         prev2 = prev1;
//         prev1 = curr;
//     }

//     return Math.min(prev1, prev2);
// };

// minCostClimbingStairs([10, 15, 20]);
// minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);

// 2124. Check if All A's Appears Before All B's

// const checkString = s => !s.includes("ba");

// checkString("aaabbb");
// checkString("abab");
// checkString("bbb");

// 1790. Check if One String Swap Can Make Strings Equal

// const areAlmostEqual = function(s1, s2) {
//     const check = [];
//     for (let i = 0; i < s1.length; i++) {
//         if (s1[i] !== s2[i]) check.push(i);
//         if (check.length > 2) return false;
//     }
//     if (s1[check[0]] === s2[check[1]] && s1[check[1]] === s2[check[0]]) return true;
//     if (!check.length) return true;
//     return false;
// };

// areAlmostEqual("bank", "kanb");
// areAlmostEqual("attack", "defend");
// areAlmostEqual("kelb", "kelb");




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// RECURSIVE FUNCTION PROBLEMS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1. Sum all the Elements in an array

// const sum = function (arr) {
//     if (arr.length === 0) return 0;
//     return arr[0] + sum(arr.slice(1));
// }

// console.log(sum([1, 2, 3]));
// console.log(sum([1, 2, 3, 4]));
// console.log(sum([1, 2, 3, 4, 5]));

// 2. Compute for n factorial(n!);

// const factorial = function (n) {
//     if (!n) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5));
// console.log(factorial(1));
// console.log(factorial(10));

// 3. Find the nth Fibonacci number

// const fibonacci = function (n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(5));
// console.log(fibonacci(8));

// 4. Reverse a string using recursion

// const reverse = function (str) {
//     if (!str.length) return "";
//     return str.at(-1) + reverse(str.slice(0, str.length - 1));
// }

// console.log(reverse("abc"));
// console.log(reverse("sunflower"));

// 5. Calculate x^n recursively

// const power = function (x, n) {
//     if (!n) return 1;
//     return x * power(x, n - 1);
// }

// console.log(power(2, 3));
// console.log(power(2, 5));

// 6. Find an element in a sorted array using recursive function

// const binarySearch = function (arr, target) {
//     if (arr[0] === target) return 0 ;
//     return 1 + binarySearch(arr.slice(1), target);
// }

// Alternate solution using binary search algorithm of left-right

// const binarySearch = function (arr, target, left = 0, right = arr.length - 1) {
//     if (left > right) return -1;
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) return mid
//     if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
//     if (arr[mid] < target) return binarySearch(arr, target, mid + 1, right);
// }

// console.log(binarySearch([1, 2, 3, 4, 5], 4));
// console.log(binarySearch([10, 20, 32, 11, 4], 10));

// 7. Generate all permutations of a given array

// const permutate = function (arr) {

//     if (!arr.length) return [[]];

//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         let currentNumber = arr[i];
//         let remainingNumbers = arr.slice(0, i).concat(arr.slice(i + 1));
//         let permutations = permutate(remainingNumbers);

//         for (let perm of permutations) {
//             result.push([currentNumber, ...perm]);
//         }
//     }
    
//     return result;
// }

// console.log(permutate([1, 2, 3]));
// console.log(permutate([1, 2, 3, 4]));

// 8. Generate all subsets of a given set (power set)

// const subsets = function (arr) {

//     if (!arr.length) return [[]];

//     const first = arr[0];
//     const rest = subsets(arr.slice(1));

//     const withFirst = rest.map(el => [first, ...el]);

//     return [...withFirst, ...rest];
// }

// console.log(subsets([1, 2, 3]));