"use strict";
/**
 * 
 * @param {*} nums 
 * 第一道题目
 * 找到数组中符合条件
 * a+b+c=0 的三个数
 * 并且返回
 * 例：
 *   输入
 *   [-2,-1,0,1,2]
 * 
 *   输出
 *   [
 *   [-2,0,2],
 *   [-1,0,1]
 *   ]
 */
module.exports = function (nums) {
    let result = [];
    //TODO
    for (let index = 0; index < nums.length; index++) {
        const x = nums[index];
        const left = nums.slice(0, index );
        const right = nums.slice(index , -1);
        if (left.length && right.length) {
            for (let i = 0; i < left.length; i++) {
                const y = left[i];
                for (let j = 0; j < right.length; j++) {
                    const z = right[j];
                    const isuit = x + y + z === 0;
                    if (isuit) {
                        result.push([x, y, z].sort(function (a, b) { return a - b }))
                    }
                }

            }
        }
    }

    // 二维数组去重复
    const hash = {};
    const arr = []
    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        if (!hash[element]) {
            hash[element] = true;
            arr.push(element);
        }
    }
    result = arr;
    return result;
}