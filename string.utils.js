/**
 * Created by Tristan on 17/4/21.
 */



function isEmpty(str) {
    if (str == null || str.length == 0) {
        return true;
    }
    return false;
};
module.exports.isEmpty = isEmpty;




function notEmpty(str) {
    return !this.isEmpty(str)
};
module.exports.notEmpty = notEmpty;



function include(all, sub, split) {
    return new Promise(resolve => {
        let allArr = all.split(split);
        let subArr = sub.split(split);
        let sum = 0;
        for (let i = 0; i < allArr.length; i++) {
            for (let j = 0; j < subArr.length; j++) {
                if (allArr[i] === subArr[j]) {
                    sum++;
                }
            }
        }
        if (sum === subArr.length) {
            resolve(true);
        } else {
            resolve(false);
        }
    })

};
module.exports.include = include;
