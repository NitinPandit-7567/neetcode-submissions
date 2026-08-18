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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let resultHead = new ListNode(0, null);
        let h1 = resultHead;
        let carry = 0;
        while (l1 || l2) {
            const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
            carry = Math.floor(sum / 10);
            const digit = Math.floor(sum % 10);
            h1.next = new ListNode(digit, null);
            h1 = h1.next;
            l1 = l1?.next;
            l2 = l2?.next;
        }
        if (carry) {
            h1.next = new ListNode(carry, null);
            h1 = h1.next;
        }
        return resultHead.next;
    }
}
