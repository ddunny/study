/**
 * Making Anagrams
 * https://www.hackerrank.com/challenges/making-anagrams/problem
 *
 * 
 @ddunny
 */

// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
  // lowercase ascii 97~122
  // in arr 0~25 (ascii - 97)

  let size = (s1.length >= s2.length) ? s1.length : s2.length;

  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i <= 25; i++) {
    arr1[i] = 0;
    arr2[i] = 0;
  }

  for (let i = 0; i < size; i++) {
    if (i < s1.length) arr1[s1.charCodeAt(i) - 97] += 1;
    if (i < s2.length) arr2[s2.charCodeAt(i) - 97] += 1;
  }

  let count = 0;
  for (let i = 0; i <= 25; i++) {
    count += Math.abs(arr1[i] - arr2[i]);
  }

  return count;
  }