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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.cards-main {\r\n\tpadding: 22px 0;\r\n}\r\n\r\n.search-panel {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(auto-fit, minmax(170px, 1fr));\r\n\tgap: 12px;\r\n\tpadding: 14px;\r\n\tmargin-bottom: 16px;\r\n\tborder-radius: 14px;\r\n\tbackground: rgba(255, 255, 255, 0.72);\r\n\tborder: 1px solid rgba(30, 51, 44, 0.12);\r\n}\r\n\r\n.search-field {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 6px;\r\n}\r\n\r\n.search-field label {\r\n\tfont-size: 0.8rem;\r\n\tfont-weight: 700;\r\n\tletter-spacing: 0.04em;\r\n\ttext-transform: uppercase;\r\n\tcolor: #2f4940;\r\n}\r\n\r\n.search-field select {\r\n\tpadding: 10px 12px;\r\n\tborder-radius: 10px;\r\n\tborder: 1px solid rgba(30, 51, 44, 0.2);\r\n\tbackground: #fff;\r\n\tcolor: #1f2d27;\r\n\tfont-size: 0.95rem;\r\n}\r\n\r\n.search-actions {\r\n\tdisplay: flex;\r\n\talign-items: flex-end;\r\n}\r\n\r\n.clear-button {\r\n\twidth: 100%;\r\n\tpadding: 10px 12px;\r\n\tborder: 1px solid rgba(31, 60, 47, 0.35);\r\n\tborder-radius: 10px;\r\n\tbackground: linear-gradient(135deg, #244636, #3f6f58);\r\n\tcolor: #fff;\r\n\tfont-weight: 700;\r\n\tcursor: pointer;\r\n}\r\n\r\n.cards-grid {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\r\n\tgap: 18px;\r\n}\r\n\r\n.model-gallery {\r\n\tmargin-bottom: 20px;\r\n\tpadding: 16px;\r\n\tborder-radius: 14px;\r\n\tbackground: rgba(255, 255, 255, 0.72);\r\n\tborder: 1px solid rgba(30, 51, 44, 0.12);\r\n}\r\n\r\n.model-gallery-header {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tgap: 12px;\r\n\tmargin-bottom: 12px;\r\n}\r\n\r\n.model-gallery h2 {\r\n\tmargin: 0 0 12px;\r\n\tfont-size: 1.2rem;\r\n}\r\n\r\n.back-button {\r\n\tpadding: 10px 14px;\r\n\tborder: 1px solid rgba(31, 60, 47, 0.35);\r\n\tborder-radius: 10px;\r\n\tbackground: linear-gradient(135deg, #6f7f77, #46544e);\r\n\tcolor: #fff;\r\n\tfont-weight: 700;\r\n\tcursor: pointer;\r\n}\r\n\r\n.model-gallery-grid {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(auto-fit, minmax(170px, 1fr));\r\n\tgap: 12px;\r\n}\r\n\r\n.model-gallery-grid img {\r\n\twidth: 100%;\r\n\theight: 160px;\r\n\t-o-object-fit: contain;\r\n\t   object-fit: contain;\r\n\tborder-radius: 12px;\r\n\tborder: 1px solid rgba(30, 51, 44, 0.1);\r\n\tbackground: #f2f2f2;\r\n}\r\n\r\n.book-card {\r\n\toverflow: hidden;\r\n\tborder-radius: 16px;\r\n\tbackground: rgba(255, 255, 255, 0.82);\r\n\tborder: 1px solid rgba(30, 51, 44, 0.1);\r\n\tbox-shadow: 0 10px 24px rgba(25, 40, 35, 0.12);\r\n\tcursor: pointer;\r\n}\r\n\r\n.card-image {\r\n\twidth: 100%;\r\n\theight: 180px;\r\n\t-o-object-fit: contain;\r\n\t   object-fit: contain;\r\n\tdisplay: block;\r\n\tbackground: #f2f2f2;\r\n}\r\n\r\n.card-content {\r\n\tpadding: 14px;\r\n}\r\n\r\n.card-content h2 {\r\n\tmargin: 0 0 8px;\r\n\tfont-size: 1.15rem;\r\n}\r\n\r\n.card-content p {\r\n\tmargin: 0;\r\n\tcolor: #354740;\r\n\tfont-size: 0.92rem;\r\n\tline-height: 1.45;\r\n}\r\n\r\n.status-message {\r\n\tmargin: 8px 0;\r\n\tcolor: #5b2d2d;\r\n\tfont-weight: 600;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n\t.search-panel {\r\n\t\tgrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n\t}\r\n\r\n\t.cards-grid {\r\n\t\tgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\r\n\t}\r\n}\r\n\r\n@media (max-width: 820px) {\r\n\t.search-panel {\r\n\t\tgrid-template-columns: 1fr;\r\n\t}\r\n\r\n\t.search-actions {\r\n\t\tjustify-content: stretch;\r\n\t}\r\n\r\n\t.clear-button {\r\n\t\tpadding: 12px 16px;\r\n\t}\r\n\r\n\t.cards-grid {\r\n\t\tgrid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\r\n\t\tgap: 14px;\r\n\t}\r\n\r\n\t.card-image,\r\n\t.model-gallery-grid img {\r\n\t\theight: auto;\r\n\t\taspect-ratio: 4 / 3;\r\n\t}\r\n\r\n\t.card-content {\r\n\t\tpadding: 12px;\r\n\t}\r\n\r\n\t.card-content h2 {\r\n\t\tfont-size: 1.05rem;\r\n\t}\r\n\r\n\t.card-content p {\r\n\t\tfont-size: 0.88rem;\r\n\t}\r\n}\r\n\r\n@media (max-width: 560px) {\r\n\t.search-panel {\r\n\t\tpadding: 12px;\r\n\t\tgap: 10px;\r\n\t}\r\n\r\n\t.search-field select {\r\n\t\tpadding: 12px 10px;\r\n\t}\r\n\r\n\t.model-gallery {\r\n\t\tpadding: 14px;\r\n\t}\r\n\r\n\t.model-gallery-header {\r\n\t\tflex-direction: column;\r\n\t\talign-items: stretch;\r\n\t}\r\n\r\n\t.back-button {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.card-image,\r\n\t.model-gallery-grid img {\r\n\t\tborder-radius: 10px;\r\n\t}\r\n\r\n\t.card-content {\r\n\t\tpadding: 10px;\r\n\t}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwyREFBMkQ7Q0FDM0QsU0FBUztDQUNULGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLHFDQUFxQztDQUNyQyx3Q0FBd0M7QUFDekM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFFBQVE7QUFDVDs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLHVDQUF1QztDQUN2QyxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLHdDQUF3QztDQUN4QyxtQkFBbUI7Q0FDbkIscURBQXFEO0NBQ3JELFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwyREFBMkQ7Q0FDM0QsU0FBUztBQUNWOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIscUNBQXFDO0NBQ3JDLHdDQUF3QztBQUN6Qzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsOEJBQThCO0NBQzlCLFNBQVM7Q0FDVCxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHdDQUF3QztDQUN4QyxtQkFBbUI7Q0FDbkIscURBQXFEO0NBQ3JELFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwyREFBMkQ7Q0FDM0QsU0FBUztBQUNWOztBQUVBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixvQkFBaUI7SUFBakIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQix1Q0FBdUM7Q0FDdkMsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixxQ0FBcUM7Q0FDckMsdUNBQXVDO0NBQ3ZDLDhDQUE4QztDQUM5QyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixvQkFBaUI7SUFBakIsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsU0FBUztDQUNULGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZHMtbWFpbiB7XHJcblx0cGFkZGluZzogMjJweCAwO1xyXG59XHJcblxyXG4uc2VhcmNoLXBhbmVsIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTcwcHgsIDFmcikpO1xyXG5cdGdhcDogMTJweDtcclxuXHRwYWRkaW5nOiAxNHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzAsIDUxLCA0NCwgMC4xMik7XHJcbn1cclxuXHJcbi5zZWFyY2gtZmllbGQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDZweDtcclxufVxyXG5cclxuLnNlYXJjaC1maWVsZCBsYWJlbCB7XHJcblx0Zm9udC1zaXplOiAwLjhyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Y29sb3I6ICMyZjQ5NDA7XHJcbn1cclxuXHJcbi5zZWFyY2gtZmllbGQgc2VsZWN0IHtcclxuXHRwYWRkaW5nOiAxMHB4IDEycHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMwLCA1MSwgNDQsIDAuMik7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRjb2xvcjogIzFmMmQyNztcclxuXHRmb250LXNpemU6IDAuOTVyZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtYWN0aW9ucyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5jbGVhci1idXR0b24ge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDEwcHggMTJweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMxLCA2MCwgNDcsIDAuMzUpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI0NDYzNiwgIzNmNmY1OCk7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkcy1ncmlkIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjIwcHgsIDFmcikpO1xyXG5cdGdhcDogMThweDtcclxufVxyXG5cclxuLm1vZGVsLWdhbGxlcnkge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0cGFkZGluZzogMTZweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNHB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Mik7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgzMCwgNTEsIDQ0LCAwLjEyKTtcclxufVxyXG5cclxuLm1vZGVsLWdhbGxlcnktaGVhZGVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGdhcDogMTJweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4ubW9kZWwtZ2FsbGVyeSBoMiB7XHJcblx0bWFyZ2luOiAwIDAgMTJweDtcclxuXHRmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmJhY2stYnV0dG9uIHtcclxuXHRwYWRkaW5nOiAxMHB4IDE0cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgzMSwgNjAsIDQ3LCAwLjM1KTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ZjdmNzcsICM0NjU0NGUpO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubW9kZWwtZ2FsbGVyeS1ncmlkIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTcwcHgsIDFmcikpO1xyXG5cdGdhcDogMTJweDtcclxufVxyXG5cclxuLm1vZGVsLWdhbGxlcnktZ3JpZCBpbWcge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTYwcHg7XHJcblx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMwLCA1MSwgNDQsIDAuMSk7XHJcblx0YmFja2dyb3VuZDogI2YyZjJmMjtcclxufVxyXG5cclxuLmJvb2stY2FyZCB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRib3JkZXItcmFkaXVzOiAxNnB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Mik7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgzMCwgNTEsIDQ0LCAwLjEpO1xyXG5cdGJveC1zaGFkb3c6IDAgMTBweCAyNHB4IHJnYmEoMjUsIDQwLCAzNSwgMC4xMik7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1pbWFnZSB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxODBweDtcclxuXHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuXHRwYWRkaW5nOiAxNHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IGgyIHtcclxuXHRtYXJnaW46IDAgMCA4cHg7XHJcblx0Zm9udC1zaXplOiAxLjE1cmVtO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHAge1xyXG5cdG1hcmdpbjogMDtcclxuXHRjb2xvcjogIzM1NDc0MDtcclxuXHRmb250LXNpemU6IDAuOTJyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNDU7XHJcbn1cclxuXHJcbi5zdGF0dXMtbWVzc2FnZSB7XHJcblx0bWFyZ2luOiA4cHggMDtcclxuXHRjb2xvcjogIzViMmQyZDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"cards-main\">\n\t<section class=\"search-panel\" *ngIf=\"cards.length > 0 && selectedModelImages.length === 0\">\n\t\t<div class=\"search-field\">\n\t\t\t<label for=\"modelFilter\">Model</label>\n\t\t\t<select id=\"modelFilter\" [(ngModel)]=\"selectedModel\">\n\t\t\t\t<option value=\"\">All</option>\n\t\t\t\t<option *ngFor=\"let model of modelOptions\" [value]=\"model\">{{ model }}</option>\n\t\t\t</select>\n\t\t</div>\n\n\t\t<div class=\"search-field\">\n\t\t\t<label for=\"yearFilter\">Model Year</label>\n\t\t\t<select id=\"yearFilter\" [(ngModel)]=\"selectedYear\">\n\t\t\t\t<option value=\"\">All</option>\n\t\t\t\t<option *ngFor=\"let year of yearOptions\" [value]=\"year\">{{ year }}</option>\n\t\t\t</select>\n\t\t</div>\n\n\t\t<div class=\"search-field\">\n\t\t\t<label for=\"headrestFilter\">Headrest</label>\n\t\t\t<select id=\"headrestFilter\" [(ngModel)]=\"selectedHeadrest\">\n\t\t\t\t<option value=\"\">All</option>\n\t\t\t\t<option *ngFor=\"let headrest of headrestOptions\" [value]=\"headrest\">{{ headrest }}</option>\n\t\t\t</select>\n\t\t</div>\n\n\t\t<div class=\"search-field\">\n\t\t\t<label for=\"armrestFilter\">Armrest</label>\n\t\t\t<select id=\"armrestFilter\" [(ngModel)]=\"selectedArmrest\">\n\t\t\t\t<option value=\"\">All</option>\n\t\t\t\t<option *ngFor=\"let armrest of armrestOptions\" [value]=\"armrest\">{{ armrest }}</option>\n\t\t\t</select>\n\t\t</div>\n\n\t\t<div class=\"search-actions\">\n\t\t\t<button type=\"button\" class=\"clear-button\" (click)=\"clearFilters()\">Clear</button>\n\t\t</div>\n\t</section>\n\n\t<p class=\"status-message\" *ngIf=\"errorMessage && selectedModelImages.length === 0\">{{ errorMessage }}</p>\n\n\t<section class=\"model-gallery\" *ngIf=\"selectedModelImages.length > 0\">\n\t\t<div class=\"model-gallery-header\">\n\t\t\t<button type=\"button\" class=\"back-button\" (click)=\"goBack()\">Go Back</button>\n\t\t</div>\n\t\t<div class=\"model-gallery-grid\">\n\t\t\t<img *ngFor=\"let imageUrl of selectedModelImages\" [src]=\"imageUrl\" [alt]=\"selectedModelName\" />\n\t\t</div>\n\t</section>\n\n\t<section class=\"cards-grid\" *ngIf=\"filteredCards.length > 0 && selectedModelImages.length === 0\">\n\t\t<article class=\"book-card\" *ngFor=\"let card of filteredCards\" (click)=\"onCardClick(card)\">\n\t\t\t<img class=\"card-image\" [src]=\"card.imageUrl\" [alt]=\"card.model\" />\n\t\t\t<div class=\"card-content\">\n\t\t\t\t<h2>{{ card.model }}</h2>\n\t\t\t\t<p>{{ card.description }}</p>\n\t\t\t</div>\n\t\t</article>\n\t</section>\n\n\t<p class=\"status-message\" *ngIf=\"!errorMessage && cards.length > 0 && filteredCards.length === 0 && selectedModelImages.length === 0\">No cards match the selected filters.</p>\n\n\t<p class=\"status-message\" *ngIf=\"!errorMessage && cards.length === 0 && selectedModelImages.length === 0\">No data rows found in assets/images/book.csv</p>\n</main>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FALLBACK_BOOK_CSV = 'Model,Year,BR,HeadReast,Armrest,Qty,price,Image\n' +
    'FRONX/BALENO,All,BR2,RHD,WO-AR,4,7900,FRONX_BALENO_BR2_RHD_WO_AR/FRONX_BALENO_BR2_RHD_WO_AR.jpeg\n' +
    'FRONX/BALENO,2024,BR2,RHD,WO-AR,2,7900,FRONX_BALENO_2024_BR2_RHD_WO_AR/FRONX_BALENO_2024_BR2_RHD_WO_AR.jpeg\n' +
    'HYUNDAI CRETA,2024,BR2,FHD,W-AR,3,7900,HYUNDAI_CRETA_2024_BR2_FHD_W_AR/HYUNDAI_CRETA_2024_BR2_FHD_W_AR.jpeg\n' +
    'HYUNDAI CRETA,2024,BR2,RHD,W-AR,7,7900,HYUNDAI_CRETA_2024_BR2_RHD_W_AR/HYUNDAI_CRETA_2024_BR2_RHD_W_AR.jpeg\n' +
    'HYUNDAI I20,2023,BR1,FHD,WO-AR,6,7900,HYUNDAI_I20_2023_BR1_FHD_WO_AR/HYUNDAI_I20_2023_BR1_FHD_WO_AR.jpeg\n' +
    'INNOVA CRYSTA,All,7STR,ALL,ALL,1,7900,INNOVA_CRYSTA_7STR/INNOVA_CRYSTA_7STR.jpeg\n' +
    'KIA SELTOS,2024,BR1,FHD,WO-AR,3,7900,KIA_SELTOS_2024_BR1_FHD_WO_AR/KIA_SELTOS_2024_BR1_FHD_WO_AR.jpeg\n' +
    'KIA SONET,All,BR1,FHD,WO-AR,4,7900,KIA_SONET_BR1_FHD_WO_AR/KIA_SONET_BR1_FHD_WO_AR.jpeg\n' +
    'NEXON,All,BR1,RHD,WO-AR,1,7900,NEXON_BR1_RHD_WO_AR/NEXON_BR1_RHD_WO_AR.jpeg\n' +
    'SCORPIO CAP.,All,BR2,RHD,WO-AR,2,7900,SCORPIO_CAP_BR2_RHD_WO_AR/SCORPIO_CAP_BR2_RHD_WO_AR.jpeg\n' +
    'SCORPIO S11,All,7STR,ALL,ALL,6,7900,SCORPIO_S11_7STR/SCORPIO_S11_7STR.jpeg\n' +
    'SUJUKI BREEZA,All,BR1,RHD,W-AR,1,7900,SUJUKI_BREEZA_BR1_RHD_W_AR/SUJUKI_BREEZA_BR1_RHD_W_AR.jpeg\n' +
    'SUJUKI BREEZA,All,BR1,RHD,WO-AR,5,7900,SUJUKI_BREEZA_BR1_RHD_WO_AR/SUJUKI_BREEZA_BR1_RHD_WO_AR.jpeg\n' +
    'SUJUKI DEZIRE,All,BR1,RHD,W-AR,8,7900,SUJUKI_DEZIRE_BR1_RHD_W_AR/SUJUKI_DEZIRE_BR1_RHD_W_AR.jpeg\n' +
    'SUJUKI SWIFT,All,BR1,FHD,WO-AR,1,7900,SUJUKI_SWIFT_BR1_FHD_WO_AR/SUJUKI_SWIFT_BR1_FHD_WO_AR.jpeg\n' +
    'SUZUKI GRAND VITARA,All,BR2,RHD,W-AR,3,7900,SUZUKI_GRAND_VITARA_BR2_RHD_W_AR/SUZUKI_GRAND_VITARA_BR2_RHD_W_AR.jpeg\n' +
    'SUZUKI SWIFT,All,BR2,RHD,WO-AR,1,7900,SUZUKI_SWIFT_BR2_RHD_WO_AR/SUZUKI_SWIFT_BR2_RHD_WO_AR.jpeg\n' +
    'SUZUKI VICTORIS,All,BR2,RHD,W-AR,3,7900,SUZUKI_VICTORIS_BR2_RHD_W_AR/SUZUKI_VICTORIS_BR2_RHD_W_AR.jpeg\n' +
    'SUZUKI SWIFT,All,BR2,FHD,WO-AR,7,7900,SUZUKI_SWIFT_BR2_FHD_WO_AR/SUZUKI_SWIFT_BR2_FHD_WO_AR.jpeg\n' +
    'SWIFT,2024,BR2,RHD,W-AR,1,7900,SWIFT_2024_BR2_RHD_W_AR/SWIFT_2024_BR2_RHD_W_AR.jpeg\n' +
    'TATA NEXON,2024,BR1,RHD,WO-AR,3,7900,TATA_NEXON_2024_BR1_RHD_WO_AR/TATA_NEXON_2024_BR1_RHD_WO_AR.jpeg\n' +
    'TATA OLD NEXON,All,BR2,RHD,W-AR,3,7900,TATA_OLD_NEXON_BR2_RHD_W_AR/TATA_OLD_NEXON_BR2_RHD_W_AR.jpeg\n' +
    'TATA PUNCH,All,BR1,RHD,W-AR,4,7900,TATA_PUNCH_BR1_RHD_W_AR/TATA_PUNCH_BR1_RHD_W_AR.jpeg\n' +
    'TATA PUNCH EV,All,ALL,ALL,ALL,2,7900,TATA_PUNCH_EV/TATA_PUNCH_EV.jpeg\n' +
    'TATA PUNCH EV,All,ALL,RHD,W-AR,1,7900,TATA_PUNCH_EV_RHD_W_AR/TATA_PUNCH_EV_RHD_W_AR.jpeg\n' +
    'THAR,All,BR2,RHD,WO-AR,6,7900,THAR_BR2_RHD_WO_AR/THAR_BR2_RHD_WO_AR.jpeg\n' +
    'XUV 300,All,BR1,RHD,WO-AR,1,7900,XUV_300_BR1_RHD_WO_AR/XUV_300_BR1_RHD_WO_AR.jpeg\n' +
    'VANUE,2022,BR2,RHD,W-AR,3,7900,VANUE_2022_BR2_RHD_W_AR/VANUE_2022_BR2_RHD_W_AR.jpeg\n' +
    'POLO,2019,BR1,RHD,WO-AR,1,7900,POLO_2019_BR1_RHD_WO_AR/POLO_2019_BR1_RHD_WO_AR.jpeg\n' +
    'KIA SELTOS,2022,BR1,FHD,WO-AR,3,7900,KIA_SELTOS_2022_BR1_FHD_WO_AR/KIA_SELTOS_2022_BR1_FHD_WO_AR.jpeg';
var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.cards = [];
        this.errorMessage = '';
        this.allImageUrls = [];
        this.allManifestImages = [];
        this.selectedModelName = '';
        this.selectedModelImages = [];
        this.modelOptions = [];
        this.yearOptions = [];
        this.headrestOptions = [];
        this.armrestOptions = [];
        this.selectedModel = '';
        this.selectedYear = '';
        this.selectedHeadrest = '';
        this.selectedArmrest = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadImageManifest();
        this.loadCsvData();
    };
    AppComponent.prototype.loadImageManifest = function () {
        var _this = this;
        this.http.get('assets/images/image-manifest.json').subscribe(function (manifestImages) {
            _this.allManifestImages = manifestImages.map(function (img) { return 'assets/images/' + img; });
        }, function () {
            // Manifest not found, gallery will use CSV-only images
            _this.allManifestImages = [];
        });
    };
    AppComponent.prototype.loadCsvData = function () {
        var _this = this;
        this.http.get('assets/images/book.csv', { responseType: 'text' }).subscribe(function (csvText) {
            _this.loadCards(csvText);
        }, function () {
            if (window.location.protocol === 'file:') {
                _this.loadCards(FALLBACK_BOOK_CSV);
                _this.errorMessage = '';
                return;
            }
            _this.errorMessage = 'Unable to load assets/images/book.csv';
        });
    };
    AppComponent.prototype.loadCards = function (csvText) {
        var _this = this;
        var parsedCards = this.mapCardsFromCsv(csvText);
        this.allImageUrls = this.buildImageCatalogFromCards(parsedCards);
        this.cards = parsedCards.map(function (card) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, card, { imageUrl: _this.resolvePrimaryImageUrl(card.imageName, card.model) })); });
        this.initializeFilterOptions();
    };
    Object.defineProperty(AppComponent.prototype, "filteredCards", {
        get: function () {
            var _this = this;
            return this.cards.filter(function (card) {
                return card.qty > 0 &&
                    _this.matchesFilter(card.model, _this.selectedModel) &&
                    _this.matchesFilter(card.year, _this.selectedYear) &&
                    _this.matchesFilter(card.headrest, _this.selectedHeadrest) &&
                    _this.matchesFilter(card.armrest, _this.selectedArmrest);
            });
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.clearFilters = function () {
        this.selectedModel = '';
        this.selectedYear = '';
        this.selectedHeadrest = '';
        this.selectedArmrest = '';
    };
    AppComponent.prototype.goBack = function () {
        this.selectedModelName = '';
        this.selectedModelImages = [];
    };
    AppComponent.prototype.onCardClick = function (card) {
        this.selectedModelName = card.model;
        this.selectedModelImages = this.getImagesFromFolder(card.imageName);
        if (this.selectedModelImages.length === 0) {
            this.selectedModelImages = this.getCardImageUrls(card.imageName, card.model);
        }
        if (this.selectedModelImages.length === 0) {
            this.selectedModelImages = [card.imageUrl];
        }
    };
    AppComponent.prototype.getImagesFromFolder = function (imageName) {
        var folderPrefix = this.getFolderPrefix(imageName);
        if (!folderPrefix) {
            return [];
        }
        // First, try to get all images from the manifest
        var manifestMatches = this.allManifestImages.filter(function (imageUrl) {
            var relativePath = imageUrl.replace(/^assets\/images\//i, '').toLowerCase();
            return relativePath.indexOf(folderPrefix) === 0;
        });
        if (manifestMatches.length > 0) {
            return Array.from(new Set(manifestMatches));
        }
        // Fall back to CSV-based images if manifest is not available
        var csvMatches = this.allImageUrls.filter(function (imageUrl) {
            var relativePath = imageUrl.replace(/^assets\/images\//i, '').toLowerCase();
            return relativePath.indexOf(folderPrefix) === 0;
        });
        return Array.from(new Set(csvMatches));
    };
    AppComponent.prototype.getCardImageUrls = function (imageName, modelName) {
        var _this = this;
        var imageBaseName = this.getFileNameWithoutExtension(imageName);
        var normalizedBaseName = this.normalizeText(imageBaseName);
        var normalizedModel = this.normalizeText(modelName);
        if (!normalizedBaseName && !normalizedModel) {
            return [];
        }
        var matches = this.allImageUrls.filter(function (imageUrl) {
            var pathWithoutRoot = imageUrl.replace(/^assets\/images\//i, '');
            var segments = pathWithoutRoot.split('/');
            var folderMatches = segments.slice(0, -1).some(function (segment) {
                var normalizedSegment = _this.normalizeText(segment);
                return normalizedSegment === normalizedBaseName || normalizedSegment.indexOf(normalizedBaseName) !== -1 || normalizedSegment.indexOf(normalizedModel) !== -1;
            });
            var fileName = segments[segments.length - 1] || '';
            var fileNameWithoutExtension = _this.getFileNameWithoutExtension(fileName);
            var normalizedFileName = _this.normalizeText(fileNameWithoutExtension);
            var fileMatches = normalizedFileName === normalizedBaseName || normalizedFileName.indexOf(normalizedBaseName) !== -1 || normalizedFileName.indexOf(normalizedModel) !== -1;
            return folderMatches || fileMatches;
        });
        return Array.from(new Set(matches));
    };
    AppComponent.prototype.resolvePrimaryImageUrl = function (imageName, modelName) {
        var folderPrefix = this.getFolderPrefix(imageName);
        if (folderPrefix) {
            var coverImage = this.allImageUrls.find(function (imageUrl) {
                var relativePath = imageUrl.replace(/^assets\/images\//i, '').toLowerCase();
                return relativePath === folderPrefix + 'cover.jpeg';
            });
            if (coverImage) {
                return coverImage;
            }
        }
        var exactMatch = this.allImageUrls.find(function (imageUrl) {
            return imageUrl.toLowerCase().endsWith('/' + imageName.toLowerCase());
        });
        if (exactMatch) {
            return exactMatch;
        }
        var modelMatches = this.getCardImageUrls(imageName, modelName);
        if (modelMatches.length > 0) {
            return modelMatches[0];
        }
        return this.toAssetImageUrl(imageName);
    };
    AppComponent.prototype.toAssetImageUrl = function (imageName) {
        return 'assets/images/' + (imageName || '').replace(/^\/+/, '');
    };
    AppComponent.prototype.buildImageCatalogFromCards = function (cards) {
        var _this = this;
        var imageSet = {};
        var imageList = [];
        cards.forEach(function (card) {
            var primaryImage = _this.toAssetImageUrl(card.imageName);
            if (!imageSet[primaryImage]) {
                imageSet[primaryImage] = true;
                imageList.push(primaryImage);
            }
            var folderPrefix = _this.getFolderPrefix(card.imageName);
            if (folderPrefix) {
                var coverImage = 'assets/images/' + folderPrefix + 'cover.jpeg';
                if (!imageSet[coverImage]) {
                    imageSet[coverImage] = true;
                    imageList.push(coverImage);
                }
            }
        });
        return imageList;
    };
    AppComponent.prototype.getFolderPrefix = function (imageName) {
        var normalizedPath = (imageName || '').replace(/^\/+/, '');
        var lastSlashIndex = normalizedPath.lastIndexOf('/');
        if (lastSlashIndex < 0) {
            return '';
        }
        return normalizedPath.slice(0, lastSlashIndex + 1).toLowerCase();
    };
    AppComponent.prototype.normalizeText = function (value) {
        return (value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    };
    AppComponent.prototype.getFileNameWithoutExtension = function (fileName) {
        return fileName.replace(/\.[^/.]+$/, '');
    };
    AppComponent.prototype.matchesFilter = function (value, selectedValue) {
        if (!selectedValue) {
            return true;
        }
        return (value || '').toLowerCase() === selectedValue.toLowerCase();
    };
    AppComponent.prototype.initializeFilterOptions = function () {
        this.modelOptions = this.extractOptions(function (card) { return card.model; });
        this.yearOptions = this.extractOptions(function (card) { return card.year; });
        this.headrestOptions = this.extractOptions(function (card) { return card.headrest; });
        this.armrestOptions = this.extractOptions(function (card) { return card.armrest; });
    };
    AppComponent.prototype.extractOptions = function (getter) {
        var optionMap = {};
        this.cards.forEach(function (card) {
            var rawValue = getter(card).trim();
            if (!rawValue) {
                return;
            }
            var normalizedKey = rawValue.toLowerCase();
            if (!optionMap[normalizedKey]) {
                optionMap[normalizedKey] = rawValue;
            }
        });
        return Object.keys(optionMap)
            .map(function (key) { return optionMap[key]; })
            .sort(function (a, b) { return a.localeCompare(b); });
    };
    AppComponent.prototype.mapCardsFromCsv = function (csvText) {
        var _this = this;
        var rows = this.parseCsv(csvText);
        if (rows.length <= 1) {
            return [];
        }
        var headers = rows[0].map(function (header) { return header.trim(); });
        var modelIndex = this.findHeaderIndex(headers, ['Model']);
        var yearIndex = this.findHeaderIndex(headers, ['Year']);
        var headrestIndex = this.findHeaderIndex(headers, ['Headrest', 'HeadReast']);
        var armrestIndex = this.findHeaderIndex(headers, ['Armrest']);
        var qtyIndex = this.findHeaderIndex(headers, ['Qty', 'Quantity']);
        var imageIndex = this.findHeaderIndex(headers, ['Image', 'ImageName', 'ImageFile']);
        return rows.slice(1)
            .filter(function (row) { return row.some(function (cell) { return cell.trim().length > 0; }); })
            .map(function (row) {
            var model = _this.getCell(row, modelIndex, 'Unknown');
            var year = _this.getCell(row, yearIndex);
            var headrest = _this.getCell(row, headrestIndex);
            var armrest = _this.getCell(row, armrestIndex);
            var qty = _this.getNumericCell(row, qtyIndex, 0);
            var imageName = _this.getCell(row, imageIndex, '1.jpeg');
            var description = headers
                .map(function (header, index) { return ({ header: header, value: _this.getCell(row, index) }); })
                .filter(function (item) { return item.header !== 'Model' && item.header !== 'Qty' && item.header !== 'Quantity' && item.header !== 'Image' && item.header !== 'ImageName' && item.header !== 'ImageFile' && item.header !== 'price'; })
                .map(function (item) { return item.value; })
                .join(' | ');
            return {
                model: model,
                year: year,
                headrest: headrest,
                armrest: armrest,
                qty: qty,
                imageName: imageName,
                imageUrl: _this.toAssetImageUrl(imageName),
                description: description
            };
        });
    };
    AppComponent.prototype.findHeaderIndex = function (headers, candidates) {
        var normalizedCandidates = candidates.map(function (name) { return name.toLowerCase(); });
        return headers.findIndex(function (header) { return normalizedCandidates.indexOf(header.toLowerCase()) !== -1; });
    };
    AppComponent.prototype.getCell = function (row, index, fallback) {
        if (fallback === void 0) { fallback = ''; }
        if (index < 0 || index >= row.length) {
            return fallback;
        }
        return row[index].trim() || fallback;
    };
    AppComponent.prototype.getNumericCell = function (row, index, fallback) {
        var rawValue = this.getCell(row, index, String(fallback));
        var parsedValue = parseInt(rawValue, 10);
        return isNaN(parsedValue) ? fallback : parsedValue;
    };
    AppComponent.prototype.parseCsv = function (csvText) {
        var rows = [];
        var currentRow = [];
        var currentCell = '';
        var inQuotes = false;
        for (var i = 0; i < csvText.length; i++) {
            var char = csvText[i];
            var nextChar = csvText[i + 1];
            if (char === '"') {
                if (inQuotes && nextChar === '"') {
                    currentCell += '"';
                    i++;
                }
                else {
                    inQuotes = !inQuotes;
                }
            }
            else if (char === ',' && !inQuotes) {
                currentRow.push(currentCell);
                currentCell = '';
            }
            else if ((char === '\n' || char === '\r') && !inQuotes) {
                if (char === '\r' && nextChar === '\n') {
                    i++;
                }
                currentRow.push(currentCell);
                rows.push(currentRow);
                currentRow = [];
                currentCell = '';
            }
            else {
                currentCell += char;
            }
        }
        if (currentCell.length > 0 || currentRow.length > 0) {
            currentRow.push(currentCell);
            rows.push(currentRow);
        }
        return rows;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! C:\code\fitmyseat\fitmyseat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map