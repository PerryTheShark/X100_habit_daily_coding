/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let array = [];
    let k = 0;

    for (let i = 0; i < 1000; i++) {
        array.push(0);
    }

    for (let i = 0; i < magazine.length; i++) {
        let num = magazine[i].charCodeAt(0) -'a'.charCodeAt(0);
            array[num]++;
    }

    // if (k == 26) return true;

    for (let i = 0; i < ransomNote.length; i++) {
        let num = ransomNote[i].charCodeAt(0) -'a'.charCodeAt(0);
        if (array[num] == 0) {
            return false;
        }
        array[num]--;
    }

    return true;
};

// https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150