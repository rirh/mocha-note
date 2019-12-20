"use strict";
/**
 * 
 * @param {*} nums 
 * 第一道题目
 * 输入数组
 * [
 * 'oxo',
 * 'xox', 
 * 'oxo'
 * ]
 * 棋盘游戏
 * 如果符合规则则获胜
 * 如果超过一种符合类型的数组则不通过
 */
module.exports = function (board) {
    let result = false;
    const [[a, b, c], [d, e, f], [j, h, i]] = board;
    const boards = [a, b, c, d, e, f, j, h, i];
    const rules = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let index = 0; index < rules.length; index++) {
        const [x, y, z] = rules[index];
        if (boards[x] !== '' && boards[x] === boards[y] && boards[y] === boards[z]) {
            if (!result) {
                result = true;
            } else {
                result = false;
            }
        }
    }
    return result;
}