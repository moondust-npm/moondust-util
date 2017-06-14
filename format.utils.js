/**
 * Created by Tristan on 17/4/21.
 */


const parse_url = /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/;
const parse_mobile = /^1[0-9]{10}$/;
const stringUtil = require('./string.utils');
function isUrl(str) {
    if (stringUtil.isEmpty(str)) return false;
    if (parse_url.test(str)) return true;
    return false;
};
module.exports.isUrl = isUrl;

function isMobile(str) {
    if (stringUtil.isEmpty(str)) return false;
    if (parse_mobile.test(str)) return true;
    return false;
};
module.exports.isMobile = isMobile;

function isPassword(str) {
    if (stringUtil.isEmpty(str))return false;
    if (str.length <= 6) return false;
    return true;
};
module.exports.isPassword = isPassword;

/**
 * 判断数组是否含有空
 * @param arrays<Array>
 */
function containsEmpty(arrays) {
    if (arrays === null)
        return true;
    arrays.forEach((arr) => {
        if (stringUtil.isEmpty(arr)) {
            return true;
        }
    })
    return false;
}


module.exports.containsEmpty = containsEmpty;


/**
 * 判断数组arrays中是不是没有空
 * @param arrays
 * @returns {boolean}
 */
function containsNoEmpty(arrays) {
    return !containsEmpty(arrays);
}
module.exports.containsNoEmpty = containsNoEmpty;


function removeEnd(str, endStr) {
    if (stringUtil.isEmpty(str)||stringUtil.isEmpty(endStr)) {
        return str;
    }
    if (str.endsWith(endStr))
        return str.substring(0, str.length - 1);
    else
        return str;
}
module.exports.removeEnd = removeEnd;


