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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  /*padding-top: 300px;*/\n  /*padding-left: 550px;*/\n  text-align: center;\n  /*vertical-align: center;*/\n  /*width: 100%;*/\n  /*height: 200px;*/\n  /*display: flex;*/\n  padding-top: 17%;\n}\n\n.button {\n  display: inline-block;\n  padding: 15px 25px;\n  /*font-size: 24px;*/\n  font-size: 100px;\n  font-family: \"Lucida Console\", Monaco, monospace;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #4CAF50;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 9px #999;\n}\n\n.button:hover {\n  background-color: #3e8e41\n}\n\n.button:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"wrapper\">-->\n<!--<button class=\"button\" (click)=\"myFunction2()\">Click Me</button>-->\n<!--</div>-->\n<app-download-zip-form></app-download-zip-form>\n"

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
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/lib/index.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jszip_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jszip-utils */ "./node_modules/jszip-utils/lib/index.js");
/* harmony import */ var jszip_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jszip_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pour_juliane__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pour_juliane */ "./src/app/pour_juliane.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
    }
    AppComponent.prototype.test = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/pdf');
        return this.http.get('https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_0_593740c655564e9aa515f160330cc4d8.pdf', {
            headers: headers,
            responseType: 'blob'
        });
    };
    AppComponent.prototype.myFunction2 = function () {
        var zip = new jszip__WEBPACK_IMPORTED_MODULE_1__();
        var count = 0;
        var zipFilename = 'zipFilename.zip';
        var urls = [
            'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_0_593740c655564e9aa515f160330cc4d8.pdf',
            'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_1_46440702adde44e4aa0a783abcdbc31f.pdf',
            'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_10_f337163d6fac43769197efb6290fe114.pdf',
            'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_11_5a06a3b3fffa442e9f3dd6faab1932ee.pdf',
            'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/EDP_00ce663c-ea32-4247-987e-42d4abf0c35d_1535975218_12_8a1a599c3314422bbe31bc9019fdc30d.pdf'
        ];
        var urls_2 = [
            'http://www.africau.edu/images/default/sample.pdf'
        ];
        /*
        *
          'https://bucket.advizeo.io/reports/Rapports_Hebdo_PDF_0184557c-6e7c-30fe-bca8-437e316d2e73_10_09_2018.zip',
          'https://bucket-dev.advizeo.io/reports/07a7c467-8997-35f6-a6c3-4ae62a10630d-report-2018-09-04T15-37-38.904.pdf',
        *
        *
        * */
        var urls_3 = [
            'https://bucket.advizeo.io/pictures/buildings/25a0c378-9f69-3254-a8c2-db2a1a4cb3fe?date=1536314758989',
            'https://bucket.advizeo.io/pictures/buildings/02d41507-0e73-4a6b-9e6e-ad15c292452b?date=1535960542554',
            'https://bucket.advizeo.io/pictures/buildings/8cdebc62-e044-34f0-8ffa-992881856612?date=1536314822516',
            'https://bucket.advizeo.io/pictures/buildings/11a7f8d2-619d-389a-833f-4c9e94e2ac1a?date=1536314485468',
            'https://bucket.advizeo.io/pictures/buildings/4faf8f06-8c08-38bb-92ae-b11ab5f95c08?date=1535978230397',
        ];
        var urls_4 = [
            'https://bucket-dev.advizeo.io/reports/07a7c467-8997-35f6-a6c3-4ae62a10630d-report-2018-09-04T15-37-38.904.pdf',
            'https://bucket.advizeo.io/pictures/buildings/02d41507-0e73-4a6b-9e6e-ad15c292452b?date=1535960542554',
        ];
        var ready = 0;
        // let urls_5 = [...urlsPourJulaine];
        _pour_juliane__WEBPACK_IMPORTED_MODULE_5__["urlsPourJulaine"].forEach(function (url) {
            count++;
            var filename = url.split('/');
            // loading a file and add it in a zip file
            jszip_utils__WEBPACK_IMPORTED_MODULE_4__["getBinaryContent"](url, function (err, data) {
                //if (err) {
                //throw err; // or handle the error
                //}
                zip.file(filename[filename.length - 1], data, { binary: true });
                ready++;
                // Make the final zip file
                if (ready == _pour_juliane__WEBPACK_IMPORTED_MODULE_5__["urlsPourJulaine"].length) {
                    zip.generateAsync({ type: 'blob' })
                        .then(function (content) {
                        Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(content, zipFilename);
                    });
                }
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _download_zip_form_download_zip_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./download-zip-form/download-zip-form.component */ "./src/app/download-zip-form/download-zip-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'coupon', component: _download_zip_form_download_zip_form_component__WEBPACK_IMPORTED_MODULE_5__["DownloadZipFormComponent"], pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _download_zip_form_download_zip_form_component__WEBPACK_IMPORTED_MODULE_5__["DownloadZipFormComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/download-zip-form/download-zip-form.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/download-zip-form/download-zip-form.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.check{*/\n/*display: block;*/\n/*}*/\n/*table {*/\n/*overflow: auto;*/\n/*font-family: arial, sans-serif;*/\n/*border-collapse: collapse;*/\n/*width: 100%;*/\n/*}*/\n/*td, th {*/\n/*border: 1px solid #dddddd;*/\n/*text-align: left;*/\n/*padding: 8px;*/\n/*}*/\n/*tr:nth-child(even) {*/\n/*background-color: #dddddd;*/\n/*}*/\np {\n  font-family: Lato;\n}\n"

/***/ }),

/***/ "./src/app/download-zip-form/download-zip-form.component.html":
/*!********************************************************************!*\
  !*** ./src/app/download-zip-form/download-zip-form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<p>User uid : {{userUid}}</p>-->\n<!--<p>Date : {{date}}</p>-->\n\n<div class=\"container\">\n  <!--<div *ngFor=\"let item of data; let i = index;\">-->\n  <!--<input type=\"checkbox\" [checked]=\"item.checked\" (change)=\"onChange($event, i, item)\">-->\n  <!--{{item.label}}-->\n  <!--</div>-->\n\n  <br>\n\n  <!--<strong>Last action:</strong> {{lastAction || 'untouched' }}-->\n\n  <!--<h4>JSON data:</h4>-->\n  <pre>\n<!--{{data | json}}-->\n</pre>\n</div>\n\n\n<mat-table [dataSource]=\"dataSource\">\n\n  <ng-container matColumnDef=\"buildingName\">\n    <mat-header-cell *matHeaderCellDef>Building name</mat-header-cell>\n    <mat-cell *matCellDef=\"let coupon\"> {{ coupon.buildingName }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"pdf\">\n    <mat-header-cell *matHeaderCellDef>\n      PDF (select/unselect all)\n      <input type=\"checkbox\" [checked]=\"true\" (change)=\"onChangePdfAll($event)\">\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let coupon\">\n      <input type=\"checkbox\" [checked]=\"coupon.pdfInfo.checked\" (change)=\"onChangeCoupon($event, coupon.pdfInfo)\">\n    </mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"xlsx\">\n    <mat-header-cell *matHeaderCellDef>\n      XLSX (select/unselect all)\n      <input type=\"checkbox\" [checked]=\"true\" (change)=\"onChangeXlsxAll($event)\">\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let coupon\">\n      <input type=\"checkbox\" [checked]=\"coupon.xlsxInfo.checked\" (change)=\"onChangeCoupon($event, coupon.xlsxInfo)\">\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n</mat-table>\n\n<input type=\"submit\" value=\"Télécharger\" (click)=\"submit()\">\n\n<div *ngIf=\"allDatasource\">\n  <pre>{{ allDatasource | json }}</pre>\n</div>\n\n<div *ngIf=\"submitDataTest\">\n  <pre>{{submitDataTest | json}}</pre>\n</div>\n"

/***/ }),

/***/ "./src/app/download-zip-form/download-zip-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/download-zip-form/download-zip-form.component.ts ***!
  \******************************************************************/
/*! exports provided: DownloadZipFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadZipFormComponent", function() { return DownloadZipFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_advizeo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/advizeo.service */ "./src/app/services/advizeo.service.ts");
/* harmony import */ var _services_fetch_and_zip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/fetch-and-zip.service */ "./src/app/services/fetch-and-zip.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ovhUrlPrefix = 'https://storage.de1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ReportsDev/';
var DownloadZipFormComponent = /** @class */ (function () {
    function DownloadZipFormComponent(formBuilder, route, advizeoService, fetchAndZipService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.advizeoService = advizeoService;
        this.fetchAndZipService = fetchAndZipService;
        this.displayedColumns = ['buildingName', 'pdf', 'xlsx'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.buildingsMap = new Map();
        this.data = [
            { label: 'one', checked: false },
            { label: 'two', checked: false },
            { label: 'three', checked: true },
            { label: 'four', checked: false },
            { label: 'five', checked: false }
        ];
    }
    DownloadZipFormComponent.prototype.constructCheckboxes = function () {
        var _this = this;
        // this.checkboxData = Array.from(this.buildingsMap.values());
        this.checkboxData = Array.from(this.buildingsMap);
        this.buildingNames = new Array();
        this.buildingPdfUrls = new Array();
        this.buildingXlsxUrls = new Array();
        this.buildingPdfDatasource = new Array();
        this.buildingXlsxDatasource = new Array();
        this.allDatasource = new Array();
        for (var _i = 0, _a = this.checkboxData; _i < _a.length; _i++) {
            var item = _a[_i];
            var details = item[1];
            var buildingName = details.buildingName;
            var pdfUrl = details.fileDetails.pdfUrl;
            var xlsxUrl = details.fileDetails.xlsxUrl;
            this.buildingNames.push(buildingName);
            this.buildingPdfUrls.push(pdfUrl);
            this.buildingXlsxUrls.push(xlsxUrl);
        }
        this.buildingPdfUrls.forEach(function (value) {
            return _this.buildingPdfDatasource.push({ label: value, checked: true });
        });
        this.buildingXlsxUrls.forEach(function (value) {
            _this.buildingXlsxDatasource.push({ label: value, checked: true });
        });
        this.buildingNames.forEach(function (value, index) {
            _this.allDatasource.push({
                buildingName: value,
                pdfInfo: __assign({}, _this.buildingPdfDatasource[index]),
                xlsxInfo: __assign({}, _this.buildingXlsxDatasource[index])
            });
        });
        this.dataSource.data = this.allDatasource;
    };
    DownloadZipFormComponent.prototype.submit = function () {
        var _this = this;
        var the_final_urls = new Array();
        this.allDatasource.forEach(function (value) {
            var buildingName = _this.prettifyBuildingName(value['buildingName']);
            var pdfInfo = value['pdfInfo'];
            var xlsxInfo = value['xlsxInfo'];
            if (pdfInfo['checked'] === true) {
                the_final_urls.push({
                    url: pdfInfo['label'],
                    fileType: 'pdf',
                    buildingName: buildingName
                });
            }
            if (xlsxInfo['checked'] === true) {
                the_final_urls.push({
                    url: xlsxInfo['label'],
                    fileType: 'xlsx',
                    buildingName: buildingName
                });
            }
        });
        this.submitDataTest = the_final_urls;
    };
    DownloadZipFormComponent.prototype.onChangeCoupon = function (event, item) {
        item.checked = !item.checked;
    };
    DownloadZipFormComponent.prototype.onChangePdfAll = function ($event) {
        this.allDatasource.forEach(function (value) {
            return value['pdfInfo'].checked = $event.target.checked;
        });
    };
    DownloadZipFormComponent.prototype.onChangeXlsxAll = function ($event) {
        this.allDatasource.forEach(function (value) {
            return value['xlsxInfo'].checked = $event.target.checked;
        });
    };
    DownloadZipFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Callbakc hell, to be fixed
        // todo, to remove these to environment variables (gérer les varaibles d'environnement dans un propre fichier)
        this.advizeoService.authenticate('demo@advizeo.io', 'Qzdqzd94')
            .then(function (res) {
            console.log('Authentification okay!');
            // We can only do this after authentification okay
            // subscribe to router event
            _this.route.queryParams.subscribe(function (params) {
                _this.userUid = params['userUid'];
                _this.date = params['date'];
                // Here, we use the fetch and zip service
                _this.fetchAndZipService
                    .getBuildingUidsForOneUser(_this.userUid)
                    .then(function (res) {
                    console.log('The result is: ', res);
                    _this.buildingsList = res.buildings;
                    _this.populateMaps();
                })
                    .catch(function (reject) {
                    console.log('getting building uids for user failed!', reject);
                });
            });
        })
            .catch(function (reject) {
            console.log('Authentification failed!');
        });
    };
    DownloadZipFormComponent.prototype.populateMaps = function () {
        var _this = this;
        this.buildingsList.forEach(function (building) {
            var buildingUid = building.uid;
            var buildingName = building.name;
            var pdfUrl = _this.composePdfUrl(buildingUid);
            var xlsxUrl = _this.composeXlsxUrl(buildingUid);
            var details = {};
            details.buildingName = buildingName;
            details.fileDetails = { pdfUrl: pdfUrl, xlsxUrl: xlsxUrl };
            _this.buildingsMap.set(buildingUid, details);
        });
        this.constructCheckboxes();
    };
    //todo, to be wrapped in a more general method
    DownloadZipFormComponent.prototype.composePdfUrl = function (buildingUid) {
        return ovhUrlPrefix + buildingUid + '-' + this.date + '.pdf';
    };
    //todo, to be wrapped in a more general method
    DownloadZipFormComponent.prototype.composeXlsxUrl = function (buildingUid) {
        return ovhUrlPrefix + buildingUid + '-' + this.date + '.xlsx';
    };
    DownloadZipFormComponent.prototype.couponCoupure = function () {
        alert('Bohao a appuyé sur le bouton !');
    };
    DownloadZipFormComponent.prototype.prettifyBuildingName = function (buildingName) {
        return buildingName.replace(' ', '-');
    };
    DownloadZipFormComponent.prototype.onChange = function (event, index, item) {
        item.checked = !item.checked;
        this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;
        console.log(index, event, item);
    };
    DownloadZipFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download-zip-form',
            template: __webpack_require__(/*! ./download-zip-form.component.html */ "./src/app/download-zip-form/download-zip-form.component.html"),
            styles: [__webpack_require__(/*! ./download-zip-form.component.css */ "./src/app/download-zip-form/download-zip-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_advizeo_service__WEBPACK_IMPORTED_MODULE_3__["AdvizeoService"],
            _services_fetch_and_zip_service__WEBPACK_IMPORTED_MODULE_4__["FetchAndZipService"]])
    ], DownloadZipFormComponent);
    return DownloadZipFormComponent;
}());



