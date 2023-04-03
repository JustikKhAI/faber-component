function render() {
   headerPage.render();
   filterPage.render();
   Papa.parse("price-var.csv", {
      download: true,
      header: true,
      complete: function (results) {
         // results.data contains the parsed CSV data
         catalogPage.generateProducts(results.data);
         catalogPage.render();
      },
   });
   contactsPage.render();
}

function spinnerHandle() {
   // Код для виконання перед завантаженням сторінки
   spinnerPage.render();
}

document.addEventListener("DOMContentLoaded", spinnerHandle);
render();

window.addEventListener("load", function () {
   // Код для виконання після повного завантаження сторінки
   document.removeEventListener("DOMContentLoaded", spinnerHandle);
   spinnerPage.handleClear();
   
});
window.addEventListener("resize", function () {
   headerPage.render();
   // catalogPage.render();
   contactsPage.render();
});
ROOT_CAT_FILTER.addEventListener("click", filterHandler);