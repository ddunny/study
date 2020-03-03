/**
 * Insert a node at a specific position in a linked list
 * https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem
 * 
 @ddunny
 */
 
 function insertNodeAtPosition(head, data, position) {
    let preNode;
    let current = head;
    let newNode = {data: data, next: null};
    let nowIndex = 0;
    while (1) {
        if (nowIndex === position) break; // 삽입할 위치가 왔습니다.
        preNode = current;
        console.log(`preNode: ${JSON.stringify(preNode)}`);
        current = current.next;
        nowIndex++;
    }

    newNode.next = current;
    preNode.next = newNode;

    return head;
}
