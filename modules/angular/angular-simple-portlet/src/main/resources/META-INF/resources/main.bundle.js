webpackJsonp(["main"],{

/***/ "../../../../../src/main/angular/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/main/angular/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/main/angular/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .box1 {\n    border: solid 1px #006699;\n    padding: 20px;\n    background: #f3f3f3;\n    border-radius: 5px;\n  }\n\n  .todos input.textfield {\n    width: 480px;\n    height: 36px;\n    margin-right: 20px;\n    font-size: 1.4em;\n    vertical-align: top;\n  }\n\n  .todos input.checkbox {\n    width: 20px;\n    height: 20px;\n  }\n\n  .todos .checked {\n    text-decoration: line-through;\n  }\n\n  .todos button {\n    height: 36px;\n    font-size: 1.1em;\n    vertical-align: top;\n    border: solid 1px #999;\n    border-radius: 2px;\n  }\n\n  .todos .delete-icon {\n    diplay: inline-block;\n    cursor: pointer;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/main/angular/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"todos\">\n\n  <div>\n    <form (submit)=\"addTodo($event)\">\n      <input [(ngModel)]=\"newTodo\" (keyup.enter)=\"newTodo=''\" class=\"textfield\" name=\"newTodo\" />\n      <button  type=\"submit\" [disabled]=\"newTodo===''\">Add Todo</button>  \n    </form>\n  </div>\n\n  <div [hidden]=\"newTodo\">\n    Type in a new todo...\n  </div>\n\n  <div [hidden]=\"!newTodo\">\n    <!-- Another two-way binding example -->\n    Typing: {{ newTodo }}\n  </div>\n\n  <ul>\n    <li *ngFor=\"let todo of todos; let i=index\">\n      <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"todo.completed\" />\n      <span [ngClass]=\"{'checked': todo.completed}\">{{ todo.newTodo }}</span>\n      <span (click)=\"deleteTodo(i)\" class=\"delete-icon\">[X]</span>\n    </li>\n  </ul>\n\n  <div class=\"mtop20\">\n      <button (click)=\"deleteSelectedTodos()\">Delete Selected</button>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/main/angular/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.newTodo = '';
        this.todos = [];
    }
    AppComponent.prototype.addTodo = function (event) {
        this.todoObj = {
            newTodo: this.newTodo,
            completed: false
        };
        this.todos.push(this.todoObj);
        this.newTodo = '';
        event.preventDefault();
    };
    AppComponent.prototype.deleteTodo = function (index) {
        this.todos.splice(index, 1);
    };
    AppComponent.prototype.deleteSelectedTodos = function () {
        //need ES5 to reverse loop in order to splice by index
        for (var i = (this.todos.length - 1); i > -1; i--) {
            if (this.todos[i].completed) {
                this.todos.splice(i, 1);
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'simple-portlet',
        template: __webpack_require__("../../../../../src/main/angular/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/main/angular/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/main/angular/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/main/angular/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/main/angular/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main/angular/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platformRef", function() { return platformRef; });
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/main/angular/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/main/angular/environments/environment.ts");




var platformRef = Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])();
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
function main() {
    console.log("Hello World from Simple Angular Portlet");
    return platformRef.bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
        .catch(function (err) { return console.error(err); });
}
// support async tag or hmr
switch (document.readyState) {
    case 'interactive':
    case 'complete':
        main();
        break;
    case 'loading':
    default:
        document.addEventListener('DOMContentLoaded', function () { return main(); });
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main/angular/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map