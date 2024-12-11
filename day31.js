/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(a, b) {
    let result = null;

    // Base cases
    if (a === null)
        return b;
    else if (b === null)
        return a;

    // Pick either a or b, and recur
    if (a.val <= b.val) {
        result = a;
        result.next = mergeTwoLists(a.next, b);
    }
    else {
        result = b;
        result.next = mergeTwoLists(a, b.next);
    }
    return result;
};

//https://leetcode.com/problems/merge-two-sorted-lists/?envType=study-plan-v2&envId=top-interview-150