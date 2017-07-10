'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/darwin/Desktop/25-PortfolioWebsite/kohterai.github.io/components/ProjectThumbnail.js';


var ProjectThumbnail = function ProjectThumbnail(props) {
    return _react2.default.createElement('div', {
        'data-jsx': 827339740,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement('img', { src: props.image, 'data-jsx': 827339740,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }), _react2.default.createElement(_link2.default, { prefetch: true, href: props.link, __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('a', {
        'data-jsx': 827339740,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, props.title)), _react2.default.createElement(_style2.default, {
        styleId: 827339740,
        css: 'img{width:300px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvamVjdFRodW1ibmFpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNMkIsQUFHNkIsYUFBYSIsImZpbGUiOiJjb21wb25lbnRzL1Byb2plY3RUaHVtYm5haWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Rhcndpbi9EZXNrdG9wLzI1LVBvcnRmb2xpb1dlYnNpdGUva29odGVyYWkuZ2l0aHViLmlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBQcm9qZWN0VGh1bWJuYWlsID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSAvPlxuICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPXtwcm9wcy5saW5rfT48YT57cHJvcHMudGl0bGV9PC9hPjwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RUaHVtYm5haWxcbiJdfQ== */\n/*@ sourceURL=components/ProjectThumbnail.js */'
    }));
};

exports.default = ProjectThumbnail;