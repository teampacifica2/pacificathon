(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/customers.component */ "./src/app/component/customers.component.ts");
/* harmony import */ var _component_find_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/find-customer.component */ "./src/app/component/find-customer.component.ts");
/* harmony import */ var _component_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/customer.component */ "./src/app/component/customer.component.ts");
/* harmony import */ var _component_edit_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/edit-customer.component */ "./src/app/component/edit-customer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/navbar.component */ "./src/app/component/navbar.component.ts");
/* harmony import */ var _component_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/error.component */ "./src/app/component/error.component.ts");
/* harmony import */ var _component_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/home.component */ "./src/app/component/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _component_new_customer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/new-customer.component */ "./src/app/component/new-customer.component.ts");
/* harmony import */ var _component_advisors_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/advisors.component */ "./src/app/component/advisors.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'home', component: _component_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'customers', component: _component_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"] },
    { path: 'customers/:lastName', component: _component_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"] },
    { path: 'customer/:id', component: _component_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"] },
    { path: 'find-customer', component: _component_find_customer_component__WEBPACK_IMPORTED_MODULE_4__["FindCustomerComponent"] },
    { path: 'edit-customer/:id', component: _component_edit_customer_component__WEBPACK_IMPORTED_MODULE_6__["EditCustomerComponent"] },
    { path: 'new-customer', component: _component_new_customer_component__WEBPACK_IMPORTED_MODULE_13__["NewCustomerComponent"] },
    { path: 'advisors', component: _component_advisors_component__WEBPACK_IMPORTED_MODULE_14__["AdvisorsComponent"] },
    { path: '**', component: _component_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'error', component: _component_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _component_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"],
                _component_find_customer_component__WEBPACK_IMPORTED_MODULE_4__["FindCustomerComponent"],
                _component_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"],
                _component_edit_customer_component__WEBPACK_IMPORTED_MODULE_6__["EditCustomerComponent"],
                _component_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _component_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
                _component_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _component_new_customer_component__WEBPACK_IMPORTED_MODULE_13__["NewCustomerComponent"],
                _component_advisors_component__WEBPACK_IMPORTED_MODULE_14__["AdvisorsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/advisors.component.ts":
/*!*************************************************!*\
  !*** ./src/app/component/advisors.component.ts ***!
  \*************************************************/
/*! exports provided: AdvisorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisorsComponent", function() { return AdvisorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _domain_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain-name */ "./src/app/domain-name.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdvisorsComponent = /** @class */ (function () {
    function AdvisorsComponent(http, router) {
        this.http = http;
        this.router = router;
        this.isLoading = true;
    }
    AdvisorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(_domain_name__WEBPACK_IMPORTED_MODULE_3__["domainName"] + "/api/advisors").subscribe(function (values) {
            _this.isLoading = false;
            _this.advisors = values;
        });
    };
    AdvisorsComponent.prototype.viewAsXml = function () {
        window.open('/api/advisors');
    };
    AdvisorsComponent.prototype.viewAsJson = function () {
        window.open('/api/advisors');
    };
    AdvisorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "advisors",
            template: "\n    <section class=\"portfolio\" id=\"portfolio\">\n      <div class=\"container\">\n        <h2 class=\"text-uppercase text-secondary mb-0\">Advisors</h2>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-lg-4\">\n            <div class=\"portfolio-item-caption d-flex position-absolute h-100 w-100\">\n              <div class=\"portfolio-item-caption-content my-auto w-100 text-white\">\n                <i class=\"fas fa-search-plus fa-3x\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <div class=\"container xd-container\" *ngIf=\"!isLoading\">\n      <table id=\"advisorsTable\" class=\"table table-striped\">\n        <thead>\n        <tr>\n          <th>Name</th>\n          <th>Specialties</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let advisor of advisors\">\n          <td>{{advisor.firstName}} {{advisor.lastName}}</td>\n          <td *ngIf=\"advisor.specialties.length === 0\">none</td>\n          <td *ngIf=\"advisor.specialties.length !== 0\">{{advisor.specialties[0].name}}</td>\n        </tr>\n        </tbody>\n      </table>\n\n      <table class=\"table-buttons\">\n        <tbody>\n        <tr>\n          <td>\n            <a (click)=\"viewAsXml()\">View as XML</a>\n          </td>\n          <td>\n            <a (click)=\"viewAsJson()\">View as JSON</a>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdvisorsComponent);
    return AdvisorsComponent;
}());



/***/ }),

