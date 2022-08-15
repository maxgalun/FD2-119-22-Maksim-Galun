function createElem(button, tag) {
   const contentElement = button.previousElementSibling;
   const tagElement = document.createElement(tag);
   const textNode = document.createTextNode(contentElement.value);
   tagElement.append(textNode);
   contentElement.value = null;
}
