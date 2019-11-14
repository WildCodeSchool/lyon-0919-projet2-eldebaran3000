(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/building/building.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/building/building.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <div class=\"mouseBuilding\" (mouseenter)=\"onMouseEnter()\" (mouseleave)=\"onMouseLeave()\" (click)=\"onBuildMode_selection(building)\"> \n        <div class=\"buildingImage\">\n            <img src=\"{{ building.image }}\" alt=\"\">\n        </div>\n        <div class=\"buildingName\">\n            <h3> {{ building.name }}</h3>\n        </div>\n       \n    </div>\n    <div class=\"infoMenu\"  *ngIf=\"showProperties\">\n        <div class=\"build\">\n            <div class=\"info\">Construction cost : <span [style.color]=\"gameService.ironCostColor\">{{ building.cost }} iron</span> </div>\n            <div class=\"info\" *ngIf=\"building.production\">Production : <span>{{ building.production }} / month</span></div>\n            <div class=\"info\" *ngIf=\"building.maxCapacity\">Storage capacity : <span>{{ building.maxCapacity }} </span></div>\n            <div class=\"info\" *ngIf=\"building.elecConsumption\">Power consumption : <span> {{ building.elecConsumption}} Gwatt</span></div>\n            <div class=\"info\" *ngIf=\"building.foodConsumption\">Food consumption : <span> {{ building.foodConsumption}} </span></div>\n            <div class=\"info\" *ngIf=\"building.minWorker\">Minimum of workers : <span [style.color]=\"gameService.minWorkerColor\"> {{ building.minWorker }} </span> </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/cellule/cellule.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/cellule/cellule.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div (click)=\"onBuildMode_placement(displayCell)\">  \n    <img src=\"{{displayCell.building?.image}}\" alt=\"\">\n</div>\n<div *ngIf=\"settingMode\" class=\"settingMenu\">\n    <app-set-case [displayCell]=\"displayCell\" class=\"setCase\"></app-set-case>\n</div>\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/controler/controler.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/controler/controler.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div \n    (click)=\"stopTime()\" ><img src=\"/assets/stop.png\" alt=\"\" class=\"stop\">\n</div>\n<div \n    (click)=\"playTime()\" ><img src=\"assets/play.png\" alt=\"\" class=\"play\">\n</div>\n<div \n    (click)=\"fastTime()\"><img src=\"assets/avanceRapide.png\" alt=\"\" class=\"avanceRapide\">\n</div>\n<div>\n    <img src=\"/assets/help.png\" alt=\"\" class=\"help\" routerLink=\"/tutorial\">\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/grid/grid.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/grid/grid.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n    <app-cellule *ngFor=\"let c of cases\" \n                 class=\"casou\"\n                 id=\"{{c.xPos}}-{{c.yPos}}\"\n                 [displayCell] = \"c\">\n    </app-cellule>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/menu-construct-building/menu-construct-building.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/menu-construct-building/menu-construct-building.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (click)=\"clickAppear()\" class=\"menu\">\n    CREATE BUILDING\n    <div *ngIf=\"buildingService.clickFleche\">\n        <img src=\"/assets/flecheHaut.png\" alt=\"\">\n    </div>\n    <div *ngIf=\"buildingService.clickMenu\">\n        <img src=\"/assets/fleche.png\" alt=\"\">\n    </div>\n</div>\n\n<div *ngIf=\"buildingService.clickMenu\" class=\"menuConstruct\">\n    <app-building \n        *ngFor=\"let b of buildings\"\n        [building]=\"b\">\n    </app-building>\n    \n</div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/menu-production-speed/menu-production-speed.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/menu-production-speed/menu-production-speed.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (click)=\"clickAppear()\" class=\"menu\">\n    STATS \n    <div *ngIf=\"!clickMenu\">\n        <img src=\"/assets/flecheGauche.png\" alt=\"\">\n    </div>\n    <div *ngIf=\"clickMenu\">\n        <img src=\"/assets/fleche.png\" alt=\"\">\n    </div>\n</div>\n<div *ngIf=\"clickMenu\" class=\"menuProd\">\n    <ul>\n        <li>\n            Food :<br/> \n            production: {{service.foodProd}} / month<br/>\n            consumption: {{service.foodConsumption}} / day<br/>\n        </li><br/>\n        <li>\n            Iron :<br/>\n            production: {{service.ironProd}} / month\n            \n        </li><br/>\n        <li>\n            Energy :<br/>\n            production: {{service.energyProd}} / month<br/>\n            consumption: {{service.elecConsumption}} / day <br/>\n        </li><br/>\n        <li>\n            Birth number :<br/> {{service.humanProd}} / year\n        </li><br/>\n        <li>\n            Population left on Earth : <br/> {{ service.popEarth }}\n        </li>\n    </ul>\n</div>\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/navbar/navbar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/navbar/navbar.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"containerCol\">\n    <div class=\"containerRow\">\n        <img src=\"/assets/arrowBack.png\" routerLink=\"\" class=\"home\" \n            matTooltip=\"Return to the homepage\"/>\n        <app-stockbar></app-stockbar>\n        <app-timer></app-timer>\n        <app-controler></app-controler>\n    </div>\n    <div class=\"progressBar\">   \n        <app-progress-bar-buffer></app-progress-bar-buffer>\n    </div>\n    \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/progress-bar-buffer/progress-bar-buffer.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/progress-bar-buffer/progress-bar-buffer.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"travelBar\">\n\n  <div class=\"earth\">  \n    <img src=\"/assets/earth2.png\" alt=\"\"> \n  </div>\n\n <div class=\"bar\">\n\n  </div>\n\n  <div class=\"ship\" [style.right.px]=\"timeSpeedService.shipPosition\" >\n      <img src=\"/assets/vaisseau.png\" alt=\"\">\n  </div>\n\n  <div class=\"eldebaran\">\n    <img src=\"/assets/eldebaran2.png\" alt=\"\">\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/set-case/set-case.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/set-case/set-case.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div>{{displayCell.building.name}}'s settings</div>\n<div class=\"caseMenu\">\n    <div>Actual production : {{ displayCell.building.production }}</div>\n    <div>Maximum of worker : {{ displayCell.building.maxWorker }}</div>\n    <div>Active workers : {{ displayCell.building.nbWorkers }}</div>\n</div>\n<div class=\"button\">\n    <button (click)=\"addWorker()\" class=\"plus\">+</button>\n    <button (click)=\"removeWorker()\" class=\"less\">-</button> \n    <button (click)=\"destroyBuilding()\" class=\"delete\">Destroy</button>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/stockbar/stockbar.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/stockbar/stockbar.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"stockbar\">\n        <div class=\"ressources\">\n            <div>\n                <img src=\"\\assets\\Energy_Credits.png\" class=\"icones\"/> \n            </div>\n            <div class=\"ressources-bar\">\n                <mat-progress-bar class=\"energy-progress\" [value]= \"gameService.energyProgress\"  aria-label=\"Rating\"></mat-progress-bar>\n                <div class=\"name\"> ENERGY {{gameService.energy}}/{{gameService.energyMax}}</div>\n            </div>\n        </div>\n\n        <div class=\"ressources\">\n            <div>\n                <img src=\"\\assets\\Food.png\" class=\"icones\"/> \n            </div>\n            <div class=\"ressources-bar\">\n                <mat-progress-bar class=\"food-progress\" [value]=\"gameService.foodProgress\"></mat-progress-bar>\n                <div class=\"name\"> FOOD {{gameService.food}}/{{gameService.foodMax}}</div>\n            </div>\n        </div>\n\n        <div class=\"ressources\">\n            <div>\n                <img src=\"\\assets\\Mirium.png\"class=\"icones\" /> \n            </div>\n            <div class=\"ressources-bar\">\n                <mat-progress-bar class=\"iron-progress\" [value]=\"gameService.ironProgress\"></mat-progress-bar>\n                <div class=\"name\"> IRON {{gameService.iron}}/{{gameService.ironMax}}</div>\n            </div>\n        </div>\n\n        <div class=\"ressources\">\n            <div>\n                <img  id=\"human\" src=\"\\assets\\Amesocratic.png\" class=\"icones\"/>\n            </div>\n            <div class=\"ressources-bar\">\n                <mat-progress-bar class=\"human-progress\" [value]=\"gameService.human\"></mat-progress-bar>\n                <div class=\"name\"> HUMAN {{gameService.human}}/{{gameService.humanMax}}</div>\n            </div>\n        </div>    \n        \n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/timer/timer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/timer/timer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clock\">\n    <div class=\"clockParam\" id=\"day\">{{timer.day}}</div>\n    <div class=\"clockParam\" id=\"month\">{{timer.month}}</div>\n    <div class=\"clockParam\" id=\"year\">{{timer.year}}</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accueil-page/accueil-page.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accueil-page/accueil-page.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"space\">\n    <h1 class=\"title\">ELDEBARAN 3000</h1>\n</div>\n<div class=\"containerBackground\">\n\n    <div class=\"summary\">\n        <p>En l’an, 2800, la planète Terre n’est désormais plus habitable, les humains ont exploité absolument toutes les ressources naturelles disponibles. C’est l’heure du grand départ.\n\n        Après plusieurs siècles de recherches intensives le consortium Hal9000 a mis en place un plan de colonisation de la planète Eldebaran située à environ 66 années-lumière du Soleil. Elle est la 13ᵉ étoile la plus brillante du ciel nocturne. Une première expédition de 10 colons explorateurs est partie installer le camp de base sur Eldebaran. Vous êtes en charge de l’expédition et avez la responsabilité de l’installation. </p>\n        \n        <p>Tous les X jours une navette composé de X humains arrivera sur Eldebaran. Votre responsabilité est de faire en sorte que les infrastructures nécessaires soient en place avant l’arrivée des nouveaux arrivants. Il faut donc prévoir assez de dortoirs et assez de ressources avant leur arrivée. Si la base n’est pas prête à recevoir de nouveaux colons la mission sera un échec. Les nouveaux arrivant mourront. Votre rôle est donc de garder un équilibre constant entre le niveau de ressources nécessaires et le nombre de colons.\n        \n        <p>Une fois que la pollution entière de la Terre aura migré vers Eldebaran, votre mission sera terminée.</p>\n    </div>\n\n    <div><button mat-raised-button routerLink=\"/game\" (click)=play() class=\"button\">LAUNCH GAME</button></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/defeat-page/defeat-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/defeat-page/defeat-page.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>defeat-page works!</p>\n<button (click)=replay()>Replay</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game-page/game-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game-page/game-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar> </app-navbar>\n<div class=\"containerBackground\">\n    <div class=\"menuConstruct\"><app-menu-construct-building></app-menu-construct-building>\n    </div>\n    <app-grid></app-grid>\n    <div class=\"menuProdSpeed\">\n        <app-menu-production-speed></app-menu-production-speed>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tutorial/tutorial.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tutorial/tutorial.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navBarTutorial\">\n\n                <img class=\"backToGame\"src=\"/assets/arrowBack.png\"routerLink=\"/game\">\n                <h1 class=\"title\">ELDEBARAN 3000</h1>\n                <h2 class=\"subTitle\">TUTORIAL</h2>\n        \n    \n</div>\n\n<div class=\"containerBackground\">\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/victory-page/victory-page.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/victory-page/victory-page.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navBarVictory\">\n    <h1 class=\"title\">ELDEBARAN 3000</h1>\n</div>\n\n<div class=\"containerBackground\">\n        \n    <div class=\"text\">\n        <h2 class=\"subTitle\">VICTORY !</h2>\n        <p>Congratulations !<br/>\n        You suceed to host the earth population !</p> \n    </div>\n    <div><button mat-raised-button routerLink=\"\" class=\"button\">HOME</button></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_accueil_page_accueil_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/accueil-page/accueil-page.component */ "./src/app/pages/accueil-page/accueil-page.component.ts");
/* harmony import */ var _pages_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/game-page/game-page.component */ "./src/app/pages/game-page/game-page.component.ts");
/* harmony import */ var _pages_victory_page_victory_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/victory-page/victory-page.component */ "./src/app/pages/victory-page/victory-page.component.ts");
/* harmony import */ var _pages_defeat_page_defeat_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/defeat-page/defeat-page.component */ "./src/app/pages/defeat-page/defeat-page.component.ts");
/* harmony import */ var _pages_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/tutorial/tutorial.component */ "./src/app/pages/tutorial/tutorial.component.ts");








