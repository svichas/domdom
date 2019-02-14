"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* domdom
* Project: https://github.com/svichas/domdom
* License: MIT
* Author: Stefanos Vichas
* Version: 0.1.0
*/

var domdom = function () {
     function domdom() {
          _classCallCheck(this, domdom);
     }

     _createClass(domdom, [{
          key: "create",
          value: function create(elementType) {
               var element = document.createElement(elementType);
               return new domdomElement(element);
          }
     }, {
          key: "select",
          value: function select(selector) {
               var element = document.querySelector(selector);

               if (element) {
                    return new domdomElement(element);
               }

               return false;
          }
     }]);

     return domdom;
}();

var domdomElement = function () {
     function domdomElement(element) {
          _classCallCheck(this, domdomElement);

          this.DOMDOMELEMENT = true;
          this.element = element;
          return this;
     }

     _createClass(domdomElement, [{
          key: "addClass",
          value: function addClass(classname) {
               this.element.classList.add(classname);
               return this;
          }
     }, {
          key: "appendTo",
          value: function appendTo(element) {
               if (!element.DOMDOMELEMENT) return this;
               element.element.appendChild(this.element);
               return this;
          }
     }]);

     return domdomElement;
}();
