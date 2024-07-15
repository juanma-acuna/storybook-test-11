import { jsx } from 'react/jsx-runtime';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".button {\n  cursor: pointer;\n}";
styleInject(css_248z$1);

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (arg) {
					classes = appendClass(classes, parseValue(arg));
				}
			}

			return classes;
		}

		function parseValue (arg) {
			if (typeof arg === 'string' || typeof arg === 'number') {
				return arg;
			}

			if (typeof arg !== 'object') {
				return '';
			}

			if (Array.isArray(arg)) {
				return classNames.apply(null, arg);
			}

			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
				return arg.toString();
			}

			var classes = '';

			for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key]) {
					classes = appendClass(classes, key);
				}
			}

			return classes;
		}

		function appendClass (value, newClass) {
			if (!newClass) {
				return value;
			}
		
			if (value) {
				return value + ' ' + newClass;
			}
		
			return value + newClass;
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

const Button = ({ label, backgroundColor = '#0F8ADE', color = '#FFFFFF', size = 'md', onClick, className, }) => {
    let scale = 1;
    if (size === 'sm') {
        scale = 0.7;
    }
    else if (size === 'lg') {
        scale = 1.5;
    }
    const style = {
        backgroundColor,
        color,
        padding: `${scale * 0.8}rem ${scale * 1.2}rem`,
        fontSize: `${scale * 1}rem`,
        border: 'none',
        borderRadius: '12px',
    };
    return (jsx("button", { onClick: onClick, style: style, className: classNames('button', className), children: label }));
};

var css_248z = ".title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  font-size: 2em;\n  color: #333;\n  margin-bottom: 0.25em;\n  border-radius: 30px;\n  background-color: violet;\n  color: #5e5e5e;\n}\n\n.extra {\n  background-color: darkblue;\n  color: white;\n  font-weight: 500;\n}\n";
styleInject(css_248z);

const Title = ({ label, className }) => {
    return jsx("h1", { className: classNames('title', className), children: label });
};

export { Button, Title };
//# sourceMappingURL=index.esm.js.map