/***/ "./src/app/component/customer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/component/customer.component.ts ***!
  \*************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _domain_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain-name */ "./src/app/domain-name.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.isLoading = true;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.http.get(_domain_name__WEBPACK_IMPORTED_MODULE_3__["domainName"] + "/api/customers/" + this.id).subscribe(function (value) {
            console.info(value);
            _this.isLoading = false;
            _this.client = value;
        });
    };
    CustomerComponent.prototype.editCustomer = function () {
        this.router.navigate(["/edit-customer/" + this.id]);
    };
    CustomerComponent.prototype.addNewCard = function () {
        // TODO
    };
    CustomerComponent.prototype.editCard = function () {
        // TODO
    };
    CustomerComponent.prototype.addPayment = function () {
        // TODO
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "customer",
            template: "\n    <section class=\"portfolio\" id=\"portfolio\">\n      <div class=\"container\">\n        <h2 class=\"text-uppercase text-secondary mb-0\">Customer Information</h2>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-lg-4\">\n            <div class=\"portfolio-item-caption d-flex position-absolute h-100 w-100\">\n              <div class=\"portfolio-item-caption-content my-auto w-100 text-white\">\n                <i class=\"fas fa-search-plus fa-3x\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <div class=\"container-fluid\" *ngIf=\"!isLoading\">\n      <div class=\"container xd-container\">\n        <table class=\"table table-striped\">\n          <tbody>\n          <tr>\n            <th>Name</th>\n            <td><b>{{client.firstName}} {{client.lastName}}</b></td>\n          </tr>\n          <tr>\n            <th>Address</th>\n            <td>{{client.address}}</td>\n          </tr>\n          <tr>\n            <th>City</th>\n            <td>{{client.city}}</td>\n          </tr>\n          <tr>\n            <th>Telephone</th>\n            <td>{{client.telephone}}</td>\n          </tr>\n          </tbody>\n        </table>\n\n        <a (click)=\"editCustomer()\" class=\"btn btn-default\">Edit Customer</a>\n\n        <a (click)=\"addNewCard()\" class=\"btn btn-default\">Add New Card</a>\n\n        <br>\n        <br>\n        <br>\n        <h2>Cards and Payments</h2>\n\n        <table class=\"table table-striped\">\n          <tbody>\n          <tr *ngFor=\"let card of client.cards\">\n            <td valign=\"top\">\n              <dl class=\"dl-horizontal\">\n                <dt>Name</dt>\n                <dd>{{card.name}}</dd>\n                <dt>Birth Date</dt>\n                <dd>{{card.birthDate}}</dd>\n                <dt>Type</dt>\n                <dd>{{card.type.name}}</dd>\n              </dl>\n            </td>\n            <td valign=\"top\">\n              <table class=\"table-condensed\">\n                <thead>\n                <tr>\n                  <th>Payment Date</th>\n                  <th>Description</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <td>2015-09-04</td>\n                  <td>Monoprix</td>\n                </tr>\n                <tr>\n                  <td>\n                    <a (click)=\"editCard()\">Edit Card</a>\n                  </td>\n                  <td>\n                    <a (click)=\"addPayment()\">Add Payment</a>\n                  </td>\n                </tr>\n                </tbody>\n              </table>\n            </td>\n          </tr>\n\n          </tbody>\n        </table>\n\n      </div>\n    </div>"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/component/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _domain_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain-name */ "./src/app/domain-name.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(http, route) {
        this.http = http;
        this.route = route;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var searchName = this.route.snapshot.paramMap.get('lastName');
        console.info(searchName);
        if (searchName !== undefined && searchName !== "" && searchName !== null) {
            this.http.get(_domain_name__WEBPACK_IMPORTED_MODULE_2__["domainName"] + "/api/customers/_search?name=" + searchName).subscribe(function (data) { return _this.customers = data; });
        }
        else {
            this.http.get(_domain_name__WEBPACK_IMPORTED_MODULE_2__["domainName"] + "/api/customers").subscribe(function (data) { return _this.customers = data; });
        }
    };
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "customers",
            template: "\n    <section class=\"portfolio\" id=\"portfolio\">\n      <div class=\"container\">\n        <h2 class=\"text-uppercase text-secondary mb-0\">Customers</h2>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-lg-4\">\n            <div class=\"portfolio-item-caption d-flex position-absolute h-100 w-100\">\n              <div class=\"portfolio-item-caption-content my-auto w-100 text-white\">\n                <i class=\"fas fa-search-plus fa-3x\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <div class=\"container-fluid\">\n      <div class=\"container xd-container\">\n\n        <table id=\"customersTable\" class=\"table table-striped\">\n          <thead>\n          <tr>\n            <th style=\"width: 150px;\">Name</th>\n            <th style=\"width: 200px;\">Address</th>\n            <th>City</th>\n            <th style=\"width: 120px\">Telephone</th>\n            <th>Cards</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let customer of customers\">\n            <td>\n              <a routerLink=\"/customer/{{customer?.id}}\">{{customer.lastName}}</a>\n            </td>\n            <td>\n              {{customer?.address}}\n            </td>\n            <td>\n              {{customer?.city}}\n            </td>\n            <td>\n              {{customer?.telephone}}\n            </td>\n            <td>\n              <div *ngFor=\"let card of customer.cards\">{{card?.name}} /</div>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/component/edit-customer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/edit-customer.component.ts ***!
  \******************************************************/
