/*
* 1411.二进制链表转整数 [2025-07-14]
* 给你一个单链表的引用结点 head。链表中每个结点的值不是 0 就是 1。已知此链表是一个整数数字的二进制表示形式。
* 请你返回该链表所表示数字的 十进制值 。
* 最高位 在链表的头部。
*  
* 示例 1：
* 输入：head = [1,0,1]
* 输出：5
* 解释：二进制数 (101) 转化为十进制数 (5)
* 示例 2：
* 输入：head = [0]
* 输出：0
*  
* 提示：
* 	链表不为空。
* 	链表的结点总数不超过 30。
* 	每个结点的值不是 0 就是 1。
* 
*/


// @QUESTION_START
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    const arr = [];
    let node = head;
    while (node!==null){
        arr.unshift(node.val);
        node = node.next;
    }
    return arr.reduce((res,cur,idx)=>res+=cur*Math.pow(2,idx),0)
};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  getDecimalValue,
  {
    data: [[ [1,0,1]],[ [0]]],
    structure: ["ListNode"]
  },
  {
    data: [5,0],
    structure: ["number"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/convert-binary-number-in-a-linked-list-to-integer/');
