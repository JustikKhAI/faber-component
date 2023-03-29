class Main {
   constructor() {
      this.mainDescrTitle = "Чому FABER?";
      this.mainListItems = [
         "Тільки натуральні матеріали ззовні та  всередині",
         "Унікальна авторська технологія виробництва",
         "Гарантія та після гарантія на все взуття",
         "На ринку України з 1998 року",
         "Мережа власних магазинів по Україні",
         "Сотні відгуків",
      ];
      this.mainBtn = "до каталогу";
      // всі розміри фото додаю для оптимізації трафіка
      this.chooseMainFoto = function (value) {
         let result;
         if (value >= 1200) {
            result = MAIN_FOTO1200;
         } else if (value >= 992) {
            result = MAIN_FOTO992;
         } else if (value >= 768) {
            result = MAIN_FOTO768;
         } else if (value >= 560) {
            result = MAIN_FOTO560;
         } else if (value >= 320) {
            result = MAIN_FOTO320;
         }
         return result;
      }
   }

   render() {
      const html = `
         <div class="main-container">
            <div class="main-descr">
               <div class="main-descr__title">
                  ${mainPage.mainDescrTitle}
               </div>
               <ul class="main-descr__list">
                  <li class="main-descr__item">${mainPage.mainListItems[0]}</li>
                  <li class="main-descr__item">${mainPage.mainListItems[1]}</li>
                  <li class="main-descr__item">${mainPage.mainListItems[2]}</li>
                  <li class="main-descr__item">${mainPage.mainListItems[3]}</li>
                  <li class="main-descr__item">${mainPage.mainListItems[4]}</li>
                  <li class="main-descr__item">${mainPage.mainListItems[5]}</li>

               </ul>
               <a class="main-descr__btn" href="${LINK_TO_CTLG}">${mainPage.mainBtn}</a>
            </div>
            <img class="main-foto__img" src="${createWayFoto(MAIN_FOTO)}"/>
         </div>
      `;
      ROOT_MAIN.innerHTML = html;
   }
}

const mainPage = new Main();


