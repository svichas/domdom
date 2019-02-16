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

          if (typeof onloadMethod === "function") {
              return this.ready(function() {
                   return onloadMethod(_this);
              });
          }

          return true;
     }

     /**
     * Method to excute a function when dom is ready
     * @param function ready
     */
     ready(fn) {
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
     * Method to set style attribute to a element
     */
     css(styles) {

          switch (typeof styles) {
               case "object":
                    for (let styleProperty in styles) {
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
     hasClass(classname) {
          return this.element.classList.contains(classname);
     }

     /**
     * Method to remove a class
     * @param string classname
     */
     removeClass(classname) {
          this.element.classList.remove(classname);
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
     * Method to attach events to element
     * @param string eventsString
     * @param function method
     */
     on(eventsString, method) {

          let events = eventsString.split(" ");

          for (event of events) {
               this.element.addEventListener(event, method);
          }

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



var dd = new domdom();
