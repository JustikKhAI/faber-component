class Header {
   constructor() {
      this.catalog = "Каталог";
      this.guarantee = "Гарантія";
      this.shops = "Магазини";
      this.contacts = "Контакти";
      
   }

   render() {
      const html = `
         <div class="header-container">
            <a href="${LINK_TO_INDEX}">
               <img class="header__logo" src="${HEADER_LOGO}"/>
            </a>
            <ul class="header__list header-menu">
               <li class="header__item header-catalog">
                  <a href="${LINK_TO_CTLG}">
                     <p class header-catalog__text>
                        ${headerPage.catalog}
                     </p>
                     <img class="header-catalog__img" src ="${HEADER_CTLG_IMG}"/>
                  </a>
               </li>
               <li class="header__item">
                  <a href="${LINK_TO_GUARANTEE}">
                     ${headerPage.guarantee}
                  </a>
               </li>
               <li class="header__item">
                  <a href="${LINK_TO_SHOPS}">
                     ${headerPage.shops}
                  </a>
               </li>
               <li class="header__item">
                  <a href="${LINK_TO_CONTACTS}">
                     ${headerPage.contacts}
                  </a>
               </li>
               <li class="header__item header-socials">
                  <a href="${LINK_TO_FACEBOOK}">
                     <div class="header-socials__item">
                        <img src="${HEADER_FACEBOOK}"/>
                     </div>
                  </a>
                  <a href="${LINK_TO_INSTAGRAM}">
                     <div class="header-socials__item">
                        <img src="${HEADER_INSTAGRAM}"/>
                     </div>
                  </a>
               </li>
            </ul>
         </div>
      `;

      ROOT_HEADER.innerHTML = html;
   }
}

const headerPage = new Header();

