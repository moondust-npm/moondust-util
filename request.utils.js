/**
 * Created by Tristan on 17/4/27.
 */

const stringUtil = require('./string.utils');

/**
 * 验证某些参数是不是为空，如果为空则会抛错，错误的message就是参数名称
 * @param {object}object
 * @param {Array<string>}params object必须要有的参数名称
 */
function checkProperties(object, ...params) {
    return new Promise((resolve, reject) => {
        params.forEach((param, index) => {
            if (stringUtil.isEmpty(object[param])) {
                reject(new Error(param));
            }
            if (index === params.length - 1) {
                resolve()
            }
        })
    })
}
module.exports.checkProperties = checkProperties;

/**
 *
 * @param {object}object
 * @param {Array<{name:string,format:function}>}params
 */
function checkPropertiesAndFormat(object,...params) {




}