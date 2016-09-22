'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Shern
*/
var tinify = require('tinify');

var fs = require('fs');

var Tiny = function () {
    function Tiny(option) {
        (0, _classCallCheck3.default)(this, Tiny);

        this.pathFrom = option && option.pathFrom || '';
        this.pathTo = option && option.pathTo || '';
        tinify.key = option && option.key || '';
    }

    //读取目录函数


    (0, _createClass3.default)(Tiny, [{
        key: 'readdir',
        value: function readdir(dir) {
            return new _promise2.default(function (resolve, reject) {
                fs.readdir(dir, function (err, data) {
                    if (err) reject(error);
                    resolve(data);
                });
            });
        }

        //异步执行压缩

    }, {
        key: 'goTiny',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(file) {
                var time1, source, time2;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                time1 = new Date().getTime();
                                _context.next = 3;
                                return tinify.fromFile(this.pathFrom + '/' + file);

                            case 3:
                                source = _context.sent;
                                _context.next = 6;
                                return source.toFile(this.pathTo + '/' + file, function (err) {
                                    return console.log(err);
                                });

                            case 6:
                                time2 = new Date().getTime();
                                return _context.abrupt('return', time2 - time1);

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function goTiny(_x) {
                return _ref.apply(this, arguments);
            }

            return goTiny;
        }()
        //异步读取目录下图片

    }, {
        key: 'ls',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
                var files, reg;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.readdir(this.pathFrom);

                            case 2:
                                files = _context2.sent;
                                reg = /(\.jpg)|(\.png)$/;
                                return _context2.abrupt('return', files.filter(function (file) {
                                    return reg.test(file);
                                }));

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function ls() {
                return _ref2.apply(this, arguments);
            }

            return ls;
        }()
        // 执行

    }, {
        key: 'run',
        value: function run() {
            var _this = this;

            console.log(1);
            this.ls().then(function (v) {
                var array = v || [];
                array.map(function (file) {
                    // console.log(tiny.toString())
                    return _this.goTiny(file).then(function (result) {
                        console.log('完成压缩，耗时' + result + '毫秒');
                    });
                });
            });
        }
    }]);
    return Tiny;
}();

module.exports = Tiny;
