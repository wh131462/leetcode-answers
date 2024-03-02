
/**
 * 7.整数反转 
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 *  
 * 示例 1：
 * 输入：x = 123
 * 输出：321
 * 示例 2：
 * 输入：x = -123
 * 输出：-321
 * 示例 3：
 * 输入：x = 120
 * 输出：21
 * 示例 4：
 * 输入：x = 0
 * 输出：0
 *  
 * 提示：
 * 	-231 31 - 1
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 安全范围
    const MinSize = - Math.pow(2,31);
    const MaxSize = Math.pow(2,31) - 1;
    // 截取符号
    const stack = [];
    const str = x.toString();
    let sign = 1;
    let rev = "";
    for (let i = 0; i < str.length; i++) {
        if(str.at(i)!=="-"){
            stack.push(str.at(i));
        }else{
            sign *=-1;
        }
    }
    while (stack?.length){
        rev+=stack.pop();
    }
    rev = Number(rev) * sign;
    if(rev < MinSize || rev > MaxSize)return 0;
    return  rev;
}

/**
 * Test case
 */
showLogs(
    reverse,
    {
        data: [[ 123],[ -123],[ 120],[ 0]],
        structure: ["number"],
    },
    {
        data: [321,-321,21,0],
        structure: ["number"]
    }
)
console.log('点击跳转到题目提交:https://leetcode.cn/problems/reverse-integer/');