/**
 * Created by Tristan on 17/4/21.
 */
const fs = require('fs');
const rd = require('rd');
const path = require('path');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');

/**
 * 创建文件夹树形结构
 * @param {string} dirname 文件夹目录
 * @returns {Promise<boolean>}
 */
function mkdirs(dirname) {
    return new Promise((resolve, reject) => {
        fs.exists(dirname, function (exists) {
            if (exists) {
                resolve(true);
            } else {
                mkdirp(dirname, (err) => {
                    if (err) {
                        reject(err);
                    }
                    resolve()
                })
            }
        });
    });
}
module.exports.mkdirs = mkdirs;

/**
 * 检测文件是否存在
 * @param {string} file_path 文件地址
 * @returns {Promise<boolean>}
 */
function exist(file_path) {
    return new Promise((resolve) => {
        fs.exist(file_path, (exist) => {
            resolve(exist);
        })
    })
}
module.exports.exist = exist;

/**
 * 判断路径是不是文件
 * @param {string} file_path
 * @returns {Promise<boolean>}
 */
function isFile(file_path) {
    return new Promise((resolve, reject) => {
        fs.stat(file_path, (err, stat) => {
            if (err) {
                reject(err);
            }
            if (stat.isFile()) {
                resolve(true)
            } else {
                resolve(false)
            }
        })
    })
}
module.exports.isFile = isFile;

/**
 * 判断路径是不是文件夹
 * @param {string} file_path
 * @returns {Promise<boolean>}
 */
function isPath(file_path) {
    return new Promise((resolve, reject) => {
        fs.stat(file_path, (err, stat) => {
            if (err) {
                reject(err);
                return;
            }
            if (stat.isDirectory()) {
                resolve(true)
            } else {
                resolve(false)
            }
        })
    })
}
module.exports.isPath = isPath;

/**
 * 列出该文件夹下的文件和路径
 * @param {string} file_path
 * @returns {Promise<Array<string>>}
 */
function listFileAndPath(file_path) {
    return new Promise((resolve, reject) => {
        fs.readdir(file_path, (err, files) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(files);
        })
    });
}
module.exports.listFileAndPath = listFileAndPath;

/**
 * 列出该文件夹和子文件夹下的文件
 * @param {string} file_path
 * @param {function(file,stat,next)} middleWire
 * @returns {Promise<Array<string>>}
 */
function listAllFile(file_path, middleWire) {
    return new Promise((resolve, reject) => {
        let files = [];
        rd.each(file_path, function (f, s, next) {
            if (middleWire) {
                middleWire(f, s, next);
            } else {
                if (s.isFile()) files.push(f);
                next();
            }
        }, function (err) {
            if (err) {
                reject(err);
                return;
            }
            resolve(files)
        });
    });
}
module.exports.listAllFile = listAllFile;


/**
 * 文件拷贝
 * @param srcFile
 * @param distFile
 * @returns {Promise}
 */
function copyFile(srcFile, distFile) {
    return new Promise(resolve => {
        let rs = fs.createReadStream(srcFile);
        let ws = fs.createWriteStream(distFile);
        rs.pipe(ws);

        rs.on('end', function () {
            ws.end();
            resolve();
        });
    })
}
module.exports.copyFile = copyFile;


/**
 * 递归拷贝文件夹下的文件
 * @param {string}srcPath
 * @param {string}distPath
 * @returns {Promise<void>}
 */
function copyPath(srcPath, distPath) {
    return new Promise((resolve, reject) => {
        mkdirs(distPath).then(() => {
                srcPath = path.resolve(srcPath);
                distPath = path.resolve(distPath);
                listAllFile(srcPath).then((files) => {
                    files.forEach((f, index) => {
                        copyFile(f, f.replace(srcPath, distPath)).then(() => {
                                if (index === files.length - 1) resolve();
                            }
                        )
                    })
                }).catch(reject);
            }
        ).catch(reject)
    })
}
module.exports.copyPath = copyPath;


/**
 * 删除文件或者文件夹
 * @param {string}file_path
 * @returns {Promise<void>}
 */
function drop(file_path) {
    return new Promise((resolve, reject) => {
        rimraf(file_path, (err) => {
            if (err) reject(err);
            resolve();
        })
    })
}

module.exports.drop=drop;