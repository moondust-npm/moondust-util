/**
 * Created by Tristan on 17/4/21.
 */

function ArrayInclude(value, arrs) {
    return new Promise(resolve => {
        arrs.forEach(va => {
            if (va === value) {
                resolve(true);
            }
        })
        resolve(false)
    })
}
module.exports.include = ArrayInclude
