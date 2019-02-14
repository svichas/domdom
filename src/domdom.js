/**
* domdom
* Project: https://github.com/svichas/domdom
* License: MIT
* Author: Stefanos Vichas
* Version: 0.1.0
*/

class domdom {

     constructor() {



     }

     create(elementType) {
          let element = document.createElement(elementType);
          return new domdomElement(element);
     }

     select(selector) {
          let element = document.querySelector(selector);

          if (element) {
               return new domdomElement(element);
          }

          return false;
     }

}



class domdomElement {

     constructor(element) {
          this.DOMDOMELEMENT = true;
          this.element = element;
          return this;
     }

     addClass(classname) {
          this.element.classList.add(classname);
          return this;
     }

     appendTo(element) {
          if (!element.DOMDOMELEMENT) return this;
          element.element.appendChild(this.element);
          return this;
     }

}