/*! exports provided: EditCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCustomerComponent", function() { return EditCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _domain_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain-name */ "./src/app/domain-name.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditCustomerComponent = /** @class */ (function () {
    function EditCustomerComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.isLoading = true;
    }
    EditCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.http.get(_domain_name__WEBPACK_IMPORTED_MODULE_3__["domainName"] + "/api/customers/" + this.id).subscribe(function (value) {
            _this.isLoading = false;
            _this.client = value;
        });
    };
    EditCustomerComponent.prototype.updateCustomer = function () {
        var _this = this;
        console.info(this.client);
        this.http.post(_domain_name__WEBPACK_IMPORTED_MODULE_3__["domainName"] + "/api/customers/" + this.client.id + "/edit", this.client).subscribe(function () { return _this.router.navigate(['/customers']); });
    };
    EditCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "edit-customer",
            template: "\n    <section class=\"portfolio\" id=\"portfolio\">\n      <div class=\"container\">\n        <h2 class=\"text-uppercase text-secondary mb-0\">Customer</h2>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-lg-4\">\n            <div class=\"portfolio-item-caption d-flex position-absolute h-100 w-100\">\n              <div class=\"portfolio-item-caption-content my-auto w-100 text-white\">\n                <i class=\"fas fa-search-plus fa-3x\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <div class=\"container-fluid\" *ngIf=\"!isLoading\">\n      <div class=\"container xd-container\">\n        <form id=\"add-customer-form\" class=\"form-horizontal\">\n          <div class=\"form-group has-feedback\">\n\n\n            <div class=\"form-group \">\n              <label class=\"col-sm-2 control-label\">First Name</label>\n\n              <div class=\"col-sm-10\">\n                <input id=\"firstName\" name=\"firstName\" class=\"form-control\" type=\"text\" [(ngModel)]=\"client.firstName\">\n\n                <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n\n              </div>\n            </div>\n\n\n            <div class=\"form-group \">\n              <label class=\"col-sm-2 control-label\">Last Name</label>\n\n              <div class=\"col-sm-10\">\n                <input id=\"lastName\" name=\"lastName\" class=\"form-control\" type=\"text\" [(ngModel)]=\"client.lastName\">\n\n                <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n\n\n              </div>\n            </div>\n\n\n            <div class=\"form-group \">\n              <label class=\"col-sm-2 control-label\">Address</label>\n\n              <div class=\"col-sm-10\">\n                <input id=\"address\" name=\"address\" class=\"form-control\" type=\"text\" [(ngModel)]=\"client.address\">\n\n                <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n\n\n              </div>\n            </div>\n\n\n            <div class=\"form-group \">\n              <label class=\"col-sm-2 control-label\">City</label>\n\n              <div class=\"col-sm-10\">\n                <input id=\"city\" name=\"city\" class=\"form-control\" type=\"text\" [(ngModel)]=\"client.city\">\n\n                <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n\n\n              </div>\n            </div>\n\n\n            <div class=\"form-group \">\n              <label class=\"col-sm-2 control-label\">Telephone</label>\n\n              <div class=\"col-sm-10\">\n                <input id=\"telephone\" name=\"telephone\" class=\"form-control\" type=\"text\" [(ngModel)]=\"client.telephone\">\n\n                <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-10\">\n              <button class=\"btn btn-default\" (click)=\"updateCustomer()\">Update Customer</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditCustomerComponent);
    return EditCustomerComponent;
}());



/***/ }),