const routes = [
    { path: "", component: _pages_accueil_page_accueil_page_component__WEBPACK_IMPORTED_MODULE_3__["AccueilPageComponent"] },
    { path: "game", component: _pages_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_4__["GamePageComponent"] },
    { path: "victory", component: _pages_victory_page_victory_page_component__WEBPACK_IMPORTED_MODULE_5__["VictoryPageComponent"] },
    { path: "defeat", component: _pages_defeat_page_defeat_page_component__WEBPACK_IMPORTED_MODULE_6__["DefeatPageComponent"] },
    { path: "tutorial", component: _pages_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_7__["TutorialComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'eldebaran3000';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_building_building_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/building/building.component */ "./src/app/component/building/building.component.ts");
/* harmony import */ var _pages_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/game-page/game-page.component */ "./src/app/pages/game-page/game-page.component.ts");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "./src/app/component/navbar/navbar.component.ts");
/* harmony import */ var _component_stockbar_stockbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/stockbar/stockbar.component */ "./src/app/component/stockbar/stockbar.component.ts");
/* harmony import */ var _component_timer_timer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/timer/timer.component */ "./src/app/component/timer/timer.component.ts");
/* harmony import */ var _component_controler_controler_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/controler/controler.component */ "./src/app/component/controler/controler.component.ts");
/* harmony import */ var _component_menu_construct_building_menu_construct_building_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/menu-construct-building/menu-construct-building.component */ "./src/app/component/menu-construct-building/menu-construct-building.component.ts");
/* harmony import */ var _component_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/grid/grid.component */ "./src/app/component/grid/grid.component.ts");
/* harmony import */ var _component_cellule_cellule_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/cellule/cellule.component */ "./src/app/component/cellule/cellule.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _component_progress_bar_buffer_progress_bar_buffer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/progress-bar-buffer/progress-bar-buffer.component */ "./src/app/component/progress-bar-buffer/progress-bar-buffer.component.ts");
/* harmony import */ var _component_set_case_set_case_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/set-case/set-case.component */ "./src/app/component/set-case/set-case.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _pages_accueil_page_accueil_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/accueil-page/accueil-page.component */ "./src/app/pages/accueil-page/accueil-page.component.ts");
/* harmony import */ var _pages_defeat_page_defeat_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/defeat-page/defeat-page.component */ "./src/app/pages/defeat-page/defeat-page.component.ts");
/* harmony import */ var _pages_victory_page_victory_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/victory-page/victory-page.component */ "./src/app/pages/victory-page/victory-page.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _pages_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/tutorial/tutorial.component */ "./src/app/pages/tutorial/tutorial.component.ts");
/* harmony import */ var _component_menu_production_speed_menu_production_speed_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/menu-production-speed/menu-production-speed.component */ "./src/app/component/menu-production-speed/menu-production-speed.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_6__["GamePageComponent"],
            _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _component_stockbar_stockbar_component__WEBPACK_IMPORTED_MODULE_8__["StockbarComponent"],
            _component_timer_timer_component__WEBPACK_IMPORTED_MODULE_9__["TimerComponent"],
            _component_controler_controler_component__WEBPACK_IMPORTED_MODULE_10__["ControlerComponent"],
            _component_building_building_component__WEBPACK_IMPORTED_MODULE_5__["BuildingComponent"],
            _component_menu_construct_building_menu_construct_building_component__WEBPACK_IMPORTED_MODULE_11__["MenuConstructBuildingComponent"],
            _component_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__["GridComponent"],
            _component_cellule_cellule_component__WEBPACK_IMPORTED_MODULE_13__["CelluleComponent"],
            _pages_accueil_page_accueil_page_component__WEBPACK_IMPORTED_MODULE_19__["AccueilPageComponent"],
            _pages_defeat_page_defeat_page_component__WEBPACK_IMPORTED_MODULE_20__["DefeatPageComponent"],
            _pages_victory_page_victory_page_component__WEBPACK_IMPORTED_MODULE_21__["VictoryPageComponent"],
            _component_progress_bar_buffer_progress_bar_buffer_component__WEBPACK_IMPORTED_MODULE_16__["ProgressBarBufferComponent"],
            _component_set_case_set_case_component__WEBPACK_IMPORTED_MODULE_17__["SetCaseComponent"],
            _pages_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_23__["TutorialComponent"],
            _component_menu_production_speed_menu_production_speed_component__WEBPACK_IMPORTED_MODULE_24__["MenuProductionSpeedComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/building/building.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/building/building.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".build {\n  color: #FFFF19;\n  display: flex;\n  flex-direction: column;\n  text-shadow: 5px 5px black;\n  padding: 10%;\n}\n\n.mouseBuilding {\n  display: flex;\n}\n\n.infoMenu {\n  display: flex;\n  justify-content: center;\n  background: black;\n  border: solid white;\n  border-radius: 30px;\n  opacity: 0.8;\n  margin-left: 10%;\n}\n\n.info {\n  margin-left: 20px;\n  width: 10%;\n}\n\nh3 {\n  color: #FFFF19;\n  text-shadow: 5px 5px black;\n}\n\n.container {\n  display: flex;\n  flex-direction: row;\n  width: 10%;\n}\n\nspan {\n  color: green;\n  text-shadow: none;\n  font-size: 0.9em;\n}\n\nimg {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2FiZWxsZWthc2FzL3Byb2pldC9FbGRlYmFyYW4zMDAwL2x5b24tMDkxOS1wcm9qZXQyLWVsZGViYXJhbjMwMDAvc3JjL2FwcC9jb21wb25lbnQvYnVpbGRpbmcvYnVpbGRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9idWlsZGluZy9idWlsZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FDSUo7O0FEREE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUNJSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYnVpbGRpbmcvYnVpbGRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVpbGR7XG4gICAgY29sb3I6ICNGRkZGMTk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtc2hhZG93OiA1cHggNXB4IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEwJTtcbn1cbi5tb3VzZUJ1aWxkaW5ne1xuICAgIGRpc3BsYXk6IGZsZXg7ICBcbn1cbi5pbmZvTWVudXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5pbmZveyAgIFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHdpZHRoOiAxMCU7XG59XG4gICAgXG5oM3tcbiAgICBjb2xvcjogI0ZGRkYxOTtcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCBibGFjaztcbiAgICBcbn1cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAlO1xufVxuc3BhbntcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbn1cbmltZ3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCIuYnVpbGQge1xuICBjb2xvcjogI0ZGRkYxOTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggYmxhY2s7XG4gIHBhZGRpbmc6IDEwJTtcbn1cblxuLm1vdXNlQnVpbGRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW5mb01lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGJvcmRlcjogc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmluZm8ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDEwJTtcbn1cblxuaDMge1xuICBjb2xvcjogI0ZGRkYxOTtcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggYmxhY2s7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAlO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IGdyZWVuO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/building/building.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/building/building.component.ts ***!
  \**********************************************************/
/*! exports provided: BuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingComponent", function() { return BuildingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/game.service */ "./src/app/shared/game.service.ts");
/* harmony import */ var src_app_shared_building_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/building.service */ "./src/app/shared/building.service.ts");




let BuildingComponent = class BuildingComponent {
    constructor(gameService, buildingService) {
        this.gameService = gameService;
        this.buildingService = buildingService;
        this.buildingShowEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showProperties = false;
        this.unshowProperties = false;
    }
    ngOnInit() { }
    ;
    onMouseEnter() {
        this.showProperties = true;
    }
    ;
    onMouseLeave() {
        this.showProperties = false;
    }
    ;
    /**
     * Construction des batiments (étape 1/4)
     * Méthode appelée au clic dans le html du composant (clic sur un batiment du menu construction) :
     * Stock le batiment cliqué (sous la forme d'un objet de type Building) dans le gameService (buildingToConstruct).
     * Referme le menu déroulant
     */
    onBuildMode_selection(building) {
        if (this.gameService.freeWorkers > 0) {
            this.gameService.buildingToConstruct = Object.assign({}, building);
            this.buildingService.clickAppear();
        }
    }
};
BuildingComponent.ctorParameters = () => [
    { type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] },
    { type: src_app_shared_building_service__WEBPACK_IMPORTED_MODULE_3__["BuildingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BuildingComponent.prototype, "building", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BuildingComponent.prototype, "buildingShowEvent", void 0);
BuildingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-building',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./building.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/building/building.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./building.component.scss */ "./src/app/component/building/building.component.scss")).default]
    })
], BuildingComponent);



/***/ }),

