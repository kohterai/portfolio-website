"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/darwin/Desktop/25-PortfolioWebsite/kohterai.github.io/components/Menubar.js";


var linkStyle = {
  marginRight: 15
};

var funnyStyle = {
  marginRight: 150
};

var Menubar = function Menubar() {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_link2.default, { href: "/about", __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement("a", { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Design")), _react2.default.createElement(_link2.default, { href: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement("a", { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "Cinematography")), _react2.default.createElement(_link2.default, { href: "/about", __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement("a", { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Photography")), _react2.default.createElement(_link2.default, { href: "/about", __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement("a", { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Research")));
};

exports.default = Menubar;