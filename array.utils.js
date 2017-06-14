/**
 * Created by Tristan on 17/4/21.
 */
/**
 * 判断arrs数组是否包含value
 * @param value
 * @param arrs
 * @returns {boolean}
 */
function include(value, arrs) {
    arrs.forEach(va => {
        if (va === value) {
            return true;
        }
    });
    return false;
}
module.exports.include = include
