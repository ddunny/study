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

  for (let idx in size) {
    if (idx < s1.length) { // excute
      arr1[s1.charCodeAt(idx)] += 1;
    }

    if (idx < s2.length) { // excute
      arr2[s2.charCodeAt(idx)] += 1;
    }
  }

  console.log(`arr1 ${arr1} / arr2 ${arr2}`);

  return [];
}