/***/ }),

/***/ "./src/app/pour_juliane.ts":
/*!*********************************!*\
  !*** ./src/app/pour_juliane.ts ***!
  \*********************************/
/*! exports provided: urlsPourJulaine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlsPourJulaine", function() { return urlsPourJulaine; });
var urlsPourJulaine = [
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_094390b8-de1f-4a87-bf9e-a17e8743f729_1535976249_17_276fb5857f7f455a8db4599c877a5f5c.PDF',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_094390b8-de1f-4a87-bf9e-a17e8743f729_1535976249_18_f44a8baa2d49496abcabb219354fd821.PDF',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_094390b8-de1f-4a87-bf9e-a17e8743f729_1535976249_26_dc4aa2a68d8948ffba94343b9768ae1d.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_094390b8-de1f-4a87-bf9e-a17e8743f729_1535976249_27_33e026e123fc433e9f5dc0866291faa2.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_094390b8-de1f-4a87-bf9e-a17e8743f729_1535976249_29_8633ba840ca34748b626254e81ca7745.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_094390b8-de1f-4a87-bf9e-a17e8743f729_1535976249_30_37197d1951494e8fbf57e9f1f6b0540f.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_094390b8-de1f-4a87-bf9e-a17e8743f729_1535976249_31_4bd07395f1674efeb0710da4358ffcec.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_094390b8-de1f-4a87-bf9e-a17e8743f729_1535976249_32_27d7566517ef4e92acb9cbdac32d5906.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_094390b8-de1f-4a87-bf9e-a17e8743f729_1535976249_33_0df52540769043ef9cd5c96aa159420b.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_094390b8-de1f-4a87-bf9e-a17e8743f729_1535976249_36_83432dc7acb74c34a79e6db126f949c5.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_094390b8-de1f-4a87-bf9e-a17e8743f729_1535976249_37_563f56f12f11437ba16ed810be6e2504.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_094390b8-de1f-4a87-bf9e-a17e8743f729_1535976249_38_c3e09ca1ad5746ebaec20acaf05e654a.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_094390b8-de1f-4a87-bf9e-a17e8743f729_1535976249_39_66e61ce17e5d4162a62e670c5c71a98c.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_094390b8-de1f-4a87-bf9e-a17e8743f729_1535976249_40_8937b1adcb494173bcd09e856804db50.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_094390b8-de1f-4a87-bf9e-a17e8743f729_1535976249_41_fe98795a8c4d466593b9218a64e6f4e3.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_094390b8-de1f-4a87-bf9e-a17e8743f729_1535976249_42_767e8b8981354319b2bc81596250eb2a.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_11f85eee-c801-4a53-889d-f7c3df8984bf_1535976249_17_b13b0c44d002423787b71494b47c07b5.PDF',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_11f85eee-c801-4a53-889d-f7c3df8984bf_1535976249_18_99afbb4d0d7c46cca2c32ab519a85663.PDF',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_11f85eee-c801-4a53-889d-f7c3df8984bf_1535976249_25_896b7a6523ed4bbb869a0370e0ca89ec.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_11f85eee-c801-4a53-889d-f7c3df8984bf_1535976249_30_958d2cf0a60849b392f85ea0f4fb443e.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_11f85eee-c801-4a53-889d-f7c3df8984bf_1535976249_31_92d65eb2a6354b0bb30930361ec3e64f.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_11f85eee-c801-4a53-889d-f7c3df8984bf_1535976249_32_a7f315b86f4f48aa83ee57b23d5df516.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_11f85eee-c801-4a53-889d-f7c3df8984bf_1535976249_36_d45818c61aea4ceca8f180461980c1eb.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_11f85eee-c801-4a53-889d-f7c3df8984bf_1535976249_37_0f52a916471f408e8b362e7318380f0f.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_11f85eee-c801-4a53-889d-f7c3df8984bf_1535976249_38_cb8c8e7e0616492ba35caa9021e3bd02.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_11f85eee-c801-4a53-889d-f7c3df8984bf_1535976249_39_129b8bc8368d432bbe5d1501fdacd583.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_11f85eee-c801-4a53-889d-f7c3df8984bf_1535976249_40_4e617af600c64c66876fd188f38fcddb.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_11f85eee-c801-4a53-889d-f7c3df8984bf_1535976249_41_0137e3203b7a47a391be083b05b9083b.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_19a3f5dd-c87a-4c5d-b891-2ebffe489062_1535976249_18_2f936da2ccff4b4fa62314e23ea9aa6e.PDF',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_19a3f5dd-c87a-4c5d-b891-2ebffe489062_1535976249_19_c9986ebb7e764c828992517f47aca956.PDF',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_19a3f5dd-c87a-4c5d-b891-2ebffe489062_1535976249_20_0d5621b108ae4886bbe9eab604ed3125.PDF',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_19a3f5dd-c87a-4c5d-b891-2ebffe489062_1535976249_22_fffef440de60465eaf933028b1af2a7a.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_19a3f5dd-c87a-4c5d-b891-2ebffe489062_1535976249_24_44c07e043383490091d4bb2f679424d5.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_19a3f5dd-c87a-4c5d-b891-2ebffe489062_1535976249_30_344464f667ae400b8b68a5babdf30e7f.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_19a3f5dd-c87a-4c5d-b891-2ebffe489062_1535976249_33_c065f885943d4efcb9f35dbb047cb26c.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_19a3f5dd-c87a-4c5d-b891-2ebffe489062_1535976249_34_a70fb9b7942d4aa39d563c5d6519a969.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_19a3f5dd-c87a-4c5d-b891-2ebffe489062_1535976249_37_6ecf988868fb46f4a9b65c04f5ad2198.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_19a3f5dd-c87a-4c5d-b891-2ebffe489062_1535976249_38_d8c1b5ebf8ea406fbe8b136e47d29297.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_19a3f5dd-c87a-4c5d-b891-2ebffe489062_1535976249_39_f2717867f7d14c7081c56bf5d67498ce.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_19a3f5dd-c87a-4c5d-b891-2ebffe489062_1535976249_40_3a6e46d47df34b34af6d4f853af00e36.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_19a3f5dd-c87a-4c5d-b891-2ebffe489062_1535976249_41_22d74c8c17624d8586dfb3d9ba80321e.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_19a3f5dd-c87a-4c5d-b891-2ebffe489062_1535976249_42_680d5815d5f24553981a1279986d031f.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_19a3f5dd-c87a-4c5d-b891-2ebffe489062_1535976249_43_dc8f94e59b794a5985f6ccaed9806e8c.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_18_24dd6d3bbd874c0e9c3a84b33f85d646.PDF',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_19_d116cb34438e474bad185b987f9d7374.PDF',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_20_900cf63867c14579a172388cd196899f.PDF',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_21_a0e1ec5ff3b341ffbc962d6de870042e.PDF',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_28_fda1f993f53f4366a800bd01aea0509e.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_30_b719546a38f74c38ad7441e104842858.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_31_9bb12c4a7e954e16828a9b341aa97fec.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_32_90f0944544f742cda294c27f19bcb5b1.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_33_16be0dd34d0145bb94788c42d9a010bc.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_34_69da8945c3914c63b72e7781c312ea4b.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_37_0777142fada8411f9e48f052845c7dba.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_38_1fb8c944723949ac81d4a3d63512dcf9.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_39_9da6d843446241d7ae23221ed2d98e95.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_40_423f675876424f28b262982ed4933f2b.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_41_6ae05ab10bdd475aaffedf88007337bd.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_42_dc251def20e8431ab169d06d211e106b.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_285a1115-9121-4254-a478-da254639e8c0_1535976249_43_3c2c27892c1244289935c571e2d17922.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_17_56d30385427e4c2eb24475295ddc4118.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_18_e5e3bac91a764a5c9c429286fd0220a2.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_19_03ddddc9bcc7463b9fd2cd71a12a08ef.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_20_ff4d3736478f440ebd8029354e420f67.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_23_e3f7c7a83af14ce6b7e74c6c1983ce55.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_24_351c8861b6d446ec804962f6e3a26d2f.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_26_cd0dd7d52e2841f4932c73e1fa154c03.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_28_0df4fccb17944a34aeb598e4cecc2ba3.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_29_80405bd38b3444069608a1c3366d5767.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_30_1ffac42bb98c46c3a90631e1b389bc8e.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_32_382e655dd3884fa78f1f7497c2d3ba28.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_33_4d606f22d8ee4a08983c2956323f7298.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_34_cfcfe60a77c3411fb3433b4829a4f44a.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_35_ef6a99053b5e4e5183a5dd68baad61d6.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_36_ed20c810ae6d426f99162d35ab549894.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_37_cbca7cbd68604d56bc2a3814af747513.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_38_5d16fd5d79e04a61ae11b57029178a95.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_39_6a6d1582ac1943d59f214f2ccc3617dd.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_4_7f2a206ec30645058d8beb67129ac6ba.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_40_8e9a865cd284493992061d1568e64b33.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_41_ce4c5eebb455425ab70a1315ebad2c87.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_42_784513d5b61b48899f8ea46d2d668eca.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_5_c91b29f7ac0e4a5386e05bbd4dbf7a9c.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_6_84065491108d452296a3f0602ff2c0ae.pdf',
    'https://storage.gra1.cloud.ovh.net/v1/AUTH_f7b0f9278bfc4f84a12fc56fa4999082/ProcessedInvoiceDev/total_2f6b72c3-6b68-4c79-a850-f8ab128f6fe5_1535983603_7_e10214244f0c4e5b87b78429c3ade227.pdf'
];


/***/ }),