/***/ "./src/app/component/error.component.ts":
/*!**********************************************!*\
  !*** ./src/app/component/error.component.ts ***!
  \**********************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "error",
            template: "\n    <section class=\"portfolio\" id=\"portfolio\">\n      <div class=\"container\">\n        <h2 class=\"text-uppercase text-secondary mb-0\">Error !</h2>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-lg-4\">\n            <div class=\"portfolio-item-caption d-flex position-absolute h-100 w-100\">\n              <div class=\"portfolio-item-caption-content my-auto w-100 text-white\">\n                <i class=\"fas fa-search-plus fa-3x\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <div class=\"container xd-container\"><h2>Something happened...</h2>\n  <p>Expected: controller used to showcase what happens when an exception is thrown</p>\n</div>"
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/component/find-customer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/find-customer.component.ts ***!
  \******************************************************/
/*! exports provided: FindCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindCustomerComponent", function() { return FindCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FindCustomerComponent = /** @class */ (function () {
    function FindCustomerComponent(router) {
        this.router = router;
        this.searchName = "";
    }
    FindCustomerComponent.prototype.goToCustomers = function () {
        this.router.navigate([this.searchName !== "" ? "/customers/" + this.searchName : "/customers"]);
    };
    FindCustomerComponent.prototype.addCustomer = function () {
        this.router.navigate(["/new-customer"]);
    };
    FindCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "find-customer",
            template: "\n    <section class=\"portfolio\" id=\"portfolio\">\n      <div class=\"container\">\n        <h2 class=\"text-uppercase text-secondary mb-0\">Find Customers</h2>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-lg-4\">\n            <div class=\"portfolio-item-caption d-flex position-absolute h-100 w-100\">\n              <div class=\"portfolio-item-caption-content my-auto w-100 text-white\">\n                <i class=\"fas fa-search-plus fa-3x\"></i>\n                <form id=\"search-customer-form\" class=\"form-horizontal\">\n                  <div class=\"form-group\">\n                    <div class=\"control-group\" id=\"lastName\">\n                      <label class=\"col-sm-2 control-label\">Last name </label>\n                        <input id=\"lastName\" name=\"lastName\" class=\"form-control\" value=\"\" size=\"30\" maxlength=\"80\"\n                               type=\"text\"><span class=\"help-inline\"></span>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <button (click)=\"goToCustomers()\" class=\"btn btn-primary btn-lg rounded-pill\">Find Customer</button>\n                  </div>\n                </form>\n                <br>\n                <a class=\"btn btn-primary btn-lg rounded-pill\" (click)=\"addCustomer()\">Add Customer</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    "
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FindCustomerComponent);
    return FindCustomerComponent;
}());



/***/ }),

/***/ "./src/app/component/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/component/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "home",
            template: "\n    <section class=\"portfolio\" id=\"portfolio\">\n      <div class=\"container\">\n        <h2 class=\"text-center text-uppercase text-secondary mb-0\">Home !</h2>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-lg-4\">\n            <div class=\"portfolio-item-caption d-flex position-absolute h-100 w-100\">\n              <div class=\"portfolio-item-caption-content my-auto w-100 text-center text-white\">\n                <i class=\"fas fa-search-plus fa-3x\"></i>\n              </div>\n            </div>\n            <img class=\"img-fluid\" src=\"assets/congrats.png\" alt=\"\">\n          </div>\n        </div>\n      </div>\n    </section>"
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/navbar.component.ts":
/*!***********************************************!*\
  !*** ./src/app/component/navbar.component.ts ***!
  \***********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "navbar",
            template: "\n    <nav class=\"navbar navbar-expand-lg bg-secondary fixed-top text-uppercase navbar-shrink\" id=\"mainNav\" role=\"navigation\">\n      <div class=\"container\">\n        <a class=\"navbar-brand js-scroll-trigger\" href=\"/containerbank/\"><span>Container Bank</span></a>\n        <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\">\n          <ul class=\"navbar-nav ml-auto\">\n\n\n            <li class=\"nav-item mx-0 mx-lg-1\">\n              <a routerLink=\"/home\" title=\"home page\" routerLinkActive=\"active\"\n                 class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\">\n\n                Home\n\n              </a>\n            </li>\n\n\n            <li class=\"nav-item mx-0 mx-lg-1\">\n              <a routerLink=\"/find-customer\" title=\"find customer\" routerLinkActive=\"active\"\n                 class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\">\n\n                Find customer\n\n              </a>\n            </li>\n\n\n            <li class=\"nav-item mx-0 mx-lg-1\">\n              <a routerLink=\"/advisors\" title=\"advisors\"  routerLinkActive=\"active\"\n                 class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\">\n                Advisors\n\n              </a>\n            </li>\n\n\n            <li class=\"nav-item mx-0 mx-lg-1\">\n              <a routerLink=\"/error\" class=\"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger\" routerLinkActive=\"active\"\n                 title=\"trigger a RuntimeException to see how it is handled\">\n                Error\n              </a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n    </nav>"
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/component/new-customer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/component/new-customer.component.ts ***!
  \*****************************************************/
