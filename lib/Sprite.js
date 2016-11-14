'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Shern
*/

var fs = require('fs');
var path = require('path');

var Sprite = function () {
    function Sprite(option) {
        (0, _classCallCheck3.default)(this, Sprite);
    }

    (0, _createClass3.default)(Sprite, [{
        key: 'checkFileSize',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(file) {
                var s;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fs.statSync(file);

                            case 2:
                                s = _context.sent;

                                if (!(s.size <= 40960)) {
                                    _context.next = 7;
                                    break;
                                }

                                return _context.abrupt('return', true);

                            case 7:
                                return _context.abrupt('return', false);

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function checkFileSize(_x) {
                return _ref.apply(this, arguments);
            }

            return checkFileSize;
        }()
    }, {
        key: 'readFile',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(file) {
                var t;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return fs.readFileSync(file, 'utf-8');

                            case 2:
                                t = _context2.sent;

                                console.log(typeof t === 'undefined' ? 'undefined' : (0, _typeof3.default)(t));

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function readFile(_x2) {
                return _ref2.apply(this, arguments);
            }

            return readFile;
        }()
    }]);
    return Sprite;
}();

new Sprite().readFile(path.join(process.cwd(), './src/Tiny.js'));
