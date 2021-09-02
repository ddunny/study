// Same Tree
// https://leetcode.com/problems/same-tree/
var isSameTree = function (p, q) {
  let isSame = true;

  let req = (p, q) => {
    if (!p && !q) {
      return;
    }

    if (!p || !q) {
      isSame = false;
      return;
    }

    if (p.val !== q.val) {
      isSame = false;
      return;
    }

    req(p.left, q.left);
    req(p.right, q.right);
  };

  req(p, q);

  return isSame;
};
