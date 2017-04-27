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