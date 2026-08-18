/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let index = 0;
        let slow = head;
        let fast = head;
        let slowIndex = 0;
        let fastIndex = 0;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            slowIndex++;
            fastIndex += 2;
        }
        if (!fast) {
            fastIndex--;
        }
        const indexToRemove = fastIndex - (n - 1);
        let current;
        if (slowIndex < indexToRemove) {
            current = slow;
            index = slowIndex;
        } else {
            current = head;
        }
        let found = false;
        let prev = null;
        console.log(
            "SlowIndex: ",
            slowIndex,
            " FastIndex: ",
            fastIndex,
            " IndexToRemove: ",
            indexToRemove,
            " index: ",
            index,
        );
        while (current && !found) {
            if (index === indexToRemove) {
                if (!prev) {
                    head = current.next;
                } else {
                    prev.next = current.next;
                }
                found = true;
            } else {
                prev = current;
                current = current.next;
            }
            index++;
        }
        return head;
    }
}
