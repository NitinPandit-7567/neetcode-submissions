/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number;
 *     next: ListNode | null;
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val === undefined ? 0 : val);
 *         this.next = (next === undefined ? null : next);
 *     }
 * }
 */

class Solution {
    reorderList(head: ListNode | null): void {
        if (!head || !head.next) return;

        // Step 1: Find the middle
        let slow: ListNode | null = head;
        let fast: ListNode | null = head;

        while (fast.next && fast.next.next) {
            slow = slow!.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse the second half
        let second: ListNode | null = slow!.next;
        slow!.next = null; // Split the list

        let prev: ListNode | null = null;
        while (second) {
            const next = second.next;
            second.next = prev;
            prev = second;
            second = next;
        }

        // Step 3: Merge the two halves
        let first: ListNode | null = head;
        second = prev;

        while (second) {
            const temp1 = first!.next;
            const temp2 = second.next;

            first!.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}