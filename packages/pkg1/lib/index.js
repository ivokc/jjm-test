"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _monorepo() {
  const data = _interopRequireDefault(require("@ivokc/monorepo2"));
  _monorepo = function _monorepo() {
    return data;
  };
  return data;
}
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// pkg1/src/index.ts

function fun2() {
  (0, _monorepo().default)();
  console.log('I am package 1');
  console.log('hello world 1');
}
var _default = exports.default = fun2;