/***/ "./src/app/component/cellule/cellule.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/cellule/cellule.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div{\n    height: 86px;\n    width: 86px;\n}\nimg{\n    cursor: pointer;\n}\n.settingMenu{\n    position: relative;\n    z-index: 1;\n    border-radius: 40px;\n    border: thick double;\n    background-color: #070D34;\n    color: #FFFF19;\n    width: 200Px;\n    height: 140px;\n    font-family: menu;\n    display: flex;\n    align-items: center;\n}\n.setCase{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NlbGx1bGUvY2VsbHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvY2VsbHVsZS9jZWxsdWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XG4gICAgaGVpZ2h0OiA4NnB4O1xuICAgIHdpZHRoOiA4NnB4O1xufVxuaW1ne1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZXR0aW5nTWVudXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJvcmRlcjogdGhpY2sgZG91YmxlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzBEMzQ7XG4gICAgY29sb3I6ICNGRkZGMTk7XG4gICAgd2lkdGg6IDIwMFB4O1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgZm9udC1mYW1pbHk6IG1lbnU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNldENhc2V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/cellule/cellule.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/cellule/cellule.component.ts ***!
  \********************************************************/
/*! exports provided: CelluleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CelluleComponent", function() { return CelluleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/game.service */ "./src/app/shared/game.service.ts");



let CelluleComponent = class CelluleComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.settingMode = false;
    }
    ;
    ngOnInit() {
    }
    ;
    /** Construction des batiments (étape 3/4) :
     *  Méthode appelée au clic dans le HTML (cellule.component.html) transmettant la cellule sélectionnée de la grille.
     *  Si un batiment à construire n'a pas été selectionné et que la case cliquée contient un batiment (isOccuped = true)
     *  => settingMode s'active pour afficher le menu de setting de la prod du batiment.
     *  Sinon fait appel à une méthode située dans le game.service.ts car le batiments à construire y est stocké (buildingToConstruct).
     */
    onBuildMode_placement(cell) {
        if (this.gameService.buildingToConstruct === undefined && this.gameService.cases[this.gameService.cases.indexOf(cell)].isOccuped === true) {
            this.settingMode = !this.settingMode;
        }
        else if (this.gameService.buildingToConstruct) {
            this.gameService.onBuildMode_Build(cell);
        }
    }
};
CelluleComponent.ctorParameters = () => [
    { type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CelluleComponent.prototype, "displayCell", void 0);
CelluleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cellule',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cellule.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/cellule/cellule.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cellule.component.css */ "./src/app/component/cellule/cellule.component.css")).default]
    })
], CelluleComponent);



/***/ }),

/***/ "./src/app/component/controler/controler.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/controler/controler.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("H2 {\n  color: white;\n  border: solid white 2px;\n}\n\nbutton {\n  padding: 6px 0 6px 0;\n  font-family: eldebaran;\n  background: #f5f5f5;\n  border-radius: 2px;\n  width: 100px;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 6px yellow;\n}\n\n.play {\n  margin-left: 18px;\n}\n\n.help {\n  margin-left: 80px;\n  margin-top: 8px;\n}\n\n.play, .help, .avanceRapide, .stop {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2FiZWxsZWthc2FzL3Byb2pldC9FbGRlYmFyYW4zMDAwL2x5b24tMDkxOS1wcm9qZXQyLWVsZGViYXJhbjMwMDAvc3JjL2FwcC9jb21wb25lbnQvY29udHJvbGVyL2NvbnRyb2xlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2NvbnRyb2xlci9jb250cm9sZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDSCxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNFRDs7QURBQTtFQUNDLGlCQUFBO0FDR0Q7O0FEREE7RUFDQyxpQkFBQTtFQUNBLGVBQUE7QUNJRDs7QURGQTtFQUNDLGVBQUE7QUNLRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jb250cm9sZXIvY29udHJvbGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiSDJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjpzb2xpZCB3aGl0ZSAycHg7XG59XG5idXR0b257XG4gICAgcGFkZGluZzo2cHggMCA2cHggMDtcbiAgICBmb250LWZhbWlseTogZWxkZWJhcmFuO1xuXHRiYWNrZ3JvdW5kOiNmNWY1ZjU7XG5cdGJvcmRlci1yYWRpdXM6MnB4O1xuXHR3aWR0aDoxMDBweDtcblx0Ym9yZGVyOjFweCBzb2xpZCAjY2NjO1xuXHRib3gtc2hhZG93OjFweCAxcHggNnB4IHllbGxvdztcbn1cbi5wbGF5e1xuXHRtYXJnaW4tbGVmdDogMThweDtcbn1cbi5oZWxwe1xuXHRtYXJnaW4tbGVmdDogODBweDtcblx0bWFyZ2luLXRvcDogOHB4O1x0XG59XG4ucGxheSwgLmhlbHAsIC5hdmFuY2VSYXBpZGUsIC5zdG9we1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59IiwiSDIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiA2cHggMCA2cHggMDtcbiAgZm9udC1mYW1pbHk6IGVsZGViYXJhbjtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNnB4IHllbGxvdztcbn1cblxuLnBsYXkge1xuICBtYXJnaW4tbGVmdDogMThweDtcbn1cblxuLmhlbHAge1xuICBtYXJnaW4tbGVmdDogODBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ucGxheSwgLmhlbHAsIC5hdmFuY2VSYXBpZGUsIC5zdG9wIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/controler/controler.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/controler/controler.component.ts ***!
  \************************************************************/
/*! exports provided: ControlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlerComponent", function() { return ControlerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _timer_time_speed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timer/time-speed.service */ "./src/app/component/timer/time-speed.service.ts");



let ControlerComponent = class ControlerComponent {
    constructor(timeSpeedService) {
        this.timeSpeedService = timeSpeedService;
    }
    ngOnInit() {
        this.getClockSpeed();
    }
    getClockSpeed() {
        this.vitesseTemps = this.timeSpeedService.clockSpeed;
    }
    //fonction qui arrete le temps
    stopTime() {
        this.timeSpeedService.setPause(true);
    }
    //fonction qui lance le temps
    playTime() {
        this.timeSpeedService.setPause(false);
    }
    //fonction qui double la vitesse du temps
    fastTime() {
        this.clockSpeed = this.timeSpeedService.clockSpeed;
        this.timeSpeedService.fastForward();
    }
};
ControlerComponent.ctorParameters = () => [
    { type: _timer_time_speed_service__WEBPACK_IMPORTED_MODULE_2__["TimeSpeedService"] }
];
ControlerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-controler',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./controler.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/controler/controler.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./controler.component.scss */ "./src/app/component/controler/controler.component.scss")).default]
    })
], ControlerComponent);



/***/ }),

/***/ "./src/app/component/grid/grid.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/grid/grid.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    width: 100%;\n}\n\n.casou{\n    width: 86px;\n    height: 86px;\n    \n    \n}\n\n.casou:hover{\n    background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2dyaWQvZ3JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7OztBQUdoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ncmlkL2dyaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNhc291e1xuICAgIHdpZHRoOiA4NnB4O1xuICAgIGhlaWdodDogODZweDtcbiAgICBcbiAgICBcbn1cblxuLmNhc291OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/grid/grid.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/grid/grid.component.ts ***!
  \**************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/game.service */ "./src/app/shared/game.service.ts");



let GridComponent = class GridComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.cases = [];
    }
    ngOnInit() {
        this.caseBuilder();
    }
    // 
    caseBuilder() {
        this.cases = this.gameService.caseBuilder();
    }
};
GridComponent.ctorParameters = () => [
    { type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
];
GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/grid/grid.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grid.component.css */ "./src/app/component/grid/grid.component.css")).default]
    })
], GridComponent);



/***/ }),

/***/ "./src/app/component/menu-construct-building/menu-construct-building.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/component/menu-construct-building/menu-construct-building.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  color: #FFFF19;\n  font-family: eldebaran;\n  text-shadow: 5px 5px black;\n  cursor: pointer;\n  border: solid white;\n  border-radius: 30px;\n  background: black;\n  opacity: 0.8;\n  text-align: center;\n  padding-top: 5%;\n  margin-left: 2%;\n}\n\n.menuConstruct {\n  background: black;\n  border-radius: 30px;\n  opacity: 0.8;\n  border: solid white;\n  margin-left: 2%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2FiZWxsZWthc2FzL3Byb2pldC9FbGRlYmFyYW4zMDAwL2x5b24tMDkxOS1wcm9qZXQyLWVsZGViYXJhbjMwMDAvc3JjL2FwcC9jb21wb25lbnQvbWVudS1jb25zdHJ1Y3QtYnVpbGRpbmcvbWVudS1jb25zdHJ1Y3QtYnVpbGRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9tZW51LWNvbnN0cnVjdC1idWlsZGluZy9tZW51LWNvbnN0cnVjdC1idWlsZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbWVudS1jb25zdHJ1Y3QtYnVpbGRpbmcvbWVudS1jb25zdHJ1Y3QtYnVpbGRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudXtcbiAgICBjb2xvcjogI0ZGRkYxOTs7XG4gICAgZm9udC1mYW1pbHk6IGVsZGViYXJhbjtcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCBibGFjaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbn1cbi5tZW51Q29uc3RydWN0e1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbn1cbiIsIi5tZW51IHtcbiAgY29sb3I6ICNGRkZGMTk7XG4gIGZvbnQtZmFtaWx5OiBlbGRlYmFyYW47XG4gIHRleHQtc2hhZG93OiA1cHggNXB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5tZW51Q29uc3RydWN0IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/menu-construct-building/menu-construct-building.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/component/menu-construct-building/menu-construct-building.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MenuConstructBuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuConstructBuildingComponent", function() { return MenuConstructBuildingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_building_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/building.service */ "./src/app/shared/building.service.ts");



let MenuConstructBuildingComponent = class MenuConstructBuildingComponent {
    constructor(buildingService) {
        this.buildingService = buildingService;
    }
    ngOnInit() {
    }
    clickAppear() {
        this.buildingService.clickAppear();
        this.buildings = this.buildingService.buildings;
    }
};
MenuConstructBuildingComponent.ctorParameters = () => [
    { type: _shared_building_service__WEBPACK_IMPORTED_MODULE_2__["BuildingService"] }
];
MenuConstructBuildingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-construct-building',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-construct-building.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/menu-construct-building/menu-construct-building.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-construct-building.component.scss */ "./src/app/component/menu-construct-building/menu-construct-building.component.scss")).default]
    })
], MenuConstructBuildingComponent);



/***/ }),

