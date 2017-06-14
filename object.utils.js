/**
 * Created by Tristan on 17/4/21.
 */

/**
 * 判断对象是不是为空
 * @param obj
 * @returns {boolean}
 */
function isNull(obj) {
    let t;
    for (t in obj)
        return !1;
    return !0
}

module.exports.isNull = isNull;

/**
 * @判断对象是不是空
 * @param obj
 * @returns {boolean}
 */
function notNull(obj) {
    return !isNull(obj);
}
module.exports.notNull = notNull;


/**
 * 验证某些参数是不是为空，如果为空则会抛错，错误的message就是参数名称
 * @param {object}object
 * @param {Array<string>}params object必须要有的参数名称
 * @returns {Array} 返回为空的参数
 */
function checkProperties(object, ...params) {
    let res = [];
    for (let i = 0; i < params.length; i++) {
        let param = params[i];
        let paramss = param.split('.');
        let obj = object;
        for (let j = 0; j < paramss.length; j++) {
            obj = obj[paramss[j]];
            if (isNull(obj)) {
                res[res.length] = param;
            }
        }
    }
    return res;
}
module.exports.checkProperties = checkProperties;