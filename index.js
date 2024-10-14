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