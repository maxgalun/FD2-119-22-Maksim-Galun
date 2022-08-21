document.forms.formMain.addEventListener("click", function (event) {
   if (event.target.tagName == "BUTTON") {
      const tag = event.target.dataset.tag;
      document.getElementById(
         "popup__title"
      ).textContent = `Укажите содержимое для элемента <${tag}>`;
      document.getElementById("modal").style.display = "block";
      if (tag == "ul") document.getElementById("plus").style.display = "block";
   }
});

document.getElementById("plus").addEventListener("click", function () {
   const clone = document.getElementById("popup__input").cloneNode();
   document.getElementsByClassName("popup__body")[0].appendChild(clone);
});

document
   .getElementById("popup__footer")
   .addEventListener("click", function (event) {
      console.log(event.target.dataset.add);

      if (event.target.dataset.add != undefined) {
         addElement();
      }
      document.getElementById("modal").style.display = "none";
      document.getElementById("plus").style.display = "none";
   });

function addElement() {
   console.log("addElement2");
   // const contentElement = button.previousElementSibling;
   // const tagElement = document.createElement(tag);
   // const textNode = document.createTextNode(contentElement.value);
   // tagElement.append(textNode);
   // document.getElementById("app").appendChild(tagElement);
   // contentElement.value = null;
}
