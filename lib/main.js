'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Init = function () {
    function Init() {
        _classCallCheck(this, Init);

        this.label = document.getElementById('label');
        this.users = [];
        this.element = document.getElementsByClassName('users')[0];
    }

    _createClass(Init, [{
        key: 'populateList',
        value: function populateList() {

            this.users = [{
                name: 'Guilherme',
                age: 22
            }, {
                name: 'Auro',
                age: 22
            }, {
                name: 'Teste',
                age: 22
            }];
        }
    }, {
        key: 'updateView',
        value: function updateView() {

            var that = this;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = that.users[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var user = _step.value;


                    var elementChild = that.element.cloneNode(true);
                    elementChild.innerHTML = user.name;
                    that.element.appendChild(elementChild);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return Init;
}();

var init = new Init();
init.populateList();
init.updateView();