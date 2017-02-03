(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var angular2_universal_1 = __webpack_require__(4);
	var app_component_1 = __webpack_require__(7);
	var navmenu_component_1 = __webpack_require__(12);
	var home_component_1 = __webpack_require__(16);
	var astar_component_1 = __webpack_require__(18);
	//import { CounterComponent } from './components/counter/counter.component';
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        bootstrap: [app_component_1.AppComponent],
	        declarations: [
	            app_component_1.AppComponent,
	            navmenu_component_1.NavMenuComponent,
	            //CounterComponent,
	            astar_component_1.AstarComponent,
	            home_component_1.HomeComponent
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'home', pathMatch: 'full' },
	                { path: 'home', component: home_component_1.HomeComponent },
	                { path: 'astar', component: astar_component_1.AstarComponent },
	                //{ path: 'fetch-data', component: FetchDataComponent },
	                { path: '**', redirectTo: 'home' }
	            ])
	        ]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(8),
	        styles: [__webpack_require__(9)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(10);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(13),
	        styles: [__webpack_require__(14)]
	    })
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Pacman</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/home']\">\n                        <span class='glyphicon glyphicon-home'></span> Home\n                    </a>\n                </li>\n                <!--<li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/astar']\">\n                        <span class='glyphicon glyphicon-education'></span> A star\n                    </a>\n                </li>-->\n                <!--<li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/fetch-data']\">\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\n                    </a>\n                </li>-->\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(15);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	        this.currentCellStyle = "#3f7f00";
	        this.routeCellStyle = "#58b200";
	        this.defaultCellStyle = "whitesmoke";
	        this.lockCellStyle = "black";
	        this.currentPosition = [0, 0];
	        this.goodRoute = [];
	        this.checkedCells = [];
	        this.lockCells = [];
	        this.queuePosition = [];
	        this.row = 30;
	        this.col = 30;
	        this.rowMap = [];
	        this.colMap = [];
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	        this.colMap = new Array(this.col);
	        this.rowMap = new Array(this.row);
	        this.randomMap();
	    };
	    HomeComponent.prototype.setSourceTarget = function (x, y) {
	        console.log("X=" + x + " | Y=" + y);
	        if (this.isItemInArray(this.lockCells, [x, y])) {
	            return;
	        }
	        this.goodRoute = [];
	        this.checkedCells = [];
	        var xMax = this.rowMap.length;
	        var yMax = this.colMap.length;
	        this.enQueue(this.currentPosition[0], this.currentPosition[1], this.currentPosition);
	        do {
	            var pos = this.queuePosition.shift();
	            var xPos = pos[0];
	            var yPos = pos[1];
	            var previousPos = pos[2];
	            if (xPos < 0 || xPos >= xMax || yPos < 0 || yPos >= yMax || (xPos == previousPos[0] && yPos == previousPos[1])) {
	                continue;
	            }
	            if (xPos == x && yPos == y) {
	                while (previousPos != null) {
	                    this.goodRoute.push(pos);
	                    pos = pos[2];
	                    previousPos = pos[2];
	                }
	                this.queuePosition = [];
	                this.currentPosition[0] = x;
	                this.currentPosition[1] = y;
	                break;
	            }
	            this.enQueue(xPos, yPos, pos);
	        } while (this.queuePosition.length > 0);
	    };
	    HomeComponent.prototype.enQueue = function (x, y, previousPos) {
	        if (!this.isItemInArray(this.checkedCells, [x, y + 1]) && !this.isItemInArray(this.lockCells, [x, y + 1])) {
	            this.checkedCells.push([x, y + 1]);
	            this.queuePosition.push([x, y + 1, previousPos]);
	        }
	        if (!this.isItemInArray(this.checkedCells, [x, y - 1]) && !this.isItemInArray(this.lockCells, [x, y - 1])) {
	            this.checkedCells.push([x, y - 1]);
	            this.queuePosition.push([x, y - 1, previousPos]);
	        }
	        if (!this.isItemInArray(this.checkedCells, [x + 1, y]) && !this.isItemInArray(this.lockCells, [x + 1, y])) {
	            this.checkedCells.push([x + 1, y]);
	            this.queuePosition.push([x + 1, y, previousPos]);
	        }
	        if (!this.isItemInArray(this.checkedCells, [x - 1, y]) && !this.isItemInArray(this.lockCells, [x - 1, y])) {
	            this.checkedCells.push([x - 1, y]);
	            this.queuePosition.push([x - 1, y, previousPos]);
	        }
	    };
	    HomeComponent.prototype.styleCell = function (x, y) {
	        if (this.currentPosition[0] == x && this.currentPosition[1] == y) {
	            return this.currentCellStyle;
	        }
	        if (this.isItemInArray(this.goodRoute, [x, y])) {
	            return this.routeCellStyle;
	        }
	        return this.isItemInArray(this.lockCells, [x, y]) == true ? this.lockCellStyle : this.defaultCellStyle;
	    };
	    HomeComponent.prototype.randomMap = function () {
	        this.currentPosition = [0, 0];
	        this.goodRoute = [];
	        this.checkedCells = [];
	        this.lockCells = [];
	        var lockCell = (this.row * this.col) / 6;
	        for (var i = 0; i < lockCell; i++) {
	            var ranX = this.getRandomInt(1, this.row - 1);
	            var ranY = this.getRandomInt(1, this.col - 1);
	            this.lockCells.push([ranX, ranY]);
	        }
	    };
	    HomeComponent.prototype.getRandomInt = function (min, max) {
	        min = Math.ceil(min);
	        max = Math.floor(max);
	        return Math.floor(Math.random() * (max - min)) + min;
	    };
	    HomeComponent.prototype.isItemInArray = function (array, item) {
	        for (var i = 0; i < array.length; i++) {
	            if (array[i][0] == item[0] && array[i][1] == item[1]) {
	                return true;
	            }
	        }
	        return false;
	    };
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(17)
	    })
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<style type=\"text/css\">\r\n    .tableMap tr th{\r\n        width:20px;\r\n        height:20px;\r\n    }\r\n</style>\r\n<br /><br /><br />\r\n<button class=\"btn btn-primary\" (click)=\"randomMap()\">Load Map</button>\r\n<br /><br />\r\n<table class=\"tableMap table-bordered\">\r\n    <tr *ngFor=\"let row of rowMap; let r = index\">\r\n        <th *ngFor='let cal of colMap; let c = index' [style.background-color]=\"styleCell(r,c)\" (click)=\"setSourceTarget(r,c)\"></th>\r\n    </tr>\r\n</table>\r\n\r\n\r\n<!--<div *ngFor='let value of mapPac'>\r\n    {{ value }}width=\"20px\"\r\n</div>-->\r\n<!--<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\r\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\r\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\r\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\r\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\r\n</ul>-->\r\n"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var pacman_1 = __webpack_require__(19);
	var AstarComponent = (function () {
	    function AstarComponent() {
	    }
	    AstarComponent.prototype.ngOnInit = function () {
	        this.Pacman = new pacman_1.Pacman.PacmanRoute();
	        this.Pacman.Main();
	    };
	    AstarComponent.prototype.OnCellClick = function (cell) {
	        console.log("X=" + cell.X + " | Y=" + cell.Y);
	    };
	    AstarComponent.prototype.OnRandomMap = function () {
	        this.Pacman.RandomMap();
	    };
	    return AstarComponent;
	}());
	AstarComponent = __decorate([
	    core_1.Component({
	        selector: 'atar',
	        template: __webpack_require__(20)
	    })
	], AstarComponent);
	exports.AstarComponent = AstarComponent;


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	var Pacman;
	(function (Pacman) {
	    var eCellType;
	    (function (eCellType) {
	        eCellType[eCellType["DEFAULT"] = 0] = "DEFAULT";
	        eCellType[eCellType["CURRENT"] = 1] = "CURRENT";
	        eCellType[eCellType["LOCKED"] = 2] = "LOCKED";
	        eCellType[eCellType["ROUTED"] = 3] = "ROUTED";
	    })(eCellType = Pacman.eCellType || (Pacman.eCellType = {}));
	    var Cell = (function () {
	        function Cell() {
	            this.currentCellStyle = "#3f7f00";
	            this.routedCellStyle = "#58b200";
	            this.defaultCellStyle = "whitesmoke";
	            this.lockedCellStyle = "black";
	            this.Type = eCellType.DEFAULT;
	        }
	        Object.defineProperty(Cell.prototype, "Stype", {
	            get: function () {
	                switch (this.Type) {
	                    case eCellType.CURRENT:
	                        return this.currentCellStyle;
	                    case eCellType.LOCKED:
	                        return this.lockedCellStyle;
	                    case eCellType.ROUTED:
	                        return this.routedCellStyle;
	                    default:
	                        return this.defaultCellStyle;
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return Cell;
	    }());
	    Pacman.Cell = Cell;
	    var Node = (function () {
	        function Node(cell) {
	            this.Cell = cell;
	        }
	        return Node;
	    }());
	    Pacman.Node = Node;
	    var PacmanRoute = (function () {
	        function PacmanRoute() {
	            this.Map = [];
	        }
	        PacmanRoute.prototype.Main = function () {
	            console.log("start app with A* algorithm!");
	            this.Init();
	            return;
	        };
	        PacmanRoute.prototype.Init = function (row, col) {
	            this.col = col == null ? 15 : col;
	            this.row = row == null ? 30 : row;
	            ;
	            this.RandomMap();
	        };
	        PacmanRoute.prototype.RandomMap = function () {
	            this.Map = [];
	            var lockCells = [];
	            var lockCell = (this.row * this.col) / 6;
	            for (var i = 0; i < lockCell; i++) {
	                var ranX = this.getRandomInt(1, this.row - 1);
	                var ranY = this.getRandomInt(1, this.col - 1);
	                lockCells.push([ranX, ranY]);
	            }
	            for (var r = 0; r < this.row; r++) {
	                var rowCells = [];
	                for (var c = 0; c < this.col; c++) {
	                    var cell = new Cell();
	                    cell.X = c;
	                    cell.Y = r;
	                    if (this.isItemInArray(lockCells, [cell.X, cell.Y])) {
	                        cell.Type = eCellType.LOCKED;
	                    }
	                    rowCells.push(cell);
	                }
	                this.Map.push(rowCells);
	            }
	            this.CurrentCell = this.findCell(0, 0);
	            this.CurrentCell.Type = eCellType.CURRENT;
	        };
	        PacmanRoute.prototype.FindRoute = function (cellTarget) {
	            this.openNodes = [];
	            this.closeNodes = [];
	            var currentNode = new Node(this.CurrentCell);
	            currentNode.g = 0;
	            currentNode.h = this.distance(this.CurrentCell, cellTarget);
	            currentNode.f = currentNode.g + currentNode.h;
	            this.openNodes.push(currentNode);
	            while (this.openNodes.length != 0) {
	                var currentIndex = 0;
	                var current = this.openNodes[currentIndex];
	                for (var i = 0; i < this.openNodes.length; i++) {
	                    if (current.f < this.openNodes[i].f) {
	                        current = this.openNodes[i];
	                        currentIndex = i;
	                    }
	                }
	                //remove item in open queue
	                this.openNodes.slice(currentIndex, 1);
	                this.closeNodes.push(current);
	                if (current.Cell.X == cellTarget.X && current.Cell.Y == cellTarget.Y) {
	                    break;
	                }
	                else {
	                }
	            }
	        };
	        PacmanRoute.prototype.enQueue = function (node, cellTarget) {
	            var xCoordinates = [1, 0, -1, 0];
	            var yCoordinates = [0, 1, 0, -1];
	            for (var i = 0; i < 4; i++) {
	                var x = node.Cell.X + xCoordinates[i];
	                var y = node.Cell.Y + yCoordinates[i];
	                if (x < 0 || x >= this.col || y < 0 || y >= this.row) {
	                    continue;
	                }
	                var nextCell = this.findCell(x, y);
	                if (nextCell.Type == eCellType.LOCKED) {
	                    continue;
	                }
	                var newNode = new Node(nextCell);
	                newNode.PreviousNode = node;
	                newNode.g = this.distance(this.CurrentCell, nextCell);
	                newNode.h = this.distance(nextCell, cellTarget);
	                newNode.f = newNode.g + newNode.h;
	                this.openNodes.push(newNode);
	            }
	        };
	        PacmanRoute.prototype.distance = function (source, target) {
	            return Math.abs(source.X - target.X) + Math.abs(source.Y - target.Y);
	        };
	        PacmanRoute.prototype.findCell = function (x, y) {
	            return this.Map[x][y];
	        };
	        PacmanRoute.prototype.getRandomInt = function (min, max) {
	            min = Math.ceil(min);
	            max = Math.floor(max);
	            return Math.floor(Math.random() * (max - min)) + min;
	        };
	        PacmanRoute.prototype.isItemInArray = function (array, item) {
	            for (var i = 0; i < array.length; i++) {
	                if (array[i][0] == item[0] && array[i][1] == item[1]) {
	                    return true;
	                }
	            }
	            return false;
	        };
	        return PacmanRoute;
	    }());
	    Pacman.PacmanRoute = PacmanRoute;
	})(Pacman = exports.Pacman || (exports.Pacman = {}));


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<style type=\"text/css\">\r\n    .tableMap tr th{\r\n        width:20px;\r\n        height:20px;\r\n    }\r\n</style>\r\n<br /><br /><br />\r\n<button class=\"btn btn-primary\" (click)=\"OnRandomMap()\">Load Map</button>\r\n<br /><br />\r\n<table class=\"tableMap table-bordered\">\r\n    <tr *ngFor=\"let colCell of Pacman.Map; let r = index\">\r\n        <th *ngFor='let cell of colCell; let c = index' (click)=\"OnCellClick(cell)\" [style.background-color]=\"cell.Stype\"></th>\r\n        <!--<th>{{r}}</th>-->\r\n    </tr>\r\n</table>\r\n\r\n<br /><br />\r\n<button class=\"btn btn-primary\" (click)=\"test()\">Test</button>\r\n\r\n<!--<div *ngFor='let value of mapPac'>\r\n    {{ value }}width=\"20px\"\r\n</div>-->\r\n<!--<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\r\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\r\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\r\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\r\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\r\n</ul>-->\r\n"

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODRlZDg0NTllNWVkMWVjMDdjMmQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZjY0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hc3Rhci9hc3Rhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9wYWNtYW4udHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FzdGFyL2FzdGFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSx3QkFBc0M7QUFDdEMsd0JBQWlCO0FBQ2pCLHFDQUErQztBQUMvQyxtREFBeUQ7QUFDekQsMkNBQTZDO0FBRTdDLHNCQUFjLEVBQUUsQ0FBQztBQUNqQixLQUFNLFFBQVEsR0FBRyx3Q0FBbUIsRUFBRSxDQUFDO0FBRXZDLG9CQUF5QixNQUFXO0tBQ2hDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1NBQy9CLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ2xDLElBQUksRUFBRSwyQkFBMkI7YUFDakMsVUFBVSxFQUFFO2lCQUNSLE9BQU8sRUFBRSxHQUFHO2lCQUNaLFVBQVUsRUFBRSxNQUFNLENBQUMsR0FBRztpQkFDdEIsU0FBUyxFQUFFLE1B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QyxDQUFDLENBQUM7YUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ3JELENBQUM7U0FFRCxFQUFFLENBQUMsQ0FBQyxDQUFVLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFVLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ3JELENBQUM7U0FFRCxFQUFFLENBQUMsQ0FBQyxDQUFVLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFVLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ3JELENBQUM7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QUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUM7aUJBQ2hCLENBQUM7YUFDTCxDQUFDO2FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNqQixDQUFDO1NBQ0wsa0JBQUM7S0FBRCxDQUFDO0tBN0lZLGtCQUFXLGNBNkl2QjtBQUNMLEVBQUMsRUEzTGdCLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQTJMdEI7Ozs7Ozs7QUMzTEQsb0VBQW1FLHVCQUF1Qix3QkFBd0IsU0FBUywrTkFBK04sNkRBQTZELGlIQUFpSCxHQUFHLG1MQUFtTCxTQUFTLDh6RCIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg0ZWQ4NDU5ZTVlZDFlYzA3YzJkIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBc3RhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hc3Rhci9hc3Rhci5jb21wb25lbnQnO1xuLy9pbXBvcnQgeyBDb3VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxuICAgICAgICAvL0NvdW50ZXJDb21wb25lbnQsXG4gICAgICAgIEFzdGFyQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2FzdGFyJywgY29tcG9uZW50OiBBc3RhckNvbXBvbmVudCB9LFxuICAgICAgICAgICAgLy97IHBhdGg6ICdmZXRjaC1kYXRhJywgY29tcG9uZW50OiBGZXRjaERhdGFDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH1cbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnPlxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tOSBib2R5LWNvbnRlbnQnPlxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduYXYtbWVudScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIE5hdk1lbnVDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nbWFpbi1uYXYnPlxcbiAgICA8ZGl2IGNsYXNzPSduYXZiYXIgbmF2YmFyLWludmVyc2UnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWhlYWRlcic+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSduYXZiYXItdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnIGRhdGEtdGFyZ2V0PScubmF2YmFyLWNvbGxhcHNlJz5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPSduYXZiYXItYnJhbmQnIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5QYWNtYW48L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NsZWFyZml4Jz48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XFxuICAgICAgICAgICAgPHVsIGNsYXNzPSduYXYgbmF2YmFyLW5hdic+XFxuICAgICAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24taG9tZSc+PC9zcGFuPiBIb21lXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDwhLS08bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9hc3RhciddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1lZHVjYXRpb24nPjwvc3Bhbj4gQSBzdGFyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvbGk+LS0+XFxuICAgICAgICAgICAgICAgIDwhLS08bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9mZXRjaC1kYXRhJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gRmV0Y2ggZGF0YVxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPi0tPlxcbiAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGkgLmdseXBoaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcbmxpLmxpbmstYWN0aXZlIGEsXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcbi5tYWluLW5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcbiAgICAubWFpbi1uYXYge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxuICAgIH1cXG4gICAgLm5hdmJhciB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcbiAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgdWwge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBhIHtcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaW1lck9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL1RpbWVyT2JzZXJ2YWJsZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjdXJyZW50Q2VsbFN0eWxlID0gXCIjM2Y3ZjAwXCI7XG4gICAgcm91dGVDZWxsU3R5bGUgPSBcIiM1OGIyMDBcIjtcbiAgICBkZWZhdWx0Q2VsbFN0eWxlID0gXCJ3aGl0ZXNtb2tlXCI7XG4gICAgbG9ja0NlbGxTdHlsZSA9IFwiYmxhY2tcIjtcblxuICAgIGN1cnJlbnRQb3NpdGlvbiA9IFswLCAwXTtcbiAgICBnb29kUm91dGUgPSBbXTtcbiAgICBjaGVja2VkQ2VsbHMgPSBbXTtcbiAgICBsb2NrQ2VsbHMgPSBbXTtcbiAgICBxdWV1ZVBvc2l0aW9uID0gW107XG5cbiAgICByb3cgPSAzMDtcbiAgICBjb2wgPSAzMDtcbiAgICByb3dNYXAgPSBbXTtcbiAgICBjb2xNYXAgPSBbXTtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbE1hcCA9IG5ldyBBcnJheSh0aGlzLmNvbCk7XG4gICAgICAgIHRoaXMucm93TWFwID0gbmV3IEFycmF5KHRoaXMucm93KTtcbiAgICAgICAgdGhpcy5yYW5kb21NYXAoKTtcbiAgICB9XG5cbiAgICBzZXRTb3VyY2VUYXJnZXQoeCwgeSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlg9XCIgKyB4ICsgXCIgfCBZPVwiICsgeSk7XG5cbiAgICAgICAgaWYgKDxib29sZWFuPnRoaXMuaXNJdGVtSW5BcnJheSh0aGlzLmxvY2tDZWxscywgW3gsIHldKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nb29kUm91dGUgPSBbXTtcbiAgICAgICAgdGhpcy5jaGVja2VkQ2VsbHMgPSBbXTtcblxuICAgICAgICB2YXIgeE1heCA9IHRoaXMucm93TWFwLmxlbmd0aDtcbiAgICAgICAgdmFyIHlNYXggPSB0aGlzLmNvbE1hcC5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5lblF1ZXVlKHRoaXMuY3VycmVudFBvc2l0aW9uWzBdLCB0aGlzLmN1cnJlbnRQb3NpdGlvblsxXSwgdGhpcy5jdXJyZW50UG9zaXRpb24pO1xuXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMucXVldWVQb3NpdGlvbi5zaGlmdCgpO1xyXG4gICAgICAgICAgICB2YXIgeFBvcyA9IHBvc1swXTtcclxuICAgICAgICAgICAgdmFyIHlQb3MgPSBwb3NbMV07XHJcbiAgICAgICAgICAgIHZhciBwcmV2aW91c1BvcyA9IHBvc1syXTtcclxuICAgICAgICAgICAgaWYgKHhQb3MgPCAwIHx8IHhQb3MgPj0geE1heCB8fCB5UG9zIDwgMCB8fCB5UG9zID49IHlNYXggfHwgKHhQb3MgPT0gcHJldmlvdXNQb3NbMF0gJiYgeVBvcyA9PSBwcmV2aW91c1Bvc1sxXSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoeFBvcyA9PSB4ICYmIHlQb3MgPT0geSkge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHByZXZpb3VzUG9zICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdvb2RSb3V0ZS5wdXNoKHBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gcG9zWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUG9zID0gcG9zWzJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucXVldWVQb3NpdGlvbiA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uWzBdID0geDtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvblsxXSA9IHk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5lblF1ZXVlKHhQb3MsIHlQb3MsIHBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0aGlzLnF1ZXVlUG9zaXRpb24ubGVuZ3RoID4gMCk7ICAgICAgXG4gICAgfVxuXG4gICAgZW5RdWV1ZSh4LCB5LCBwcmV2aW91c1Bvcykge1xuXG4gICAgICAgIGlmICghPGJvb2xlYW4+dGhpcy5pc0l0ZW1JbkFycmF5KHRoaXMuY2hlY2tlZENlbGxzLCBbeCwgeSArIDFdKSAmJiAhPGJvb2xlYW4+dGhpcy5pc0l0ZW1JbkFycmF5KHRoaXMubG9ja0NlbGxzLCBbeCwgeSArIDFdKSkge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkQ2VsbHMucHVzaChbeCwgeSArIDFdKTtcbiAgICAgICAgICAgIHRoaXMucXVldWVQb3NpdGlvbi5wdXNoKFt4LCB5ICsgMSwgcHJldmlvdXNQb3NdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghPGJvb2xlYW4+dGhpcy5pc0l0ZW1JbkFycmF5KHRoaXMuY2hlY2tlZENlbGxzLCBbeCwgeSAtIDFdKSAmJiAhPGJvb2xlYW4+dGhpcy5pc0l0ZW1JbkFycmF5KHRoaXMubG9ja0NlbGxzLCBbeCwgeSAtIDFdKSkge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkQ2VsbHMucHVzaChbeCwgeSAtIDFdKTtcbiAgICAgICAgICAgIHRoaXMucXVldWVQb3NpdGlvbi5wdXNoKFt4LCB5IC0gMSwgcHJldmlvdXNQb3NdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghPGJvb2xlYW4+dGhpcy5pc0l0ZW1JbkFycmF5KHRoaXMuY2hlY2tlZENlbGxzLCBbeCArIDEsIHldKSAmJiAhPGJvb2xlYW4+dGhpcy5pc0l0ZW1JbkFycmF5KHRoaXMubG9ja0NlbGxzLCBbeCArIDEsIHldKSkge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkQ2VsbHMucHVzaChbeCArIDEsIHldKTtcbiAgICAgICAgICAgIHRoaXMucXVldWVQb3NpdGlvbi5wdXNoKFt4ICsgMSwgeSwgcHJldmlvdXNQb3NdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghPGJvb2xlYW4+dGhpcy5pc0l0ZW1JbkFycmF5KHRoaXMuY2hlY2tlZENlbGxzLCBbeCAtIDEsIHldKSAmJiAhPGJvb2xlYW4+dGhpcy5pc0l0ZW1JbkFycmF5KHRoaXMubG9ja0NlbGxzLCBbeCAtIDEsIHldKSkge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkQ2VsbHMucHVzaChbeCAtIDEsIHldKTtcbiAgICAgICAgICAgIHRoaXMucXVldWVQb3NpdGlvbi5wdXNoKFt4IC0gMSwgeSwgcHJldmlvdXNQb3NdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0eWxlQ2VsbCh4LCB5KSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQb3NpdGlvblswXSA9PSB4ICYmIHRoaXMuY3VycmVudFBvc2l0aW9uWzFdID09IHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRDZWxsU3R5bGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoPGJvb2xlYW4+dGhpcy5pc0l0ZW1JbkFycmF5KHRoaXMuZ29vZFJvdXRlLCBbeCwgeV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZUNlbGxTdHlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPGJvb2xlYW4+dGhpcy5pc0l0ZW1JbkFycmF5KHRoaXMubG9ja0NlbGxzLCBbeCwgeV0pID09IHRydWUgPyB0aGlzLmxvY2tDZWxsU3R5bGUgOiB0aGlzLmRlZmF1bHRDZWxsU3R5bGU7XG4gICAgfVxuXG4gICAgcmFuZG9tTWFwKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbiA9IFswLCAwXTtcbiAgICAgICAgdGhpcy5nb29kUm91dGUgPSBbXTtcbiAgICAgICAgdGhpcy5jaGVja2VkQ2VsbHMgPSBbXTtcbiAgICAgICAgdGhpcy5sb2NrQ2VsbHMgPSBbXTtcblxuICAgICAgICB2YXIgbG9ja0NlbGwgPSAodGhpcy5yb3cgKiB0aGlzLmNvbCkgLyA2O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2tDZWxsOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHJhblggPSB0aGlzLmdldFJhbmRvbUludCgxLCB0aGlzLnJvdyAtIDEpO1xyXG4gICAgICAgICAgICB2YXIgcmFuWSA9IHRoaXMuZ2V0UmFuZG9tSW50KDEsIHRoaXMuY29sIC0gMSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0NlbGxzLnB1c2goW3JhblgsIHJhblldKTtcclxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcclxuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcclxuICAgIH1cblxuICAgIGlzSXRlbUluQXJyYXkoYXJyYXksIGl0ZW0pIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhcnJheVtpXVswXSA9PSBpdGVtWzBdICYmIGFycmF5W2ldWzFdID09IGl0ZW1bMV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+XFxyXFxuICAgIC50YWJsZU1hcCB0ciB0aHtcXHJcXG4gICAgICAgIHdpZHRoOjIwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6MjBweDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPGJyIC8+PGJyIC8+PGJyIC8+XFxyXFxuPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJyYW5kb21NYXAoKVxcXCI+TG9hZCBNYXA8L2J1dHRvbj5cXHJcXG48YnIgLz48YnIgLz5cXHJcXG48dGFibGUgY2xhc3M9XFxcInRhYmxlTWFwIHRhYmxlLWJvcmRlcmVkXFxcIj5cXHJcXG4gICAgPHRyICpuZ0Zvcj1cXFwibGV0IHJvdyBvZiByb3dNYXA7IGxldCByID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgPHRoICpuZ0Zvcj0nbGV0IGNhbCBvZiBjb2xNYXA7IGxldCBjID0gaW5kZXgnIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cXFwic3R5bGVDZWxsKHIsYylcXFwiIChjbGljayk9XFxcInNldFNvdXJjZVRhcmdldChyLGMpXFxcIj48L3RoPlxcclxcbiAgICA8L3RyPlxcclxcbjwvdGFibGU+XFxyXFxuXFxyXFxuXFxyXFxuPCEtLTxkaXYgKm5nRm9yPSdsZXQgdmFsdWUgb2YgbWFwUGFjJz5cXHJcXG4gICAge3sgdmFsdWUgfX13aWR0aD1cXFwiMjBweFxcXCJcXHJcXG48L2Rpdj4tLT5cXHJcXG48IS0tPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxcclxcbjxwPldlbGNvbWUgdG8geW91ciBuZXcgc2luZ2xlLXBhZ2UgYXBwbGljYXRpb24sIGJ1aWx0IHdpdGg6PC9wPlxcclxcbjx1bD5cXHJcXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vZ2V0LmFzcC5uZXQvJz5BU1AuTkVUIENvcmU8L2E+IGFuZCA8YSBocmVmPSdodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5LzY3ZWY4c2JkLmFzcHgnPkMjPC9hPiBmb3IgY3Jvc3MtcGxhdGZvcm0gc2VydmVyLXNpZGUgY29kZTwvbGk+XFxyXFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL2FuZ3VsYXIuaW8vJz5Bbmd1bGFyIDI8L2E+IGFuZCA8YSBocmVmPSdodHRwOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy8nPlR5cGVTY3JpcHQ8L2E+IGZvciBjbGllbnQtc2lkZSBjb2RlPC9saT5cXHJcXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vd2VicGFjay5naXRodWIuaW8vJz5XZWJwYWNrPC9hPiBmb3IgYnVpbGRpbmcgYW5kIGJ1bmRsaW5nIGNsaWVudC1zaWRlIHJlc291cmNlczwvbGk+XFxyXFxuICAgIDxsaT48YSBocmVmPSdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nPkJvb3RzdHJhcDwvYT4gZm9yIGxheW91dCBhbmQgc3R5bGluZzwvbGk+XFxyXFxuPC91bD5cXHJcXG48cD5UbyBoZWxwIHlvdSBnZXQgc3RhcnRlZCwgd2UndmUgYWxzbyBzZXQgdXA6PC9wPlxcclxcbjx1bD5cXHJcXG4gICAgPGxpPjxzdHJvbmc+Q2xpZW50LXNpZGUgbmF2aWdhdGlvbjwvc3Ryb25nPi4gRm9yIGV4YW1wbGUsIGNsaWNrIDxlbT5Db3VudGVyPC9lbT4gdGhlbiA8ZW0+QmFjazwvZW0+IHRvIHJldHVybiBoZXJlLjwvbGk+XFxyXFxuICAgIDxsaT48c3Ryb25nPlNlcnZlci1zaWRlIHByZXJlbmRlcmluZzwvc3Ryb25nPi4gRm9yIGZhc3RlciBpbml0aWFsIGxvYWRpbmcgYW5kIGltcHJvdmVkIFNFTywgeW91ciBBbmd1bGFyIDIgYXBwIGlzIHByZXJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIuIFRoZSByZXN1bHRpbmcgSFRNTCBpcyB0aGVuIHRyYW5zZmVycmVkIHRvIHRoZSBicm93c2VyIHdoZXJlIGEgY2xpZW50LXNpZGUgY29weSBvZiB0aGUgYXBwIHRha2VzIG92ZXIuPC9saT5cXHJcXG4gICAgPGxpPjxzdHJvbmc+V2VicGFjayBkZXYgbWlkZGxld2FyZTwvc3Ryb25nPi4gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdGhlcmUncyBubyBuZWVkIHRvIHJ1biB0aGUgPGNvZGU+d2VicGFjazwvY29kZT4gYnVpbGQgdG9vbC4gWW91ciBjbGllbnQtc2lkZSByZXNvdXJjZXMgYXJlIGR5bmFtaWNhbGx5IGJ1aWx0IG9uIGRlbWFuZC4gVXBkYXRlcyBhcmUgYXZhaWxhYmxlIGFzIHNvb24gYXMgeW91IG1vZGlmeSBhbnkgZmlsZS48L2xpPlxcclxcbiAgICA8bGk+PHN0cm9uZz5Ib3QgbW9kdWxlIHJlcGxhY2VtZW50PC9zdHJvbmc+LiBJbiBkZXZlbG9wbWVudCBtb2RlLCB5b3UgZG9uJ3QgZXZlbiBuZWVkIHRvIHJlbG9hZCB0aGUgcGFnZSBhZnRlciBtYWtpbmcgbW9zdCBjaGFuZ2VzLiBXaXRoaW4gc2Vjb25kcyBvZiBzYXZpbmcgY2hhbmdlcyB0byBmaWxlcywgeW91ciBBbmd1bGFyIDIgYXBwIHdpbGwgYmUgcmVidWlsdCBhbmQgYSBuZXcgaW5zdGFuY2UgaW5qZWN0ZWQgaXMgaW50byB0aGUgcGFnZS48L2xpPlxcclxcbiAgICA8bGk+PHN0cm9uZz5FZmZpY2llbnQgcHJvZHVjdGlvbiBidWlsZHM8L3N0cm9uZz4uIEluIHByb2R1Y3Rpb24gbW9kZSwgZGV2ZWxvcG1lbnQtdGltZSBmZWF0dXJlcyBhcmUgZGlzYWJsZWQsIGFuZCB0aGUgPGNvZGU+d2VicGFjazwvY29kZT4gYnVpbGQgdG9vbCBwcm9kdWNlcyBtaW5pZmllZCBzdGF0aWMgQ1NTIGFuZCBKYXZhU2NyaXB0IGZpbGVzLjwvbGk+XFxyXFxuPC91bD4tLT5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWNtYW4gfSBmcm9tICcuLi8uLi9wYWNtYW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2F0YXInLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FzdGFyLmNvbXBvbmVudC5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgQXN0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIFBhY21hbjogUGFjbWFuLlBhY21hblJvdXRlO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuUGFjbWFuID0gbmV3IFBhY21hbi5QYWNtYW5Sb3V0ZSgpO1xuXG4gICAgICAgIHRoaXMuUGFjbWFuLk1haW4oKTtcbiAgICB9XG5cbiAgICBPbkNlbGxDbGljayhjZWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWD1cIiArIGNlbGwuWCArIFwiIHwgWT1cIiArIGNlbGwuWSk7XG4gICAgfSAgIFxuXG4gICAgT25SYW5kb21NYXAoKSB7XG4gICAgICAgIHRoaXMuUGFjbWFuLlJhbmRvbU1hcCgpO1xuICAgIH0gICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hc3Rhci9hc3Rhci5jb21wb25lbnQudHMiLCJleHBvcnQgbmFtZXNwYWNlIFBhY21hbiB7XHJcblxyXG4gICAgZXhwb3J0IGVudW0gZUNlbGxUeXBlIHtcclxuICAgICAgICBERUZBVUxULFxyXG4gICAgICAgIENVUlJFTlQsXHJcbiAgICAgICAgTE9DS0VELFxyXG4gICAgICAgIFJPVVRFRFxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDZWxsIHtcclxuICAgICAgICBjdXJyZW50Q2VsbFN0eWxlID0gXCIjM2Y3ZjAwXCI7XG4gICAgICAgIHJvdXRlZENlbGxTdHlsZSA9IFwiIzU4YjIwMFwiO1xuICAgICAgICBkZWZhdWx0Q2VsbFN0eWxlID0gXCJ3aGl0ZXNtb2tlXCI7XG4gICAgICAgIGxvY2tlZENlbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuXHJcbiAgICAgICAgcHVibGljIFg6IG51bWJlcjtcclxuICAgICAgICBwdWJsaWMgWTogbnVtYmVyO1xyXG4gICAgICAgIHB1YmxpYyBUeXBlOiBlQ2VsbFR5cGUgPSBlQ2VsbFR5cGUuREVGQVVMVDtcclxuICAgICAgICBwdWJsaWMgZ2V0IFN0eXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGVDZWxsVHlwZS5DVVJSRU5UOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRDZWxsU3R5bGU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGVDZWxsVHlwZS5MT0NLRUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9ja2VkQ2VsbFN0eWxlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBlQ2VsbFR5cGUuUk9VVEVEOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRlZENlbGxTdHlsZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdENlbGxTdHlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTm9kZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoY2VsbCkge1xyXG4gICAgICAgICAgICB0aGlzLkNlbGwgPSBjZWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIENlbGw6IENlbGw7XHJcbiAgICAgICAgcHVibGljIFByZXZpb3VzTm9kZTogTm9kZTtcclxuXHJcbiAgICAgICAgcHVibGljIGg6IGFueTtcclxuICAgICAgICBwdWJsaWMgZzogYW55O1xyXG4gICAgICAgIHB1YmxpYyBmOiBhbnk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFBhY21hblJvdXRlIHtcclxuICAgICAgICAvL2N1cnJlbnRQb3NpdGlvbiA9IFswLCAwXTsgICAgICAgXG4gICAgICAgIC8vZ29vZFJvdXRlID0gW107XG4gICAgICAgIG9wZW5Ob2RlczogQXJyYXk8Tm9kZT47XG4gICAgICAgIGNsb3NlTm9kZXM6IEFycmF5PE5vZGU+O1xuICAgICAgICAvL2xvY2tDZWxscyA9IFtdO1xuICAgICAgICAvLyBxdWV1ZVBvc2l0aW9uID0gW107XG5cbiAgICAgICAgcm93OiBudW1iZXI7XG4gICAgICAgIGNvbDogbnVtYmVyO1xuXHJcbiAgICAgICAgcHVibGljIE1hcCA9IFtdO1xyXG4gICAgICAgIHB1YmxpYyBDdXJyZW50Q2VsbDogQ2VsbDtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgTWFpbigpOiB2b2lkIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFydCBhcHAgd2l0aCBBKiBhbGdvcml0aG0hXCIpO1xuICAgICAgICAgICAgdGhpcy5Jbml0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJbml0KHJvdz86IG51bWJlciwgY29sPzogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sID0gY29sID09IG51bGwgPyAxNSA6IGNvbDtcclxuICAgICAgICAgICAgdGhpcy5yb3cgPSByb3cgPT0gbnVsbCA/IDMwIDogcm93OztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuUmFuZG9tTWFwKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUmFuZG9tTWFwKCkge1xyXG4gICAgICAgICAgICB0aGlzLk1hcCA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgbG9ja0NlbGxzID0gW107XG5cbiAgICAgICAgICAgIHZhciBsb2NrQ2VsbCA9ICh0aGlzLnJvdyAqIHRoaXMuY29sKSAvIDY7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2tDZWxsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciByYW5YID0gdGhpcy5nZXRSYW5kb21JbnQoMSwgdGhpcy5yb3cgLSAxKTtcclxuICAgICAgICAgICAgICAgIHZhciByYW5ZID0gdGhpcy5nZXRSYW5kb21JbnQoMSwgdGhpcy5jb2wgLSAxKTtcclxuICAgICAgICAgICAgICAgIGxvY2tDZWxscy5wdXNoKFtyYW5YLCByYW5ZXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgdGhpcy5yb3c7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJvd0NlbGxzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHRoaXMuY29sOyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2VsbCA9IG5ldyBDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5YID0gYztcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLlkgPSByO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICg8Ym9vbGVhbj50aGlzLmlzSXRlbUluQXJyYXkobG9ja0NlbGxzLCBbY2VsbC5YLCBjZWxsLlldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLlR5cGUgPSBlQ2VsbFR5cGUuTE9DS0VEO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByb3dDZWxscy5wdXNoKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5NYXAucHVzaChyb3dDZWxscyk7XHJcbiAgICAgICAgICAgIH1cblxuXHJcbiAgICAgICAgICAgIHRoaXMuQ3VycmVudENlbGwgPSB0aGlzLmZpbmRDZWxsKDAsIDApO1xuICAgICAgICAgICAgdGhpcy5DdXJyZW50Q2VsbC5UeXBlID0gZUNlbGxUeXBlLkNVUlJFTlQ7XG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEZpbmRSb3V0ZShjZWxsVGFyZ2V0OiBDZWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3Blbk5vZGVzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VOb2RlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gbmV3IE5vZGUodGhpcy5DdXJyZW50Q2VsbClcclxuICAgICAgICAgICAgY3VycmVudE5vZGUuZyA9IDA7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLmggPSB0aGlzLmRpc3RhbmNlKHRoaXMuQ3VycmVudENlbGwsIGNlbGxUYXJnZXQpO1xyXG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5mID0gY3VycmVudE5vZGUuZyArIGN1cnJlbnROb2RlLmg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9wZW5Ob2Rlcy5wdXNoKGN1cnJlbnROb2RlKTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLm9wZW5Ob2Rlcy5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMub3Blbk5vZGVzW2N1cnJlbnRJbmRleF07XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wZW5Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmYgPCB0aGlzLm9wZW5Ob2Rlc1tpXS5mKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLm9wZW5Ob2Rlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgaXRlbSBpbiBvcGVuIHF1ZXVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Ob2Rlcy5zbGljZShjdXJyZW50SW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU5vZGVzLnB1c2goY3VycmVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuQ2VsbC5YID09IGNlbGxUYXJnZXQuWCAmJiBjdXJyZW50LkNlbGwuWSA9PSBjZWxsVGFyZ2V0LlkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZW5RdWV1ZShub2RlOiBOb2RlLCBjZWxsVGFyZ2V0OiBDZWxsKSB7XHJcbiAgICAgICAgICAgIHZhciB4Q29vcmRpbmF0ZXMgPSBbMSwgMCwgLTEsIDBdO1xyXG4gICAgICAgICAgICB2YXIgeUNvb3JkaW5hdGVzID0gWzAsIDEsIDAsIC0xXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IG5vZGUuQ2VsbC5YICsgeENvb3JkaW5hdGVzW2ldXHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IG5vZGUuQ2VsbC5ZICsgeUNvb3JkaW5hdGVzW2ldXHJcbiAgICAgICAgICAgICAgICBpZiAoeCA8IDAgfHwgeCA+PSB0aGlzLmNvbCB8fCB5IDwgMCB8fCB5ID49IHRoaXMucm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dENlbGwgPSB0aGlzLmZpbmRDZWxsKHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRDZWxsLlR5cGUgPT0gZUNlbGxUeXBlLkxPQ0tFRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBuZXdOb2RlID0gbmV3IE5vZGUobmV4dENlbGwpO1xyXG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5QcmV2aW91c05vZGUgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5nID0gdGhpcy5kaXN0YW5jZSh0aGlzLkN1cnJlbnRDZWxsLCBuZXh0Q2VsbCk7XHJcbiAgICAgICAgICAgICAgICBuZXdOb2RlLmggPSB0aGlzLmRpc3RhbmNlKG5leHRDZWxsLCBjZWxsVGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIG5ld05vZGUuZiA9IG5ld05vZGUuZyArIG5ld05vZGUuaDtcclxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk5vZGVzLnB1c2gobmV3Tm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3RhbmNlKHNvdXJjZTogQ2VsbCwgdGFyZ2V0OiBDZWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyhzb3VyY2UuWCAtIHRhcmdldC5YKSArIE1hdGguYWJzKHNvdXJjZS5ZIC0gdGFyZ2V0LlkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmaW5kQ2VsbCh4LCB5KTogQ2VsbCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLk1hcFt4XVt5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcclxuICAgICAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNJdGVtSW5BcnJheShhcnJheSwgaXRlbSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlbaV1bMF0gPT0gaXRlbVswXSAmJiBhcnJheVtpXVsxXSA9PSBpdGVtWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvcGFjbWFuLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+XFxyXFxuICAgIC50YWJsZU1hcCB0ciB0aHtcXHJcXG4gICAgICAgIHdpZHRoOjIwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6MjBweDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPGJyIC8+PGJyIC8+PGJyIC8+XFxyXFxuPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJPblJhbmRvbU1hcCgpXFxcIj5Mb2FkIE1hcDwvYnV0dG9uPlxcclxcbjxiciAvPjxiciAvPlxcclxcbjx0YWJsZSBjbGFzcz1cXFwidGFibGVNYXAgdGFibGUtYm9yZGVyZWRcXFwiPlxcclxcbiAgICA8dHIgKm5nRm9yPVxcXCJsZXQgY29sQ2VsbCBvZiBQYWNtYW4uTWFwOyBsZXQgciA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgIDx0aCAqbmdGb3I9J2xldCBjZWxsIG9mIGNvbENlbGw7IGxldCBjID0gaW5kZXgnIChjbGljayk9XFxcIk9uQ2VsbENsaWNrKGNlbGwpXFxcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XFxcImNlbGwuU3R5cGVcXFwiPjwvdGg+XFxyXFxuICAgICAgICA8IS0tPHRoPnt7cn19PC90aD4tLT5cXHJcXG4gICAgPC90cj5cXHJcXG48L3RhYmxlPlxcclxcblxcclxcbjxiciAvPjxiciAvPlxcclxcbjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwidGVzdCgpXFxcIj5UZXN0PC9idXR0b24+XFxyXFxuXFxyXFxuPCEtLTxkaXYgKm5nRm9yPSdsZXQgdmFsdWUgb2YgbWFwUGFjJz5cXHJcXG4gICAge3sgdmFsdWUgfX13aWR0aD1cXFwiMjBweFxcXCJcXHJcXG48L2Rpdj4tLT5cXHJcXG48IS0tPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxcclxcbjxwPldlbGNvbWUgdG8geW91ciBuZXcgc2luZ2xlLXBhZ2UgYXBwbGljYXRpb24sIGJ1aWx0IHdpdGg6PC9wPlxcclxcbjx1bD5cXHJcXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vZ2V0LmFzcC5uZXQvJz5BU1AuTkVUIENvcmU8L2E+IGFuZCA8YSBocmVmPSdodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5LzY3ZWY4c2JkLmFzcHgnPkMjPC9hPiBmb3IgY3Jvc3MtcGxhdGZvcm0gc2VydmVyLXNpZGUgY29kZTwvbGk+XFxyXFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL2FuZ3VsYXIuaW8vJz5Bbmd1bGFyIDI8L2E+IGFuZCA8YSBocmVmPSdodHRwOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy8nPlR5cGVTY3JpcHQ8L2E+IGZvciBjbGllbnQtc2lkZSBjb2RlPC9saT5cXHJcXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vd2VicGFjay5naXRodWIuaW8vJz5XZWJwYWNrPC9hPiBmb3IgYnVpbGRpbmcgYW5kIGJ1bmRsaW5nIGNsaWVudC1zaWRlIHJlc291cmNlczwvbGk+XFxyXFxuICAgIDxsaT48YSBocmVmPSdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nPkJvb3RzdHJhcDwvYT4gZm9yIGxheW91dCBhbmQgc3R5bGluZzwvbGk+XFxyXFxuPC91bD5cXHJcXG48cD5UbyBoZWxwIHlvdSBnZXQgc3RhcnRlZCwgd2UndmUgYWxzbyBzZXQgdXA6PC9wPlxcclxcbjx1bD5cXHJcXG4gICAgPGxpPjxzdHJvbmc+Q2xpZW50LXNpZGUgbmF2aWdhdGlvbjwvc3Ryb25nPi4gRm9yIGV4YW1wbGUsIGNsaWNrIDxlbT5Db3VudGVyPC9lbT4gdGhlbiA8ZW0+QmFjazwvZW0+IHRvIHJldHVybiBoZXJlLjwvbGk+XFxyXFxuICAgIDxsaT48c3Ryb25nPlNlcnZlci1zaWRlIHByZXJlbmRlcmluZzwvc3Ryb25nPi4gRm9yIGZhc3RlciBpbml0aWFsIGxvYWRpbmcgYW5kIGltcHJvdmVkIFNFTywgeW91ciBBbmd1bGFyIDIgYXBwIGlzIHByZXJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIuIFRoZSByZXN1bHRpbmcgSFRNTCBpcyB0aGVuIHRyYW5zZmVycmVkIHRvIHRoZSBicm93c2VyIHdoZXJlIGEgY2xpZW50LXNpZGUgY29weSBvZiB0aGUgYXBwIHRha2VzIG92ZXIuPC9saT5cXHJcXG4gICAgPGxpPjxzdHJvbmc+V2VicGFjayBkZXYgbWlkZGxld2FyZTwvc3Ryb25nPi4gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdGhlcmUncyBubyBuZWVkIHRvIHJ1biB0aGUgPGNvZGU+d2VicGFjazwvY29kZT4gYnVpbGQgdG9vbC4gWW91ciBjbGllbnQtc2lkZSByZXNvdXJjZXMgYXJlIGR5bmFtaWNhbGx5IGJ1aWx0IG9uIGRlbWFuZC4gVXBkYXRlcyBhcmUgYXZhaWxhYmxlIGFzIHNvb24gYXMgeW91IG1vZGlmeSBhbnkgZmlsZS48L2xpPlxcclxcbiAgICA8bGk+PHN0cm9uZz5Ib3QgbW9kdWxlIHJlcGxhY2VtZW50PC9zdHJvbmc+LiBJbiBkZXZlbG9wbWVudCBtb2RlLCB5b3UgZG9uJ3QgZXZlbiBuZWVkIHRvIHJlbG9hZCB0aGUgcGFnZSBhZnRlciBtYWtpbmcgbW9zdCBjaGFuZ2VzLiBXaXRoaW4gc2Vjb25kcyBvZiBzYXZpbmcgY2hhbmdlcyB0byBmaWxlcywgeW91ciBBbmd1bGFyIDIgYXBwIHdpbGwgYmUgcmVidWlsdCBhbmQgYSBuZXcgaW5zdGFuY2UgaW5qZWN0ZWQgaXMgaW50byB0aGUgcGFnZS48L2xpPlxcclxcbiAgICA8bGk+PHN0cm9uZz5FZmZpY2llbnQgcHJvZHVjdGlvbiBidWlsZHM8L3N0cm9uZz4uIEluIHByb2R1Y3Rpb24gbW9kZSwgZGV2ZWxvcG1lbnQtdGltZSBmZWF0dXJlcyBhcmUgZGlzYWJsZWQsIGFuZCB0aGUgPGNvZGU+d2VicGFjazwvY29kZT4gYnVpbGQgdG9vbCBwcm9kdWNlcyBtaW5pZmllZCBzdGF0aWMgQ1NTIGFuZCBKYXZhU2NyaXB0IGZpbGVzLjwvbGk+XFxyXFxuPC91bD4tLT5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FzdGFyL2FzdGFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9