/***/ "./src/app/component/menu-production-speed/menu-production-speed.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/component/menu-production-speed/menu-production-speed.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  color: #FFFF19;\n  font-family: eldebaran;\n  font-size: 2em;\n  text-shadow: 5px 5px black;\n  width: 260px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  margin-right: 30px;\n  flex-direction: column;\n  background: black;\n  border-radius: 20px;\n  border: solid white;\n  opacity: 0.8;\n  padding-top: 20px;\n  margin-bottom: 4px;\n}\n\n.menuProd {\n  color: #FFFF19;\n  background: black;\n  border-radius: 30px;\n  opacity: 0.8;\n  width: 260px;\n  border: solid white;\n  margin-right: 4px;\n  display: flex;\n  flex-direction: column;\n}\n\nul {\n  margin-top: 20px;\n  list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2FiZWxsZWthc2FzL3Byb2pldC9FbGRlYmFyYW4zMDAwL2x5b24tMDkxOS1wcm9qZXQyLWVsZGViYXJhbjMwMDAvc3JjL2FwcC9jb21wb25lbnQvbWVudS1wcm9kdWN0aW9uLXNwZWVkL21lbnUtcHJvZHVjdGlvbi1zcGVlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L21lbnUtcHJvZHVjdGlvbi1zcGVlZC9tZW51LXByb2R1Y3Rpb24tc3BlZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tZW51LXByb2R1Y3Rpb24tc3BlZWQvbWVudS1wcm9kdWN0aW9uLXNwZWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnV7XG4gICAgY29sb3I6ICNGRkZGMTk7XG4gICAgZm9udC1mYW1pbHk6IGVsZGViYXJhbjtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCBibGFjaztcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLm1lbnVQcm9ke1xuICAgIGNvbG9yOiAjRkZGRjE5O1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHdpZHRoOiAyNjBweDtcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxudWx7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4iLCIubWVudSB7XG4gIGNvbG9yOiAjRkZGRjE5O1xuICBmb250LWZhbWlseTogZWxkZWJhcmFuO1xuICBmb250LXNpemU6IDJlbTtcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggYmxhY2s7XG4gIHdpZHRoOiAyNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5tZW51UHJvZCB7XG4gIGNvbG9yOiAjRkZGRjE5O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgb3BhY2l0eTogMC44O1xuICB3aWR0aDogMjYwcHg7XG4gIGJvcmRlcjogc29saWQgd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG51bCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/menu-production-speed/menu-production-speed.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/component/menu-production-speed/menu-production-speed.component.ts ***!
  \************************************************************************************/
/*! exports provided: MenuProductionSpeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuProductionSpeedComponent", function() { return MenuProductionSpeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/game.service */ "./src/app/shared/game.service.ts");



let MenuProductionSpeedComponent = class MenuProductionSpeedComponent {
    constructor(service) {
        this.service = service;
        this.clickMenu = false;
    }
    ngOnInit() {
    }
    ;
    clickAppear() {
        this.clickMenu = !this.clickMenu;
    }
    ;
};
MenuProductionSpeedComponent.ctorParameters = () => [
    { type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
];
MenuProductionSpeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-production-speed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-production-speed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/menu-production-speed/menu-production-speed.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-production-speed.component.scss */ "./src/app/component/menu-production-speed/menu-production-speed.component.scss")).default]
    })
], MenuProductionSpeedComponent);



/***/ }),

/***/ "./src/app/component/navbar/navbar.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".containerRow {\n  display: flex;\n  flex-direction: row;\n  height: 100px;\n  justify-content: space-evenly;\n}\n\n#containerCol {\n  background-image: linear-gradient(rgba(255, 255, 255, 0) 93%, rgba(97, 108, 126, 0.787) 100%), url(\"/assets/cosmos-dark.jpg\");\n}\n\n.progressBar {\n  display: flex;\n  justify-content: center;\n}\n\n.classBar {\n  height: 200px;\n}\n\napp-controler {\n  display: flex;\n  align-items: center;\n  margin-bottom: 36px;\n}\n\n.home {\n  cursor: pointer;\n  width: 60px;\n  height: 40px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2FiZWxsZWthc2FzL3Byb2pldC9FbGRlYmFyYW4zMDAwL2x5b24tMDkxOS1wcm9qZXQyLWVsZGViYXJhbjMwMDAvc3JjL2FwcC9jb21wb25lbnQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBRUEsNkJBQUE7QUNBSjs7QURHQTtFQUNJLDZIQUFBO0FDQUo7O0FERUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyUm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OjEwMHB4O1xuXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbiNjb250YWluZXJDb2wge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA5MyUscmdiYSg5NywxMDgsMTI2LCAwLjc4NykgMTAwJSksIHVybChcIi9hc3NldHMvY29zbW9zLWRhcmsuanBnXCIpO1xufVxuLnByb2dyZXNzQmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG59XG4uY2xhc3NCYXJ7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cbmFwcC1jb250cm9sZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XG59XG5cbi5ob21lIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7IFxufVxuIiwiLmNvbnRhaW5lclJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTAwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4jY29udGFpbmVyQ29sIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTMlLCByZ2JhKDk3LCAxMDgsIDEyNiwgMC43ODcpIDEwMCUpLCB1cmwoXCIvYXNzZXRzL2Nvc21vcy1kYXJrLmpwZ1wiKTtcbn1cblxuLnByb2dyZXNzQmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jbGFzc0JhciB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbmFwcC1jb250cm9sZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xufVxuXG4uaG9tZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() { }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/component/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/component/progress-bar-buffer/progress-bar-buffer.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/component/progress-bar-buffer/progress-bar-buffer.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".travelBar {\n  display: flex;\n}\n\n.bar {\n  display: flex;\n  align-items: center;\n  width: 800px;\n  height: 10px;\n}\n\n.earth {\n  padding-right: 10px;\n}\n\n.ship {\n  position: relative;\n}\n\n.eldebaran {\n  position: relative;\n  right: 40px;\n  bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2FiZWxsZWthc2FzL3Byb2pldC9FbGRlYmFyYW4zMDAwL2x5b24tMDkxOS1wcm9qZXQyLWVsZGViYXJhbjMwMDAvc3JjL2FwcC9jb21wb25lbnQvcHJvZ3Jlc3MtYmFyLWJ1ZmZlci9wcm9ncmVzcy1iYXItYnVmZmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvcHJvZ3Jlc3MtYmFyLWJ1ZmZlci9wcm9ncmVzcy1iYXItYnVmZmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3Byb2dyZXNzLWJhci1idWZmZXIvcHJvZ3Jlc3MtYmFyLWJ1ZmZlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmF2ZWxCYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5iYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBoZWlnaHQ6IDEwcHg7ICAgXG59XG4uZWFydGh7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5zaGlwe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5lbGRlYmFyYW57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiA0MHB4O1xuICAgIGJvdHRvbTogMnB4O1xufSIsIi50cmF2ZWxCYXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbi5lYXJ0aCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5zaGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZWxkZWJhcmFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNDBweDtcbiAgYm90dG9tOiAycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/progress-bar-buffer/progress-bar-buffer.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/progress-bar-buffer/progress-bar-buffer.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProgressBarBufferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarBufferComponent", function() { return ProgressBarBufferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_component_timer_time_speed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/timer/time-speed.service */ "./src/app/component/timer/time-speed.service.ts");



let ProgressBarBufferComponent = class ProgressBarBufferComponent {
    constructor(timeSpeedService) {
        this.timeSpeedService = timeSpeedService;
        this.color = 'primary';
        this.mode = 'buffer';
    }
    ngOnInit() {
    }
};
ProgressBarBufferComponent.ctorParameters = () => [
    { type: src_app_component_timer_time_speed_service__WEBPACK_IMPORTED_MODULE_2__["TimeSpeedService"] }
];
ProgressBarBufferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progress-bar-buffer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./progress-bar-buffer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/progress-bar-buffer/progress-bar-buffer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progress-bar-buffer.component.scss */ "./src/app/component/progress-bar-buffer/progress-bar-buffer.component.scss")).default]
    })
], ProgressBarBufferComponent);



/***/ }),

/***/ "./src/app/component/set-case/set-case.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/set-case/set-case.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".caseMenu {\n  margin-left: 6px;\n}\n\n.button {\n  margin-top: 8px;\n}\n\n.plus, .less, .delete {\n  border-radius: 12px 0 12px 0;\n  border: none;\n  box-shadow: 1px 1px 3px red;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2FiZWxsZWthc2FzL3Byb2pldC9FbGRlYmFyYW4zMDAwL2x5b24tMDkxOS1wcm9qZXQyLWVsZGViYXJhbjMwMDAvc3JjL2FwcC9jb21wb25lbnQvc2V0LWNhc2Uvc2V0LWNhc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9zZXQtY2FzZS9zZXQtY2FzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDRSxlQUFBO0FDRUY7O0FEQUE7RUFDQyw0QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUNHRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zZXQtY2FzZS9zZXQtY2FzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXNlTWVudXtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xufVxuLmJ1dHRvbntcblx0XHRtYXJnaW4tdG9wOiA4cHg7XG59XG4ucGx1cywgLmxlc3MsIC5kZWxldGV7XG5cdGJvcmRlci1yYWRpdXM6MTJweCAwIDEycHggMDtcblx0Ym9yZGVyOm5vbmU7XG5cdGJveC1zaGFkb3c6MXB4IDFweCAzcHggcmVkO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCIuY2FzZU1lbnUge1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ucGx1cywgLmxlc3MsIC5kZWxldGUge1xuICBib3JkZXItcmFkaXVzOiAxMnB4IDAgMTJweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/set-case/set-case.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/set-case/set-case.component.ts ***!
  \**********************************************************/
/*! exports provided: SetCaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCaseComponent", function() { return SetCaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/case */ "./src/app/shared/case.ts");
/* harmony import */ var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/game.service */ "./src/app/shared/game.service.ts");




let SetCaseComponent = class SetCaseComponent {
    constructor(gameService) {
        this.gameService = gameService;
    }
    ngOnInit() {
    }
    addWorker() {
        if (this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.nbWorkers < this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.maxWorker && this.gameService.freeWorkers > 0) {
            this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.nbWorkers += 1;
            this.gameService.freeWorkers -= 1;
        }
        ;
        if (this.gameService.freeWorkers === 0) {
            this.gameService.minWorkerColor = "red";
        }
    }
    ;
    removeWorker() {
        if (this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.nbWorkers > this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.minWorker) {
            this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.nbWorkers -= 1;
            this.gameService.freeWorkers += 1;
        }
        ;
        if (this.gameService.freeWorkers > 0) {
            this.gameService.minWorkerColor = "green";
        }
    }
    ;
    destroyBuilding() {
        this.gameService.freeWorkers += this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.nbWorkers;
        this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)] = new src_app_shared_case__WEBPACK_IMPORTED_MODULE_2__["Case"](false, false);
        this.gameService.getCapacity();
        if (this.gameService.freeWorkers > 0) {
            this.gameService.minWorkerColor = "green";
            this.gameService.iron = this.gameService.iron + this.displayCell.building.deleteIron;
        }
    }
};
SetCaseComponent.ctorParameters = () => [
    { type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SetCaseComponent.prototype, "displayCell", void 0);
SetCaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-set-case',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./set-case.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/set-case/set-case.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./set-case.component.scss */ "./src/app/component/set-case/set-case.component.scss")).default]
    })
], SetCaseComponent);



