/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* .App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #09d3ac;
} */


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./App.css */ "./src/App.css");
const Greet_1 = __webpack_require__(/*! ./components/Greet */ "./src/components/Greet.tsx");
const Welcome_1 = __webpack_require__(/*! ./components/Welcome */ "./src/components/Welcome.tsx");
const Message_1 = __webpack_require__(/*! ./components/Message */ "./src/components/Message.tsx");
const Hello_1 = __webpack_require__(/*! ./components/Hello */ "./src/components/Hello.tsx");
const FunctionClick_1 = __webpack_require__(/*! ./components/FunctionClick */ "./src/components/FunctionClick.tsx");
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false
        };
    }
    componentDidMount() {
    }
    render() {
        const { data, isLoading } = this.state;
        if (isLoading) {
            return React.createElement("p", null, " Loading");
        }
        return (React.createElement("div", { className: "App" },
            data.map(item => {
                return React.createElement("div", null, item.name);
            }),
            React.createElement(Greet_1.default, { name: "Bruce" },
                React.createElement("p", null, "This is children props")),
            React.createElement(Greet_1.default, { name: "Diana" }),
            React.createElement(Greet_1.default, { name: "Clark" },
                React.createElement("button", null, "Action")),
            React.createElement(Welcome_1.default, { name: "Bruce" }),
            React.createElement(Welcome_1.default, { name: "Diana" }),
            React.createElement(Welcome_1.default, { name: "Clark" }),
            React.createElement(Message_1.default, null),
            React.createElement(FunctionClick_1.default, null),
            React.createElement(Hello_1.Hello, { compiler: "TypeScript", framework: "React" })));
    }
}
exports.default = App;


/***/ }),

/***/ "./src/components/FunctionClick.tsx":
/*!******************************************!*\
  !*** ./src/components/FunctionClick.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function FunctionClick() {
    function clickHandler() {
        console.log("button click");
    }
    return (React.createElement("div", null,
        React.createElement("button", { onClick: clickHandler }, "Click")));
}
exports.default = FunctionClick;


/***/ }),

/***/ "./src/components/Greet.tsx":
/*!**********************************!*\
  !*** ./src/components/Greet.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Greet = (props) => {
    console.log(props);
    return (React.createElement("div", null,
        React.createElement("h1", null,
            " Hello ",
            props.name,
            " "),
        props.children));
};
exports.default = Greet;


/***/ }),

/***/ "./src/components/Hello.tsx":
/*!**********************************!*\
  !*** ./src/components/Hello.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.Hello = (props) => React.createElement("h1", null,
    "Hello from ",
    props.compiler,
    " and ",
    props.framework,
    "!");


/***/ }),

/***/ "./src/components/Message.tsx":
/*!************************************!*\
  !*** ./src/components/Message.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Welcome visitor"
        };
    }
    changeMessage() {
        this.setState({
            message: "Thank you for subscribing"
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null,
                this.state.message,
                " "),
            React.createElement("button", { onClick: () => this.changeMessage() }, "Subscribe")));
    }
}
exports.default = Message;


/***/ }),

