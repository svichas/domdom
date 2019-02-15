"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
     function domdom(onloadMethod) {
          _classCallCheck(this, domdom);

          var _this = this;

          return this.ready(function () {
               return onloadMethod(_this);
          });
     }

     /**
     * Method to excute a function when dom is ready
     * @param function ready
     */


     _createClass(domdom, [{
          key: "ready",
          value: function ready(fn) {
               if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
                    fn();
               } else {
                    document.addEventListener('DOMContentLoaded', fn);
               }
               return true;
          }

          /**
          * Method to create a domdom element
          * @param string elementType
          */

     }, {
          key: "create",
          value: function create(elementType) {
               var element = document.createElement(elementType);
               return new domdomElement(element);
          }

          /**
          * Method to select a domdom element
          * @param string selector
          */

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

     /**
     * Main method to init domdom element
     * @param object element
     */
     function domdomElement(element) {
          _classCallCheck(this, domdomElement);

          this.DOMDOMELEMENT = true;
          this.element = element;
          return this;
     }

     /**
     * Method to addClass
     * @param string classname
     */


     _createClass(domdomElement, [{
          key: "addClass",
          value: function addClass(classname) {
               this.element.classList.add(classname);
               return this;
          }

          /**
          * Method to remove a class
          * @param string classname
          */

     }, {
          key: "removeClass",
          value: function removeClass(classname) {
               this.element.classList.remove(classname);
               return this;
          }

          /**
          * Method to append domdom element to a domdom container
          * @param object container
          */

     }, {
          key: "appendTo",
          value: function appendTo(container) {
               if (!container.DOMDOMELEMENT) return this;
               container.element.appendChild(this.element);
               return this;
          }

          /**
          * Method to append domdom child to this domdom element
          * @param object child
          */

     }, {
          key: "append",
          value: function append(child) {
               this.element.appendChild(child.element);
               return this;
          }

          /**
          * Method to get/set html to domdom element
          * @param string content
          */

     }, {
          key: "html",
          value: function html(content) {

               if (typeof content === "string") {
                    this.element.innerHTML = content;
                    return this;
               } else if ((typeof content === "undefined" ? "undefined" : _typeof(content)) === "object" && content.DOMDOMELEMENT) {
                    // set to element html
                    this.element.innerHTML = content.element.outerHTML;
                    return this;
               }

               return this.element.innerHTML;
          }
     }]);

     return domdomElement;
}();
