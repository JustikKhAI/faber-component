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
      
   }

   render() {
      const html = `
         <div class="main-container">
            <div class="main-descr">
               <div class="main-descr__title">
                  ${this.mainDescrTitle}
               </div>
               <ul class="main-descr__list">
                  <li class="main-descr__item">${this.mainListItems[0]}</li>
                  <li class="main-descr__item">${this.mainListItems[1]}</li>
                  <li class="main-descr__item">${this.mainListItems[2]}</li>
                  <li class="main-descr__item">${this.mainListItems[3]}</li>
                  <li class="main-descr__item">${this.mainListItems[4]}</li>
                  <li class="main-descr__item">${this.mainListItems[5]}</li>

               </ul>
               <a class="main-descr__btn hoverable" href="${LINK_TO_CTLG}">${this.mainBtn}</a>
            </div>
            <img class="main-foto__img" src="${createWayFoto(MAIN_FOTO)}"/>
         </div>
      `;
      ROOT_MAIN.innerHTML = html;
   }
}

const mainPage = new Main();


