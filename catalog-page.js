// import { catalogPage } from "./components/Catalog/catalog.js";
function render() {
   headerPage.render();
   catalogPage.render();
   contactsPage.render();
}

function handlerFunction() {
   // Код для виконання перед завантаженням сторінки
   spinnerPage.render();
}

document.addEventListener("DOMContentLoaded", handlerFunction);

render();

window.addEventListener("load", function () {
   // Код для виконання після повного завантаження сторінки
   document.removeEventListener("DOMContentLoaded", handlerFunction);
   spinnerPage.handleClear();
});
