"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html, body {\n    font-family: 'Fira Code', sans-serif;\n    font-size: 10px;\n  }\n\n  @media(max-width: 834px) {\n    html, body {\n      font-size: 7px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Base = (0, _styledComponents.createGlobalStyle)(_templateObject());
var _default = Base;
exports.default = _default;