/***/ }),

/***/ "./src/app/component/stockbar/stockbar.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/stockbar/stockbar.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".food-progress, .energy-progress, .iron-progress, .human-progress {\n  border: solid 2px white;\n}\n\n.name {\n  margin-top: 2px;\n  font-size: 1em;\n}\n\n#human {\n  width: 20px;\n  height: 20px;\n}\n\n.icones {\n  width: 30px;\n  height: 30px;\n  margin-right: 5px;\n}\n\n.stockbar {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  color: white;\n  width: 800px;\n}\n\n.ressources-bar {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n}\n\n.ressources {\n  display: flex;\n  align-items: center;\n  width: 20%;\n}\n\n.energy-progress.mat-progress-bar {\n  height: 15px;\n}\n\n.energy-progress .mat-progress-bar-fill::after {\n  background-color: #FFD700;\n}\n\n.energy-progress .mat-progress-bar-buffer {\n  background-color: #DAA520;\n}\n\n.food-progress.mat-progress-bar {\n  height: 15px;\n}\n\n.food-progress .mat-progress-bar-fill::after {\n  background-color: #ADFF2F;\n}\n\n.food-progress .mat-progress-bar-buffer {\n  background-color: #008000;\n}\n\n.iron-progress.mat-progress-bar {\n  height: 15px;\n}\n\n.iron-progress .mat-progress-bar-fill::after {\n  background-color: #90a4ae;\n}\n\n.iron-progress .mat-progress-bar-buffer {\n  background-color: #37474f;\n}\n\n.human-progress.mat-progress-bar {\n  height: 15px;\n}\n\n.human-progress .mat-progress-bar-fill::after {\n  background-color: #87CEEB;\n}\n\n.human-progress .mat-progress-bar-buffer {\n  background-color: #4682B4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2FiZWxsZWthc2FzL3Byb2pldC9FbGRlYmFyYW4zMDAwL2x5b24tMDkxOS1wcm9qZXQyLWVsZGViYXJhbjMwMDAvc3JjL2FwcC9jb21wb25lbnQvc3RvY2tiYXIvc3RvY2tiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9zdG9ja2Jhci9zdG9ja2Jhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0VGOztBREFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNHSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QURBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNHSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0dKOztBREVJO0VBQ0UsWUFBQTtBQ0NOOztBREVJO0VBQ0UseUJBQUE7QUNBTjs7QURHSTtFQUNFLHlCQUFBO0FDRE47O0FET0k7RUFDRSxZQUFBO0FDSk47O0FET0k7RUFDRSx5QkFBQTtBQ0xOOztBRFFJO0VBQ0UseUJBQUE7QUNOTjs7QURXSTtFQUNFLFlBQUE7QUNSTjs7QURXSTtFQUNFLHlCQUFBO0FDVE47O0FEWUk7RUFDRSx5QkFBQTtBQ1ZOOztBRGVJO0VBQ0UsWUFBQTtBQ1pOOztBRGVJO0VBQ0UseUJBQUE7QUNiTjs7QURnQkk7RUFDRSx5QkFBQTtBQ2ROIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3N0b2NrYmFyL3N0b2NrYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb2QtcHJvZ3Jlc3MsIC5lbmVyZ3ktcHJvZ3Jlc3MsIC5pcm9uLXByb2dyZXNzLCAuaHVtYW4tcHJvZ3Jlc3N7XHJcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbn1cclxuLm5hbWV7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcbiNodW1hbiB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmljb25lc3tcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5zdG9ja2JhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA4MDBweDtcclxufVxyXG5cclxuLnJlc3NvdXJjZXMtYmFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxufVxyXG5cclxuLnJlc3NvdXJjZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG5cclxuLmVuZXJneS1wcm9ncmVzcyB7XHJcbiAgICAmLm1hdC1wcm9ncmVzcy1iYXIge1xyXG4gICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkQ3MDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFBNTIwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmZvb2QtcHJvZ3Jlc3Mge1xyXG4gICAgJi5tYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQURGRjJGO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDtcclxuICAgIH1cclxufVxyXG5cclxuLmlyb24tcHJvZ3Jlc3Mge1xyXG4gICAgJi5tYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBhNGFlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0ZjtcclxuICAgIH1cclxufVxyXG5cclxuLmh1bWFuLXByb2dyZXNzIHtcclxuICAgICYubWF0LXByb2dyZXNzLWJhciB7XHJcbiAgICAgIGhlaWdodDogMTVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg3Q0VFQjtcclxuICAgIH1cclxuICBcclxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjgyQjQ7XHJcbiAgICB9XHJcbn0iLCIuZm9vZC1wcm9ncmVzcywgLmVuZXJneS1wcm9ncmVzcywgLmlyb24tcHJvZ3Jlc3MsIC5odW1hbi1wcm9ncmVzcyB7XG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xufVxuXG4ubmFtZSB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbiNodW1hbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5pY29uZXMge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnN0b2NrYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA4MDBweDtcbn1cblxuLnJlc3NvdXJjZXMtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZXNzb3VyY2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmVuZXJneS1wcm9ncmVzcy5tYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLmVuZXJneS1wcm9ncmVzcyAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkQ3MDA7XG59XG4uZW5lcmd5LXByb2dyZXNzIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQUE1MjA7XG59XG5cbi5mb29kLXByb2dyZXNzLm1hdC1wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDE1cHg7XG59XG4uZm9vZC1wcm9ncmVzcyAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBREZGMkY7XG59XG4uZm9vZC1wcm9ncmVzcyAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwO1xufVxuXG4uaXJvbi1wcm9ncmVzcy5tYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLmlyb24tcHJvZ3Jlc3MgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBhNGFlO1xufVxuLmlyb24tcHJvZ3Jlc3MgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0Zjtcbn1cblxuLmh1bWFuLXByb2dyZXNzLm1hdC1wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDE1cHg7XG59XG4uaHVtYW4tcHJvZ3Jlc3MgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdDRUVCO1xufVxuLmh1bWFuLXByb2dyZXNzIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjgyQjQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/stockbar/stockbar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/stockbar/stockbar.component.ts ***!
  \**********************************************************/
/*! exports provided: StockbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockbarComponent", function() { return StockbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/game.service */ "./src/app/shared/game.service.ts");
/* harmony import */ var _timer_time_speed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timer/time-speed.service */ "./src/app/component/timer/time-speed.service.ts");




let StockbarComponent = class StockbarComponent {
    constructor(gameService, timeService) {
        this.gameService = gameService;
        this.timeService = timeService;
    }
    ;
    ngOnInit() {
    }
    ;
};
StockbarComponent.ctorParameters = () => [
    { type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] },
    { type: _timer_time_speed_service__WEBPACK_IMPORTED_MODULE_3__["TimeSpeedService"] }
];
StockbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stockbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stockbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/stockbar/stockbar.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stockbar.component.scss */ "./src/app/component/stockbar/stockbar.component.scss")).default]
    })
], StockbarComponent);



/***/ }),

/***/ "./src/app/component/timer/time-speed.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/component/timer/time-speed.service.ts ***!
  \*******************************************************/
/*! exports provided: TimeSpeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSpeedService", function() { return TimeSpeedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/game.service */ "./src/app/shared/game.service.ts");



let TimeSpeedService = class TimeSpeedService {
    constructor(gameService) {
        this.gameService = gameService;
        this.clockSpeedDefault = 1000;
        this.clockSpeed = this.clockSpeedDefault;
        this.pause = false;
        this.timer = {
            day: 1,
            month: 1,
            year: 2800,
        };
        this.fastSpeed = this.clockSpeed / 10;
        //Travel Bar
        this.travelValue = 0;
        this.value = this.travelValue;
        this.shipPosition = 850;
    }
    play() {
        this.intervalId = setInterval(() => {
            if (!this.pause) {
                this.timer.day += 1;
                this.gameService.consumption();
                if (this.timer.day === 31) {
                    this.timer.month += 1;
                    this.timer.day = 1;
                    this.gameService.productionBar();
                    this.shipPosition -= 6.75;
                    if (this.shipPosition <= 40) {
                        this.shipPosition = 850;
                    }
                    ;
                }
                ;
                if (this.timer.month === 13) {
                    this.timer.year += 1;
                    this.timer.month = 1;
                    this.travelValue += 1.67;
                    this.gameService.getPopulation();
                    if (this.travelValue >= 100) {
                        this.travelValue = 0;
                    }
                    ;
                    this.value = this.travelValue;
                    this.getNavettePop();
                    return this.value, this.shipPosition;
                }
                ;
            }
            ;
        }, this.clockSpeed);
    }
    setPause(pause) {
        this.pause = pause;
        clearInterval(this.intervalId);
        this.clockSpeed = this.clockSpeedDefault;
        this.play();
    }
    fastForward() {
        clearInterval(this.intervalId);
        this.intervalId = undefined;
        this.clockSpeed = this.clockSpeed / 5;
        this.play();
    }
    getNavettePop() {
        if ((this.timer.year - 2800) % 10 === 0) {
            this.gameService.human += 200;
            this.gameService.freeWorkers += 200;
            this.gameService.popEarth -= 200;
            this.gameService.capacityDead();
        }
    }
};
TimeSpeedService.ctorParameters = () => [
    { type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
];
TimeSpeedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TimeSpeedService);



/***/ }),

/***/ "./src/app/component/timer/timer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/timer/timer.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".clock {\n  display: flex;\n  justify-content: space-around;\n  width: 200px;\n  color: white;\n  margin-top: 20px;\n}\n\n.clockParam {\n  border: solid white 2px;\n  width: 28%;\n  text-align: center;\n  padding-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2FiZWxsZWthc2FzL3Byb2pldC9FbGRlYmFyYW4zMDAwL2x5b24tMDkxOS1wcm9qZXQyLWVsZGViYXJhbjMwMDAvc3JjL2FwcC9jb21wb25lbnQvdGltZXIvdGltZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC90aW1lci90aW1lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC90aW1lci90aW1lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9ja3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIFxufVxuLmNsb2NrUGFyYW17XG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XG4gICAgd2lkdGg6IDI4JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbn0iLCIuY2xvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDIwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jbG9ja1BhcmFtIHtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XG4gIHdpZHRoOiAyOCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/timer/timer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/timer/timer.component.ts ***!
  \****************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _time_speed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-speed.service */ "./src/app/component/timer/time-speed.service.ts");



