/**
* domdom
* Project: https://github.com/svichas/domdom
* License: MIT
* Author: Stefanos Vichas
* Version: 0.1.0
*/

class domdom {

     constructor(onloadMethod) {
          let _this = this;

          return this.domOnReady(function() {
               return onloadMethod(_this);
          });
     }

     domOnReady(fn) {
          if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
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
     create(elementType) {
          let element = document.createElement(elementType);
          return new domdomElement(element);
     }

     /**
     * Method to select a domdom element
     * @param string selector
     */
     select(selector) {
          let element = document.querySelector(selector);

          if (element) {
               return new domdomElement(element);
          }

          return false;
     }

}



class domdomElement {

     /**
     * Main method to init domdom element
     * @param object element
     */
     constructor(element) {
          this.DOMDOMELEMENT = true;
          this.element = element;
          return this;
     }

     /**
     * Method to addClass
     * @param string classname
     */
     addClass(classname) {
          this.element.classList.add(classname);
          return this;
     }

     /**
     * Method to append domdom element to a domdom container
     * @param object container
     */
     appendTo(container) {
          if (!container.DOMDOMELEMENT) return this;
          container.element.appendChild(this.element);
          return this;
     }

     /**
     * Method to append domdom child to this domdom element
     * @param object child
     */
     append(child) {
          this.element.appendChild(child.element);
          return this;
     }

     /**
     * Method to get/set html to domdom element
     * @param string content
     */
     html(content) {

          if (typeof content === "string") {
               this.element.innerHTML = content;
               return this;
          } else if (typeof content === "object" && content.DOMDOMELEMENT) {
               // set to element html
               this.element.innerHTML = content.element.outerHTML;
               return this;
          }

          return this.element.innerHTML;
     }

}
