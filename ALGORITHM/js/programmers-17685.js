  
/** 
 * [3차] 자동완성
 * https://programmers.co.kr/learn/courses/30/lessons/17685
 * 
 * @ddunny
*/
function solution(words) {
  const Node = () => {
    return {
      child: [],
      end: false,
      sum: 0,
    };
  };

  const insert = (parentNode, word) => {
    word.split("").reduce((acc, value) => {
      const cur = acc + value;
      if (parentNode.child[value] === undefined) {
        let childNode = Node();
        parentNode.child[value] = childNode;
      }
      parentNode.child[value].sum++;

      if (word === cur) {
        parentNode.child[value].end = true;
      }

      parentNode = parentNode.child[value];
      return cur;
    }, "");
  };

  const find = (parentNode, word, typing) => {
    for (const char of word) {
        typing++;
      if (parentNode.child[char]) {
        if (parentNode.child[char].sum === 1 && !parentNode.child[char].end) {
          return typing;
        }
        if (typing === word.length) {
          return typing;
        }
        parentNode = parentNode.child[char];
      } else {
        return 0;
      }
    }
    word.split("").reduce((acc, value, index) => {
      const cur = acc + value;
      parentNode.sum++;
      if (parentNode.child[value] === undefined) {
        let childNode = Node();
        parentNode.child[value] = childNode;
      } else {
      }
    }, "");
  };

  const root = Node();

  for (const word of words) {
    insert(root, word);
  }

  let typingSum = 0;
  let typing = 0;
  for (const word of words) {
    typingSum = typingSum + find(root, word, typing);
    typing = 0;
  }
    

  return typingSum;
}