/***/ "./src/components/Welcome.tsx":
/*!************************************!*\
  !*** ./src/components/Welcome.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class Welcome extends React.Component {
    render() {
        return React.createElement("h1", null,
            "Welcome ",
            this.props.name,
            " ");
    }
}
exports.default = Welcome;


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
} */


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
__webpack_require__(/*! ./index.css */ "./src/index.css");
const App_1 = __webpack_require__(/*! ./App */ "./src/App.tsx");
ReactDOM.render(React.createElement(App_1.default, null), document.getElementById('root'));
console.log('hello webpack');


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRnVuY3Rpb25DbGljay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR3JlZXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlbGxvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XZWxjb21lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7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LElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxPQUFPLEVBQUUsaUJBQWlCO1NBQzNCLENBQUM7SUFDSixDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDWixPQUFPLEVBQUUsMkJBQTJCO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxDQUNMO1lBQ0U7Z0JBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO29CQUFPO1lBQzlCLGdDQUFRLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLGdCQUFvQixDQUMzRCxDQUNQLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pDdkIsd0RBQThCO0FBTTlCLE1BQU0sT0FBUSxTQUFRLEtBQUssQ0FBQyxTQUFnQjtJQUM1QyxNQUFNO1FBRUYsT0FBTzs7WUFBYSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Z0JBQU87SUFDOUMsQ0FBQztDQUNBO0FBRUQsa0JBQWUsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7QUNidkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNaRCx3REFBK0I7QUFDL0IsbUVBQXNDO0FBQ3RDLDBEQUFxQjtBQUNyQixnRUFBdUI7QUFHdkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxhQUFHLE9BQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFNMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDWjdCLHVCOzs7Ozs7Ozs7OztBQ0FBLDBCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzeFwiKTtcbiIsIi8qIC5BcHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5BcHAtbG9nbyB7XG4gIGhlaWdodDogNDB2bWluO1xufVxuXG4uQXBwLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJjMzQ7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAydm1pbik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLkFwcC1saW5rIHtcbiAgY29sb3I6ICMwOWQzYWM7XG59ICovXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vaW1wb3J0ICogYXMgbG9nbyBmcm9tIFwiLi9sb2dvLnN2Z1wiO1xuaW1wb3J0IFwiLi9BcHAuY3NzXCI7XG5pbXBvcnQgR3JlZXQgZnJvbSBcIi4vY29tcG9uZW50cy9HcmVldFwiO1xuaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4vY29tcG9uZW50cy9XZWxjb21lXCI7XG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi9jb21wb25lbnRzL01lc3NhZ2VcIjtcbmltcG9ydCB7IEhlbGxvIH0gZnJvbSBcIi4vY29tcG9uZW50cy9IZWxsb1wiO1xuaW1wb3J0IEZ1bmN0aW9uQ2xpY2sgZnJvbSBcIi4vY29tcG9uZW50cy9GdW5jdGlvbkNsaWNrXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGRhdGE6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9W107XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogW10sXG4gICAgICBpc0xvYWRpbmc6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIHRoaXMuTGlzdGVuaW5nU3RhdGVDaGFuZ2VkRXZlbnQoeyBpc0xvYWRpbmc6IHRydWUgfSk7XG4gICAgLy8gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvc2FtcGxlXCIpXG4gICAgLy8gICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLy8gICAudGhlbihkYXRhID0+IHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlLCBkYXRhIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPHA+IExvYWRpbmc8L3A+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICB7ZGF0YS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxkaXY+e2l0ZW0ubmFtZX08L2Rpdj47XG4gICAgICAgIH0pfVxuICAgICAgICA8R3JlZXQgbmFtZT1cIkJydWNlXCI+XG4gICAgICAgICAgPHA+VGhpcyBpcyBjaGlsZHJlbiBwcm9wczwvcD5cbiAgICAgICAgPC9HcmVldD5cbiAgICAgICAgPEdyZWV0IG5hbWU9XCJEaWFuYVwiIC8+XG4gICAgICAgIDxHcmVldCBuYW1lPVwiQ2xhcmtcIj5cbiAgICAgICAgICA8YnV0dG9uPkFjdGlvbjwvYnV0dG9uPlxuICAgICAgICA8L0dyZWV0PlxuICAgICAgICA8V2VsY29tZSBuYW1lPVwiQnJ1Y2VcIiAvPlxuICAgICAgICA8V2VsY29tZSBuYW1lPVwiRGlhbmFcIiAvPlxuICAgICAgICA8V2VsY29tZSBuYW1lPVwiQ2xhcmtcIiAvPlxuICAgICAgICA8TWVzc2FnZT48L01lc3NhZ2U+XG4gICAgICAgIDxGdW5jdGlvbkNsaWNrPjwvRnVuY3Rpb25DbGljaz5cbiAgICAgICAgPEhlbGxvIGNvbXBpbGVyPVwiVHlwZVNjcmlwdFwiIGZyYW1ld29yaz1cIlJlYWN0XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBGdW5jdGlvbkNsaWNrKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnV0dG9uIGNsaWNrXCIpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xpY2tIYW5kbGVyfT5DbGljazwvYnV0dG9uPiAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9uQ2xpY2tcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIG5hbWU/OiBhbnksXHJcbiAgICBjaGlsZHJlbj86YW55XHJcbiAgfVxyXG5cclxuXHJcbiBjb25zdCBHcmVldD0ocHJvcHM6UHJvcHMpPT57XHJcbiAgICAgY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICA8aDE+IEhlbGxvIHtwcm9wcy5uYW1lfSA8L2gxPlxyXG4gICAgICAgeyBwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmVldDsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGVsbG9Qcm9wcyB7IGNvbXBpbGVyOiBzdHJpbmc7IGZyYW1ld29yazogc3RyaW5nOyB9XHJcblxyXG5leHBvcnQgY29uc3QgSGVsbG8gPSAocHJvcHM6IEhlbGxvUHJvcHMpID0+IDxoMT5IZWxsbyBmcm9tIHtwcm9wcy5jb21waWxlcn0gYW5kIHtwcm9wcy5mcmFtZXdvcmt9ITwvaDE+OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWVzc2FnZTogXCJXZWxjb21lIHZpc2l0b3JcIlxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNoYW5nZU1lc3NhZ2UoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWVzc2FnZTogXCJUaGFuayB5b3UgZm9yIHN1YnNjcmliaW5nXCJcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+e3RoaXMuc3RhdGUubWVzc2FnZX0gPC9oMT5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuY2hhbmdlTWVzc2FnZSgpfT5TdWJzY3JpYmU8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbmFtZTogYW55XHJcbiAgfVxyXG5cclxuY2xhc3MgV2VsY29tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz57XHJcbnJlbmRlcigpXHJcbntcclxuICAgIHJldHVybiA8aDE+V2VsY29tZSB7dGhpcy5wcm9wcy5uYW1lfSA8L2gxPlxyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlbGNvbWU7IiwiLyogYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBcIlJvYm90b1wiLCBcIk94eWdlblwiLFxuICAgIFwiVWJ1bnR1XCIsIFwiQ2FudGFyZWxsXCIsIFwiRmlyYSBTYW5zXCIsIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmNvZGUge1xuICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLFxuICAgIG1vbm9zcGFjZTtcbn0gKi9cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG4vL2ltcG9ydCAqIGFzIHNlcnZpY2VXb3JrZXIgZnJvbSAnLi9zZXJ2aWNlV29ya2VyJztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG4vLyBJZiB5b3Ugd2FudCB5b3VyIGFwcCB0byB3b3JrIG9mZmxpbmUgYW5kIGxvYWQgZmFzdGVyLCB5b3UgY2FuIGNoYW5nZVxuLy8gdW5yZWdpc3RlcigpIHRvIHJlZ2lzdGVyKCkgYmVsb3cuIE5vdGUgdGhpcyBjb21lcyB3aXRoIHNvbWUgcGl0ZmFsbHMuXG4vLyBMZWFybiBtb3JlIGFib3V0IHNlcnZpY2Ugd29ya2VyczogaHR0cHM6Ly9iaXQubHkvQ1JBLVBXQVxuLy9zZXJ2aWNlV29ya2VyLnVucmVnaXN0ZXIoKTtcbmNvbnNvbGUubG9nKCdoZWxsbyB3ZWJwYWNrJyk7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyJdLCJzb3VyY2VSb290IjoiIn0=