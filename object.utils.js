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