let TimerComponent = class TimerComponent {
    constructor(timeSpeedService) {
        this.timeSpeedService = timeSpeedService;
    }
    //déclenchement de la fonction "clock" à l'ouverture de la page. Prends en parametre clockspeed.
    ngOnInit() {
        this.timer = this.timeSpeedService.timer;
    }
};
TimerComponent.ctorParameters = () => [
    { type: _time_speed_service__WEBPACK_IMPORTED_MODULE_2__["TimeSpeedService"] }
];
TimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/timer/timer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timer.component.scss */ "./src/app/component/timer/timer.component.scss")).default]
    })
], TimerComponent);



/***/ }),

/***/ "./src/app/pages/accueil-page/accueil-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/accueil-page/accueil-page.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".space {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: linear-gradient(rgba(255, 255, 255, 0) 93%, rgba(97, 108, 126, 0.787) 100%), url(\"/assets/cosmos-dark.jpg\");\n  width: 100%;\n  height: 25%;\n}\n\n.containerBackground {\n  background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 99.75%, rgba(97, 108, 126, 0.787) 100%), linear-gradient(to top, rgba(255, 255, 255, 0) 90%, rgba(21, 22, 27, 0.904) 100%), url(\"/assets/MapBackground.jpg\");\n  width: 100%;\n  height: 75%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.title {\n  font-family: \"eldebaran\";\n  color: greenyellow;\n  font-size: 100px;\n  margin-top: 25px;\n  text-shadow: 10px 5px 5px red;\n}\n\n.summary {\n  width: 80%;\n  border: 3px solid black;\n  border-radius: 30px;\n  color: white;\n  font-size: 120%;\n  padding: 0px 15px 0px 15px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.383);\n  font-family: menu;\n}\n\nbutton {\n  width: 250px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2FiZWxsZWthc2FzL3Byb2pldC9FbGRlYmFyYW4zMDAwL2x5b24tMDkxOS1wcm9qZXQyLWVsZGViYXJhbjMwMDAvc3JjL2FwcC9wYWdlcy9hY2N1ZWlsLXBhZ2UvYWNjdWVpbC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hY2N1ZWlsLXBhZ2UvYWNjdWVpbC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw2SEFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ0o7O0FER0E7RUFDSSw2TkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ0FKOztBREVBO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjdWVpbC1wYWdlL2FjY3VlaWwtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDkzJSxyZ2JhKDk3LDEwOCwxMjYsIDAuNzg3KSAxMDAlKSwgdXJsKFwiL2Fzc2V0cy9jb3Ntb3MtZGFyay5qcGdcIik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNSU7XG4gICBcbn1cblxuLmNvbnRhaW5lckJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTkuNzUlLHJnYmEoOTcsMTA4LDEyNiwgMC43ODcpIDEwMCUpLCBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDkwJSxyZ2JhKDIxLDIyLDI3LCAwLjkwNCkgMTAwJSksIHVybCgnL2Fzc2V0cy9NYXBCYWNrZ3JvdW5kLmpwZycpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnZWxkZWJhcmFuJztcbiAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHRleHQtc2hhZG93OiAxMHB4IDVweCA1cHggcmVkO1xufVxuLnN1bW1hcnkge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMjAlO1xuICAgIHBhZGRpbmc6IDBweCAxNXB4IDBweCAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4zODMpO1xuICAgIGZvbnQtZmFtaWx5OiBtZW51O1xufVxuYnV0dG9uIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuIiwiLnNwYWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDkzJSwgcmdiYSg5NywgMTA4LCAxMjYsIDAuNzg3KSAxMDAlKSwgdXJsKFwiL2Fzc2V0cy9jb3Ntb3MtZGFyay5qcGdcIik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1JTtcbn1cblxuLmNvbnRhaW5lckJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDk5Ljc1JSwgcmdiYSg5NywgMTA4LCAxMjYsIDAuNzg3KSAxMDAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA5MCUsIHJnYmEoMjEsIDIyLCAyNywgMC45MDQpIDEwMCUpLCB1cmwoXCIvYXNzZXRzL01hcEJhY2tncm91bmQuanBnXCIpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJlbGRlYmFyYW5cIjtcbiAgY29sb3I6IGdyZWVueWVsbG93O1xuICBmb250LXNpemU6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICB0ZXh0LXNoYWRvdzogMTBweCA1cHggNXB4IHJlZDtcbn1cblxuLnN1bW1hcnkge1xuICB3aWR0aDogODAlO1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEyMCU7XG4gIHBhZGRpbmc6IDBweCAxNXB4IDBweCAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zODMpO1xuICBmb250LWZhbWlseTogbWVudTtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/accueil-page/accueil-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/accueil-page/accueil-page.component.ts ***!
  \**************************************************************/
/*! exports provided: AccueilPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilPageComponent", function() { return AccueilPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_component_timer_time_speed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/timer/time-speed.service */ "./src/app/component/timer/time-speed.service.ts");



let AccueilPageComponent = class AccueilPageComponent {
    constructor(timeSpeedService) {
        this.timeSpeedService = timeSpeedService;
    }
    ngOnInit() {
    }
    play() {
        this.timeSpeedService.setPause(false);
    }
};
AccueilPageComponent.ctorParameters = () => [
    { type: src_app_component_timer_time_speed_service__WEBPACK_IMPORTED_MODULE_2__["TimeSpeedService"] }
];
AccueilPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accueil-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accueil-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accueil-page/accueil-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accueil-page.component.scss */ "./src/app/pages/accueil-page/accueil-page.component.scss")).default]
    })
], AccueilPageComponent);



/***/ }),

/***/ "./src/app/pages/defeat-page/defeat-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/defeat-page/defeat-page.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlZmVhdC1wYWdlL2RlZmVhdC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/defeat-page/defeat-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/defeat-page/defeat-page.component.ts ***!
  \************************************************************/
/*! exports provided: DefeatPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefeatPageComponent", function() { return DefeatPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/game.service */ "./src/app/shared/game.service.ts");
/* harmony import */ var src_app_component_timer_time_speed_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/component/timer/time-speed.service */ "./src/app/component/timer/time-speed.service.ts");





let DefeatPageComponent = class DefeatPageComponent {
    constructor(router, gameService, timeSpeedService) {
        this.router = router;
        this.gameService = gameService;
        this.timeSpeedService = timeSpeedService;
    }
    ngOnInit() {
    }
    replay() {
        this.router.navigate([""]);
        this.gameService.energyMax = 0;
        this.gameService.foodMax = 0;
        this.gameService.ironMax = 0;
        this.gameService.humanMax = 0;
        this.gameService.humanProd = 1;
        this.gameService.energyProd = 0;
        this.gameService.foodProd = 0;
        this.gameService.ironProd = 0;
        this.gameService.energy = 10;
        this.gameService.food = 10;
        this.gameService.human = 10;
        this.gameService.iron = 100;
        this.timeSpeedService.timer = {
            day: 1,
            month: 1,
            year: 2800,
        };
        this.timeSpeedService.setPause(true);
    }
};
DefeatPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
    { type: src_app_component_timer_time_speed_service__WEBPACK_IMPORTED_MODULE_4__["TimeSpeedService"] }
];
DefeatPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-defeat-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./defeat-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/defeat-page/defeat-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./defeat-page.component.scss */ "./src/app/pages/defeat-page/defeat-page.component.scss")).default]
    })
], DefeatPageComponent);



/***/ }),

/***/ "./src/app/pages/game-page/game-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/game-page/game-page.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  color: #FFFF19;\n}\n\n.containerBackground {\n  background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 99.75%, rgba(97, 108, 126, 0.787) 100%), linear-gradient(to top, rgba(255, 255, 255, 0) 90%, rgba(21, 22, 27, 0.904) 100%), url(\"/assets/8k_mars.png\");\n  height: 2000px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.menuConstruct {\n  z-index: 1;\n  position: absolute;\n}\n\n.menuProdSpeed {\n  z-index: 1;\n  width: 20%;\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2FiZWxsZWthc2FzL3Byb2pldC9FbGRlYmFyYW4zMDAwL2x5b24tMDkxOS1wcm9qZXQyLWVsZGViYXJhbjMwMDAvc3JjL2FwcC9wYWdlcy9nYW1lLXBhZ2UvZ2FtZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9nYW1lLXBhZ2UvZ2FtZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBRENBO0VBQ0ksdU5BQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nYW1lLXBhZ2UvZ2FtZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBjb2xvcjogI0ZGRkYxOTtcbn1cbi5jb250YWluZXJCYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDk5Ljc1JSxyZ2JhKDk3LDEwOCwxMjYsIDAuNzg3KSAxMDAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA5MCUscmdiYSgyMSwyMiwyNywgMC45MDQpIDEwMCUpLCB1cmwoJy9hc3NldHMvOGtfbWFycy5wbmcnKTtcbiAgICBoZWlnaHQ6IDIwMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1lbnVDb25zdHJ1Y3Qge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubWVudVByb2RTcGVlZCB7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMjAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbn0iLCJib2R5IHtcbiAgY29sb3I6ICNGRkZGMTk7XG59XG5cbi5jb250YWluZXJCYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA5OS43NSUsIHJnYmEoOTcsIDEwOCwgMTI2LCAwLjc4NykgMTAwJSksIGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTAlLCByZ2JhKDIxLCAyMiwgMjcsIDAuOTA0KSAxMDAlKSwgdXJsKFwiL2Fzc2V0cy84a19tYXJzLnBuZ1wiKTtcbiAgaGVpZ2h0OiAyMDAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1lbnVDb25zdHJ1Y3Qge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5tZW51UHJvZFNwZWVkIHtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDIwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/game-page/game-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/game-page/game-page.component.ts ***!
  \********************************************************/
/*! exports provided: GamePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageComponent", function() { return GamePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/game.service */ "./src/app/shared/game.service.ts");



let GamePageComponent = class GamePageComponent {
    constructor(service) {
        this.service = service;
    }
    cheatFood() {
        this.service.food += 100;
    }
    ;
    cheatEnergy() {
        this.service.energy += 100;
    }
    ;
    cheatIron() {
        this.service.iron += 100;
    }
    ;
    cheatHuman() {
        this.service.human += 100;
    }
    ngOnInit() {
    }
    ;
};
GamePageComponent.ctorParameters = () => [
    { type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown.f')
], GamePageComponent.prototype, "cheatFood", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown.e')
], GamePageComponent.prototype, "cheatEnergy", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown.i')
], GamePageComponent.prototype, "cheatIron", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown.h')
], GamePageComponent.prototype, "cheatHuman", null);
GamePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game-page/game-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-page.component.scss */ "./src/app/pages/game-page/game-page.component.scss")).default]
    })
], GamePageComponent);