/*! exports provided: NewCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCustomerComponent", function() { return NewCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Customer */ "./src/app/model/Customer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _domain_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain-name */ "./src/app/domain-name.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewCustomerComponent = /** @class */ (function () {
    function NewCustomerComponent(http, router) {
        this.http = http;
        this.router = router;
        this.client = new _model_Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
    }
    NewCustomerComponent.prototype.addCustomer = function () {
        var _this = this;
        this.http.post(_domain_name__WEBPACK_IMPORTED_MODULE_4__["domainName"] + "/api/customers/new", this.client).subscribe(function () { return _this.router.navigate(['/customers']); });
    };
    NewCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "new-customer",
            template: "\n    <section class=\"portfolio\" id=\"portfolio\">\n      <div class=\"container\">\n        <h2 class=\"text-uppercase text-secondary mb-0\">New Customers</h2>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-lg-4\">\n            <div class=\"portfolio-item-caption d-flex position-absolute h-100 w-100\">\n              <div class=\"portfolio-item-caption-content my-auto w-100 text-white\">\n                <i class=\"fas fa-search-plus fa-3x\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <div class=\"container-fluid\">\n      <div class=\"container xd-container\">\n        <form id=\"add-customer-form\" class=\"form-horizontal\">\n          <div class=\"form-group has-feedback\">\n\n\n            <div class=\"form-group \">\n              <label class=\"col-sm-2 control-label\">First Name</label>\n\n              <div class=\"col-sm-10\">\n                <input id=\"firstName\" name=\"firstName\" class=\"form-control\" type=\"text\" [(ngModel)]=\"client.firstName\">\n\n\n              </div>\n            </div>\n\n\n            <div class=\"form-group \">\n              <label class=\"col-sm-2 control-label\">Last Name</label>\n\n              <div class=\"col-sm-10\">\n                <input id=\"lastName\" name=\"lastName\" class=\"form-control\" type=\"text\" [(ngModel)]=\"client.lastName\">\n\n\n              </div>\n            </div>\n\n\n            <div class=\"form-group \">\n              <label class=\"col-sm-2 control-label\">Address</label>\n\n              <div class=\"col-sm-10\">\n                <input id=\"address\" name=\"address\" class=\"form-control\" type=\"text\" [(ngModel)]=\"client.address\">\n\n\n              </div>\n            </div>\n\n\n            <div class=\"form-group \">\n              <label class=\"col-sm-2 control-label\">City</label>\n\n              <div class=\"col-sm-10\">\n                <input id=\"city\" name=\"city\" class=\"form-control\" type=\"text\" [(ngModel)]=\"client.city\">\n\n\n              </div>\n            </div>\n\n\n            <div class=\"form-group \">\n              <label class=\"col-sm-2 control-label\">Telephone</label>\n\n              <div class=\"col-sm-10\">\n                <input id=\"telephone\" name=\"telephone\" class=\"form-control\" type=\"text\" [(ngModel)]=\"client.telephone\">\n\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-10\">\n              <button class=\"btn btn-default\" type=\"submit\" (click)=\"addCustomer()\">Add Customer</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewCustomerComponent);
    return NewCustomerComponent;
}());



/***/ }),

/***/ "./src/app/domain-name.ts":
/*!********************************!*\
  !*** ./src/app/domain-name.ts ***!
  \********************************/
/*! exports provided: domainName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domainName", function() { return domainName; });
var domainName = ""; // environment.production ? "" : "http://localhost:8090";


/***/ }),

/***/ "./src/app/model/Customer.ts":
/*!***********************************!*\
  !*** ./src/app/model/Customer.ts ***!
  \***********************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(id, firstName, lastName, address, city, telephone, cards) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.telephone = telephone;
        this.cards = cards;
    }
    return Customer;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/hackathon/hackathon/pacificathon/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map