/***/ "./src/app/services/advizeo.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/advizeo.service.ts ***!
  \*********************************************/
/*! exports provided: AdvizeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvizeoService", function() { return AdvizeoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var advizeoRootUri = 'https://api-dev.advizeo.io/api';
var AdvizeoService = /** @class */ (function () {
    function AdvizeoService(http) {
        this.http = http;
    }
    AdvizeoService_1 = AdvizeoService;
    AdvizeoService.prototype.authenticate = function (emailInput, passwordInput) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var email = btoa(emailInput);
            var password = btoa(passwordInput);
            _this.post('/authenticate', { user: { email: email, password: password } })
                .toPromise()
                .then(function (res) {
                console.log('authentification okay', res);
                if (res.status === 'OK') {
                    AdvizeoService_1.userUid = res.user.id;
                    AdvizeoService_1.accessToken = res.access_token;
                }
                resolve();
            })
                .catch(function (cause) {
                console.log('authentification failed', cause);
                AdvizeoService_1.userUid = null;
                AdvizeoService_1.accessToken = null;
                reject(cause);
            });
        });
    };
    AdvizeoService.prototype.getOptions = function (headers, params) {
        if (!headers) {
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        }
        if (AdvizeoService_1.accessToken) {
            headers = headers.set('Authorization', "Bearer " + AdvizeoService_1.accessToken);
        }
        if (AdvizeoService_1.userUid) {
            headers = headers.set('UserUid', AdvizeoService_1.userUid);
        }
        return headers;
    };
    AdvizeoService.prototype.get = function (route, params, headers) {
        headers = this.getOptions(headers, params);
        return this.http.get(advizeoRootUri + route, { headers: headers, params: params });
    };
    AdvizeoService.prototype.put = function (route, body, headers) {
        headers = this.getOptions(headers);
        return this.http.put(advizeoRootUri + route, body, { headers: headers });
    };
    AdvizeoService.prototype.post = function (route, body, headers) {
        headers = this.getOptions(headers);
        return this.http.post(advizeoRootUri + route, body, { headers: headers });
    };
    AdvizeoService.prototype.delete = function (route, body, headers) {
        headers = this.getOptions(headers);
        return this.http.delete(advizeoRootUri + route, { headers: headers });
    };
    AdvizeoService.prototype.patch = function (route, body, headers) {
        headers = this.getOptions(headers);
        return this.http.patch(advizeoRootUri + route, body, { headers: headers });
    };
    AdvizeoService = AdvizeoService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdvizeoService);
    return AdvizeoService;
    var AdvizeoService_1;
}());



/***/ }),

/***/ "./src/app/services/fetch-and-zip.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/fetch-and-zip.service.ts ***!
  \***************************************************/
/*! exports provided: FetchAndZipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchAndZipService", function() { return FetchAndZipService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _advizeo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advizeo.service */ "./src/app/services/advizeo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FetchAndZipService = /** @class */ (function () {
    function FetchAndZipService(advizeoService) {
        this.advizeoService = advizeoService;
    }
    FetchAndZipService.prototype.getBuildingUidsForOneUser = function (userUid) {
        return this.advizeoService
            .get("/v1/buildings?userUid=" + userUid)
            .toPromise();
    };
    FetchAndZipService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_advizeo_service__WEBPACK_IMPORTED_MODULE_1__["AdvizeoService"]])
    ], FetchAndZipService);
    return FetchAndZipService;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* 3rd party libraries */


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* 3rd party libraries */




/* our own custom components */
/* our own custom components */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                /* angular stuff */
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                /* 3rd party components */
                //****************************************************
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            declarations: [],
            exports: [
                /* angular stuff */
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                /* 3rd party components */
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
                /* our own custom components */
                // SomeCustomComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bohao/Desktop/tuto/zipTest/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map