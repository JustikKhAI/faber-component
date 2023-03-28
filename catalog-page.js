function render() {
   headerPage.render();
   Papa.parse("my-test-table-csv.csv", {
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
window.addEventListener("resize", function () {
   headerPage.render();
   catalogPage.render();
   contactsPage.render();
});
