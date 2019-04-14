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

          if (typeof onloadMethod === "function") {
               return this.ready(function () {
                    return onloadMethod(_this);
               });
          }

          return true;
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
               var element = void 0;

               switch (typeof selector === "undefined" ? "undefined" : _typeof(selector)) {
                    case "string":
                         element = document.querySelector(selector);
                         break;
                    case "object":
                         element = selector;
                         break;
               }

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
          * Attribute
          * @param string key
          * @param string value
          */

     }, {
          key: "attribute",
          value: function attribute(key, value) {
               if (typeof value === "undefined") {
                    this.element.getAttribute(key);
               } else {
                    this.element.setAttribute(key, value);
               }
               return this;
          }

          /**
          * Method to set style attribute to a element
          */

     }, {
          key: "css",
          value: function css(styles) {

               switch (typeof styles === "undefined" ? "undefined" : _typeof(styles)) {
                    case "object":
                         for (var styleProperty in styles) {
                              this.element.style[styleProperty] = styles[styleProperty];
                         }
                         break;
                    case "string":
                         this.element.style = styles;
                         break;
               }

               return this;
          }

          /**
          * Method to check if domdom has a class
          * @param string classname
          */

     }, {
          key: "hasClass",
          value: function hasClass(classname) {
               return this.element.classList.contains(classname);
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
          * Method to attach events to element
          * @param string eventsString
          * @param function method
          */

     }, {
          key: "on",
          value: function on(eventsString, method) {

               var events = eventsString.split(" ");

               method.apply(this);

               var _iteratorNormalCompletion = true;
               var _didIteratorError = false;
               var _iteratorError = undefined;

               try {
                    for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                         event = _step.value;

                         this.element.addEventListener(event, method);
                    }
               } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
               } finally {
                    try {
                         if (!_iteratorNormalCompletion && _iterator.return) {
                              _iterator.return();
                         }
                    } finally {
                         if (_didIteratorError) {
                              throw _iteratorError;
                         }
                    }
               }

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

          /**
          * Method to set/get texts content
          * @param string content
          */

     }, {
          key: "text",
          value: function text(content) {
               if (typeof content === "string") {
                    this.element.innerText = content;
                    return this;
               } else if ((typeof content === "undefined" ? "undefined" : _typeof(content)) === "object" && content.DOMDOMELEMENT) {
                    // set to element html
                    this.element.innerText = content.element.outerHTML;
                    return this;
               }

               return this.element.innerText;
          }

          /**
          * Method to remove domdom element
          */

     }, {
          key: "remove",
          value: function remove() {
               this.element.remove();
               return this;
          }
     }]);

     return domdomElement;
}();

var dd = new domdom();
