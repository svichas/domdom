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
          if (content) {
               this.element.innerHTML = content;
               return this;
          }

          return this.element.innerHTML;
     }

}
