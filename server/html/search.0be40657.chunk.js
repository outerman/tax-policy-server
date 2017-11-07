webpackJsonp([0],{

/***/ 1528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mkMetaEngine = __webpack_require__(254);

var _index = __webpack_require__(583);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C = (_dec = (0, _mkMetaEngine.wrapper)(_index2.default), _dec(_class = function (_Component) {
	(0, _inherits3.default)(C, _Component);

	function C() {
		(0, _classCallCheck3.default)(this, C);
		return (0, _possibleConstructorReturn3.default)(this, (C.__proto__ || (0, _getPrototypeOf2.default)(C)).apply(this, arguments));
	}

	(0, _createClass3.default)(C, [{
		key: 'render',
		value: function render() {
			return this.props.monkeyKing((0, _extends3.default)({}, this.props, { path: 'root' }));
		}
	}]);
	return C;
}(_react.Component)) || _class);
exports.default = C;
module.exports = exports['default'];

/***/ }),

/***/ 1529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(581);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(582);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.default = creator;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mkMetaEngine = __webpack_require__(254);

var _config = __webpack_require__(579);

var _config2 = _interopRequireDefault(_config);

var _data = __webpack_require__(580);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var action = function action(option) {
    var _this = this;

    (0, _classCallCheck3.default)(this, action);

    this.onInit = function (_ref) {
        var component = _ref.component,
            injections = _ref.injections;

        _this.component = component;
        _this.injections = injections;
        injections.reduce('init');
        var pagination = _this.metaAction.gf('data.pagination').toJS();
        //        this.load(pagination)
    };

    this.load = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(key, currentPage, pageSize) {
            var ret, response;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            ret = {
                                "q": key,
                                "size": pageSize,
                                "from": (currentPage - 1) * pageSize
                            };
                            _context.next = 3;
                            return _this.webapi.search.query(ret);

                        case 3:
                            response = _context.sent;

                            if (response.value.hits.length) {
                                _context.next = 7;
                                break;
                            }

                            _this.metaAction.toast('error', '暂无结果');
                            return _context.abrupt('return');

                        case 7:
                            _this.injections.reduce('load', response);

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        return function (_x, _x2, _x3) {
            return _ref2.apply(this, arguments);
        };
    }();

    this.handleChange = function (key) {
        return function (e) {
            if (key == 'searchKey') {
                _this.injections.reduce('changeSearch', key, e.target.value);
            }
        };
    };

    this.handleSearch = function (key) {
        return function (e) {
            if (!e) {
                _this.metaAction.toast('error', '请输入内容进行操作');
                return;
            }

            if (key == 'searchKey') {
                _this.load(e, 1, _data.pageSize);
            }
        };
    };

    this.pageChanged = function (current) {
        _this.injections.reduce('changeSearch', 'page', current);

        var key = _this.metaAction.gf('data.searchKey');
        _this.load(key, current, _data.pageSize);
    };

    this.getLayout = function () {
        var hits = _this.metaAction.gf('data.hits');
        if (!hits || hits.size == 0) return;

        return hits.map(function (o, index) {
            return _this.getSingleLayout(index, o.get('id'));
        }).toJS();
    };

    this.getSingleLayout = function (index, id) {
        return {
            i: id + '',
            x: index % 4 * 3,
            y: Math.floor(index / 4) * 4,
            w: 3,
            h: 4
        };
    };

    this.metaAction = option.metaAction;
    this.config = _config2.default.current;
    this.webapi = this.config.webapi;
};

function creator(option) {
    var metaAction = new _mkMetaEngine.action(option),
        o = new action((0, _extends3.default)({}, option, { metaAction: metaAction })),
        ret = (0, _extends3.default)({}, metaAction, o);

    metaAction.config({ metaHandlers: ret });

    return ret;
}
module.exports = exports['default'];

/***/ }),

/***/ 1530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.default = creator;

var _immutable = __webpack_require__(167);

var _mkMetaEngine = __webpack_require__(254);

var _config = __webpack_require__(579);

var _config2 = _interopRequireDefault(_config);

var _data = __webpack_require__(580);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer(option) {
    var _this = this;

    (0, _classCallCheck3.default)(this, reducer);

    this.init = function (state, option) {
        var initState = (0, _data.getInitState)();
        return _this.metaReducer.init(state, initState);
    };

    this.load = function (state, _ref) {
        var value = _ref.value;

        var allInfo = [],
            pagination = {
            current: _this.metaReducer.gf(state, 'data.page') || 1,
            total: value.total,
            pageSize: _data.pageSize
        };
        value.hits.map(function (o) {
            if (!o || !o.highlight) {
                return;
            }
            allInfo.push({
                __html: o.highlight.content
            });
        });

        state = _this.metaReducer.sf(state, 'data.hits', (0, _immutable.fromJS)(value.hits));
        state = _this.metaReducer.sf(state, 'data.allInfo', (0, _immutable.fromJS)(allInfo));
        state = _this.metaReducer.sf(state, 'data.pagination', (0, _immutable.fromJS)(pagination));
        return state;
    };

    this.changeSearch = function (state, key, value) {
        state = _this.metaReducer.sf(state, 'data.' + key, value);
        return state;
    };

    this.metaReducer = option.metaReducer;
    this.config = _config2.default.current;
};

function creator(option) {
    var metaReducer = new _mkMetaEngine.reducer(option),
        o = new reducer((0, _extends3.default)({}, option, { metaReducer: metaReducer }));

    return (0, _extends3.default)({}, metaReducer, o);
}
module.exports = exports['default'];

/***/ })

});