/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".containerBackground {\n  background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 99.75%, rgba(97, 108, 126, 0.787) 100%), linear-gradient(to top, rgba(255, 255, 255, 0) 90%, rgba(21, 22, 27, 0.904) 100%), url(\"/assets/MapBackground.jpg\");\n  width: 100%;\n  height: 75%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.title {\n  font-family: \"eldebaran\";\n  color: greenyellow;\n  font-size: 100px;\n  margin-top: 25px;\n  text-shadow: 10px 5px 5px red;\n}\n\n.subTitle {\n  font-family: \"eldebaran\";\n  color: greenyellow;\n  font-size: 30px;\n  margin-top: 5%;\n}\n\n.backToGame {\n  margin-top: 2%;\n  height: 1%;\n  cursor: pointer;\n}\n\n.navBarTutorial {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  background-image: linear-gradient(rgba(255, 255, 255, 0) 93%, rgba(97, 108, 126, 0.787) 100%), url(\"/assets/cosmos-dark.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2FiZWxsZWthc2FzL3Byb2pldC9FbGRlYmFyYW4zMDAwL2x5b24tMDkxOS1wcm9qZXQyLWVsZGViYXJhbjMwMDAvc3JjL2FwcC9wYWdlcy90dXRvcmlhbC90dXRvcmlhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdHV0b3JpYWwvdHV0b3JpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDSSw2TkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ1JKOztBRFdBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ1JKOztBRFdBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDUko7O0FEV0E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNSSjs7QURXQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkhBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnNwYWNlIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTMlLHJnYmEoOTcsMTA4LDEyNiwgMC43ODcpIDEwMCUpLCB1cmwoXCIvYXNzZXRzL2Nvc21vcy1kYXJrLmpwZ1wiKTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDI1JTtcbi8vIH1cblxuLmNvbnRhaW5lckJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTkuNzUlLHJnYmEoOTcsMTA4LDEyNiwgMC43ODcpIDEwMCUpLCBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDkwJSxyZ2JhKDIxLDIyLDI3LCAwLjkwNCkgMTAwJSksIHVybCgnL2Fzc2V0cy9NYXBCYWNrZ3JvdW5kLmpwZycpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnZWxkZWJhcmFuJztcbiAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHRleHQtc2hhZG93OiAxMHB4IDVweCA1cHggcmVkO1xufVxuXG4uc3ViVGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnZWxkZWJhcmFuJztcbiAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uYmFja1RvR2FtZSB7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgaGVpZ2h0OiAxJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZCYXJUdXRvcmlhbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTMlLHJnYmEoOTcsMTA4LDEyNiwgMC43ODcpIDEwMCUpLCB1cmwoXCIvYXNzZXRzL2Nvc21vcy1kYXJrLmpwZ1wiKTtcblxufSIsIi5jb250YWluZXJCYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA5OS43NSUsIHJnYmEoOTcsIDEwOCwgMTI2LCAwLjc4NykgMTAwJSksIGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTAlLCByZ2JhKDIxLCAyMiwgMjcsIDAuOTA0KSAxMDAlKSwgdXJsKFwiL2Fzc2V0cy9NYXBCYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiZWxkZWJhcmFuXCI7XG4gIGNvbG9yOiBncmVlbnllbGxvdztcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgdGV4dC1zaGFkb3c6IDEwcHggNXB4IDVweCByZWQ7XG59XG5cbi5zdWJUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcImVsZGViYXJhblwiO1xuICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5iYWNrVG9HYW1lIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGhlaWdodDogMSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdkJhclR1dG9yaWFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDkzJSwgcmdiYSg5NywgMTA4LCAxMjYsIDAuNzg3KSAxMDAlKSwgdXJsKFwiL2Fzc2V0cy9jb3Ntb3MtZGFyay5qcGdcIik7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.component.ts ***!
  \******************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TutorialComponent = class TutorialComponent {
    constructor() { }
    ngOnInit() {
    }
};
TutorialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tutorial',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tutorial.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tutorial/tutorial.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tutorial.component.scss */ "./src/app/pages/tutorial/tutorial.component.scss")).default]
    })
], TutorialComponent);



/***/ }),

/***/ "./src/app/pages/victory-page/victory-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/victory-page/victory-page.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".containerBackground {\n  background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 99.75%, rgba(97, 108, 126, 0.787) 100%), linear-gradient(to top, rgba(255, 255, 255, 0) 90%, rgba(21, 22, 27, 0.904) 100%), url(\"/assets/MapBackground.jpg\");\n  width: 100%;\n  height: 75%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.title {\n  font-family: \"eldebaran\";\n  color: greenyellow;\n  font-size: 100px;\n  margin-top: 25px;\n  text-shadow: 10px 5px 5px red;\n}\n\n.subTitle {\n  font-family: \"eldebaran\";\n  color: greenyellow;\n  font-size: 50px;\n  margin-top: 5%;\n}\n\n.button {\n  width: 250px;\n  height: 50px;\n}\n\n.text {\n  width: 25%;\n  border: 3px solid black;\n  border-radius: 30px;\n  color: white;\n  font-size: 25px;\n  padding: 0px 15px 0px 15px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.383);\n  font-family: menu;\n}\n\n.navBarVictory {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  background-image: linear-gradient(rgba(255, 255, 255, 0) 93%, rgba(97, 108, 126, 0.787) 100%), url(\"/assets/cosmos-dark.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2FiZWxsZWthc2FzL3Byb2pldC9FbGRlYmFyYW4zMDAwL2x5b24tMDkxOS1wcm9qZXQyLWVsZGViYXJhbjMwMDAvc3JjL2FwcC9wYWdlcy92aWN0b3J5LXBhZ2UvdmljdG9yeS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy92aWN0b3J5LXBhZ2UvdmljdG9yeS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0ksNk5BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNSSjs7QURXQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNSSjs7QURXQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1JKOztBRFdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNSSjs7QURXQTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw2SEFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmljdG9yeS1wYWdlL3ZpY3RvcnktcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5zcGFjZSB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDkzJSxyZ2JhKDk3LDEwOCwxMjYsIDAuNzg3KSAxMDAlKSwgdXJsKFwiL2Fzc2V0cy9jb3Ntb3MtZGFyay5qcGdcIik7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAyNSU7XG4vLyB9XG5cbi5jb250YWluZXJCYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDk5Ljc1JSxyZ2JhKDk3LDEwOCwxMjYsIDAuNzg3KSAxMDAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA5MCUscmdiYSgyMSwyMiwyNywgMC45MDQpIDEwMCUpLCB1cmwoJy9hc3NldHMvTWFwQmFja2dyb3VuZC5qcGcnKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ2VsZGViYXJhbic7XG4gICAgY29sb3I6IGdyZWVueWVsbG93O1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICB0ZXh0LXNoYWRvdzogMTBweCA1cHggNXB4IHJlZDtcbn1cblxuLnN1YlRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ2VsZGViYXJhbic7XG4gICAgY29sb3I6IGdyZWVueWVsbG93O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmJ1dHRvbiB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLnRleHQge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmc6IDBweCAxNXB4IDBweCAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4zODMpO1xuICAgIGZvbnQtZmFtaWx5OiBtZW51O1xufVxuXG4ubmF2QmFyVmljdG9yeXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTMlLHJnYmEoOTcsMTA4LDEyNiwgMC43ODcpIDEwMCUpLCB1cmwoXCIvYXNzZXRzL2Nvc21vcy1kYXJrLmpwZ1wiKTtcblxufSIsIi5jb250YWluZXJCYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA5OS43NSUsIHJnYmEoOTcsIDEwOCwgMTI2LCAwLjc4NykgMTAwJSksIGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTAlLCByZ2JhKDIxLCAyMiwgMjcsIDAuOTA0KSAxMDAlKSwgdXJsKFwiL2Fzc2V0cy9NYXBCYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiZWxkZWJhcmFuXCI7XG4gIGNvbG9yOiBncmVlbnllbGxvdztcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgdGV4dC1zaGFkb3c6IDEwcHggNXB4IDVweCByZWQ7XG59XG5cbi5zdWJUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcImVsZGViYXJhblwiO1xuICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5idXR0b24ge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnRleHQge1xuICB3aWR0aDogMjUlO1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBhZGRpbmc6IDBweCAxNXB4IDBweCAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zODMpO1xuICBmb250LWZhbWlseTogbWVudTtcbn1cblxuLm5hdkJhclZpY3Rvcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTMlLCByZ2JhKDk3LCAxMDgsIDEyNiwgMC43ODcpIDEwMCUpLCB1cmwoXCIvYXNzZXRzL2Nvc21vcy1kYXJrLmpwZ1wiKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/victory-page/victory-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/victory-page/victory-page.component.ts ***!
  \**************************************************************/
/*! exports provided: VictoryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VictoryPageComponent", function() { return VictoryPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VictoryPageComponent = class VictoryPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
VictoryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-victory-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./victory-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/victory-page/victory-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./victory-page.component.scss */ "./src/app/pages/victory-page/victory-page.component.scss")).default]
    })
], VictoryPageComponent);



/***/ }),

/***/ "./src/app/shared/building.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/building.service.ts ***!
  \********************************************/
/*! exports provided: BuildingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingService", function() { return BuildingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BuildingService = class BuildingService {
    constructor() {
        this.clickMenu = false;
        this.clickFleche = true;
        this.buildings = [{
                name: 'Farm',
                maxCapacity: 1080,
                production: 108,
                foodConsumption: undefined,
                elecConsumption: 36,
                cost: 27,
                nextRoad: false,
                nbWorkers: 1,
                minWorker: 1,
                maxWorker: 36,
                image: "/assets/fermeHydro.png",
                deleteIron: 10
            },
            {
                name: 'Extractor',
                maxCapacity: 270,
                production: 108,
                foodConsumption: undefined,
                elecConsumption: 36,
                cost: 27,
                nextRoad: false,
                nbWorkers: 1,
                minWorker: 1,
                maxWorker: 36,
                image: "/assets/extracteurMinerai.png",
                deleteIron: 10,
            },
            {
                name: 'Power Station',
                maxCapacity: 480,
                production: 144,
                foodConsumption: undefined,
                elecConsumption: undefined,
                cost: 36,
                nextRoad: false,
                nbWorkers: 1,
                minWorker: 1,
                maxWorker: 48,
                image: "/assets/powerStation.png",
                deleteIron: 15
            },
            {
                name: 'Dormitory',
                maxCapacity: 76,
                production: undefined,
                foodConsumption: 144,
                elecConsumption: 48,
                cost: 36,
                nextRoad: false,
                nbWorkers: undefined,
                minWorker: 0,
                maxWorker: undefined,
                image: "/assets/dortoir.png",
                deleteIron: 15
            },
            {
                name: 'Road',
                maxCapacity: undefined,
                production: undefined,
                foodConsumption: undefined,
                elecConsumption: undefined,
                cost: 5,
                nextRoad: false,
                nbWorkers: undefined,
                minWorker: undefined,
                maxWorker: undefined,
                image: "/assets/road.png",
                deleteIron: 1
            },
            {
                name: 'Carrefour',
                maxCapacity: undefined,
                production: undefined,
                foodConsumption: undefined,
                elecConsumption: undefined,
                cost: 5,
                nextRoad: false,
                nbWorkers: undefined,
                minWorker: undefined,
                maxWorker: undefined,
                image: "/assets/carrefour.png",
                deleteIron: 1
            }
        ];
    }
    clickAppear() {
        this.clickMenu = !this.clickMenu;
        this.clickFleche = !this.clickFleche;
    }
};
BuildingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BuildingService);



/***/ }),

/***/ "./src/app/shared/case.ts":
/*!********************************!*\
  !*** ./src/app/shared/case.ts ***!
  \********************************/
/*! exports provided: Case */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Case", function() { return Case; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Case {
    constructor(isOccuped, isOnConstructMode) {
        this.isOccuped = isOccuped;
        this.isOnConstructMode = isOnConstructMode;
    }
}


/***/ }),

/***/ "./src/app/shared/game.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/game.service.ts ***!
  \****************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./case */ "./src/app/shared/case.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GameService = class GameService {
    /* --------------Étape 3 dans cellule.component.ts------------------------- */
    constructor(router) {
        this.router = router;
        /* Menu constructor changing colors */
        this.ironCostColor = "green";
        this.minWorkerColor = "green";
        /*  initialisation du tableau contenant les objets disposés sur la grille (1 casou = 1cellule) */
        this.cases = [];
        this.energyMax = 0;
        this.foodMax = 0;
        this.ironMax = 0;
        this.humanMax = 0;
        this.humanProd = 1;
        this.energyProd = 0;
        this.foodProd = 0;
        this.ironProd = 0;
        this.energy = 10;
        this.food = 10;
        this.human = 10;
        this.iron = 100;
        this.popEarth = 1000;
        // Nombre de travailleurs Disponibles
        this.freeWorkers = this.human;
        // décès navette
        this.dead = 0;
    }
    /** Création de la grille  */
    caseBuilder() {
        for (let l = 1; l <= 20; l++) {
            for (let c = 1; c <= 20; c++) {
                let index = (l * c) - 1;
                let casou = new _case__WEBPACK_IMPORTED_MODULE_2__["Case"](false, false);
                this.cases.push(casou);
            }
            ;
        }
        ;
        return this.cases;
    }
    /** Construction des batiments (étape 4/4) :
    *   On ajoute au tableau d'objet contenant les cellules de la grille (cases), l'objet stockée dans "buildingToConstruct"
    *   dans la cellule sélectionnée sur la grille.
    *   Pour cela, on récupère l'index de la cellule séléctionnée : this.cases.indexOf(cell)
    *   Puis on ajoute à cet objet dans l'attribut building ... :  this.cases[...].building
    *   ... l'objet à construire : ... = this.buildingToConstruct
    *   On indique que la case est occupée par un batiment avec ke booléen isOccuped
    *   On réinitialise la variable buildingToConstruct pour empecher de poser plusieurs batiments d'affilé
    */
    onBuildMode_Build(cell) {
        if (this.buildingToConstruct.cost > this.iron) {
            this.ironCostColor = "red";
        }
        if (this.buildingToConstruct.cost <= this.iron && this.freeWorkers > 0) {
            this.iron -= this.buildingToConstruct.cost;
            this.freeWorkers -= this.buildingToConstruct.minWorker;
            if (this.freeWorkers === 0) {
                this.minWorkerColor = "red";
            }
            this.cases[this.cases.indexOf(cell)].building = this.buildingToConstruct;
            this.cases[this.cases.indexOf(cell)].isOccuped = true;
            this.buildingToConstruct = undefined;
            this.getCapacity();
            this.getProductionCapacity();
        }
    }
    /* ---------------------------------------FIN--------------------------------------------------- */
    //Stockage des capacités max qu'apporte chaque case en fonction du type de bâtiment
    getCapacity() {
        let energyMax = 0;
        let foodMax = 0;
        let ironMax = 0;
        let humanMax = 0;
        this.cases.forEach(thisCase => {
            if (thisCase.building) {
                switch (thisCase.building.name) {
                    case 'Power Station':
                        energyMax += thisCase.building.maxCapacity;
                        break;
                    case 'Farm':
                        foodMax += thisCase.building.maxCapacity;
                        break;
                    case 'Extractor':
                        ironMax += thisCase.building.maxCapacity;
                        break;
                    case 'Dormitory':
                        humanMax += thisCase.building.maxCapacity;
                        break;
                }
                ;
            }
            ;
        });
        this.energyMax = energyMax;
        this.foodMax = foodMax;
        this.ironMax = ironMax;
        this.humanMax = humanMax;
    }
    ;
    //Récupération et stockage des productions de chaque case en fonction du type de bâtiment
    getProductionCapacity() {
        let energyProd = 0;
        let foodProd = 0;
        let ironProd = 0;
        let elecConsumption = 0;
        let foodConsumption = 0;
        this.cases.forEach(thisCase => {
            if (thisCase.building) {
                switch (thisCase.building.name) {
                    case 'Power Station':
                        energyProd += (thisCase.building.production * (thisCase.building.nbWorkers / thisCase.building.maxWorker)); // Production d'energy proportionnelle au nombre de Worker
                        break;
                    case 'Farm':
                        foodProd += (thisCase.building.production * (thisCase.building.nbWorkers / thisCase.building.maxWorker)); // Production de Food proportionnelle au nombre de Worker
                        elecConsumption += (thisCase.building.elecConsumption * (thisCase.building.nbWorkers / thisCase.building.maxWorker)); // Consommation d'energy propotionnelle au nombre de Worker
                        break;
                    case 'Extractor':
                        ironProd += (thisCase.building.production * (thisCase.building.nbWorkers / thisCase.building.maxWorker)); // Production de Iron proportionnelle au nombre de Worker
                        elecConsumption += (thisCase.building.elecConsumption * (thisCase.building.nbWorkers / thisCase.building.maxWorker)); // Consommation d'energy propotionnelle au nombre de Worker
                        break;
                    case 'Dormitory':
                        elecConsumption += thisCase.building.elecConsumption; /* (thisCase.building.);*/
                        foodConsumption += thisCase.building.foodConsumption; // A FINIR !
                }
                ;
            }
            ;
        });
        this.energyProd = energyProd;
        this.foodProd = foodProd;
        this.ironProd = ironProd;
        this.elecConsumption = Math.ceil(elecConsumption / 31);
        this.foodConsumption = Math.ceil(foodConsumption / 31);
    }
    ;
    productionBar() {
        this.getProductionCapacity();
        if (this.energy <= this.energyMax - this.energyProd && this.energy >= 0 - this.energyProd) {
            this.energy += this.energyProd;
            this.energyProgress = (this.energy * 100) / this.energyMax;
        }
        else if (this.energy >= this.energyMax - this.energyProd) {
            this.energy = this.energyMax;
            this.energyProgress = (this.energy * 100) / this.energyMax;
        }
        ;
        if (this.food <= (this.foodMax - this.foodProd) && this.food >= 0 - this.foodProd) {
            this.food += this.foodProd;
            this.foodProgress = (this.food * 100) / this.foodMax;
        }
        else if (this.food >= this.foodMax - this.foodProd) {
            this.food = this.foodMax;
            this.foodProgress = (this.food * 100) / this.foodMax;
        }
        if (this.food === 0) {
            let monthlyDeath = Math.ceil((0.5 * this.human));
            this.human -= monthlyDeath;
            this.totalDeadPeople += monthlyDeath;
        }
        if (this.iron <= (this.ironMax - this.ironProd) && this.iron >= 0) {
            this.iron += this.ironProd;
            this.ironProgress = (this.iron * 100) / this.ironMax;
        }
        else if (this.iron >= this.ironMax - this.ironProd) {
            this.iron = this.ironMax;
            this.ironProgress = (this.iron * 100) / this.ironMax;
        }
        ;
    }
    ;
    getPopulation() {
        let newBorn = Math.ceil(0.1 * this.human); //On stock 10% de la pop actuelle : représente les naissances annuels arrondie à l'entier inférieur
        if (this.human + newBorn <= this.humanMax) { //On teste si la population et les nouveaux nés peuvent etres herbergés
            this.human += newBorn; //On ajoute les naissances à la population
            this.freeWorkers += newBorn; //On ajoute les naissances aux travailleurs disponibles
            this.humanProd = newBorn;
        }
        else if (this.human <= this.humanMax) { //Si les naissances dépassent la capacité d'hébergement mais qu'il reste de la place
            newBorn = this.humanMax - this.human; //Les naissances représentent l'espace disponible restant
            this.human = this.humanMax; //La population est mise au max
            this.freeWorkers = newBorn; // Les nouveaux travailleurs dispo sont ajoutés
            this.humanProd = newBorn;
        }
        ;
    }
    youLoose() {
        this.router.navigate(["/defeat"]);
    }
    consumption() {
        this.getProductionCapacity();
        this.energy -= this.elecConsumption;
        this.food -= this.foodConsumption;
        if ((this.energy -= this.elecConsumption) < 0) {
            this.energy = 0;
            this.energyProgress = (this.energy * 100) / this.energyMax;
        }
        else {
            this.energyProgress = (this.energy * 100) / this.energyMax;
        }
        ;
        if ((this.food -= this.foodConsumption) < 0) {
            this.food = 0;
            this.foodProgress = (this.food * 100) / this.foodMax;
        }
        else {
            this.foodProgress = (this.food * 100) / this.foodMax;
        }
        ;
        if (this.human === 0) {
            this.youLoose();
        }
    }
    ;
    capacityDead() {
        console.log(this.human);
        console.log(this.humanMax);
        if (this.humanMax < this.human) {
            this.dead = (this.humanMax - this.human);
            console.log(this.dead);
        }
        ;
    }
};
GameService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GameService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!**********************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node ./src/main.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/isabellekasas/projet/Eldebaran3000/lyon-0919-projet2-eldebaran3000/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node");
module.exports = __webpack_require__(/*! /Users/isabellekasas/projet/Eldebaran3000/lyon-0919-projet2-eldebaran3000/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map