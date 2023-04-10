class Header {
   constructor() {
      this.catalog = "Каталог";
      this.guarantee = "Гарантія";
      this.shops = "Магазини";
      this.contacts = "Контакти";
      
   }

   render() {
      const sizeDependCode = {
         mobile: `
            <a href="${LINK_TO_CTLG}">
                     <p class="header-catalog__tab">
                        ${headerPage.catalog.toUpperCase()}
                     </p>
            </a>
            <ul class="header-mob-tab-menu">
               <li class="header-mob-tab__item">
                  <a href="${LINK_TO_GUARANTEE}">
                     <img class="header-mob-tab__img" src="${HEADER_MOB_TAB_GUARANTEE}"/>
                  </a>
               </li>
               <li class="header-mob-tab__item">
                  <a href="${LINK_TO_SHOPS}">
                     <img class="header-mob-tab__img" src="${HEADER_MOB_TAB_SHOPS}"/>
                  </a>
               </li>
               <li class="header-mob-tab__item">
                  <a href="${LINK_TO_CONTACTS}">
                     <img class="header-mob-tab__img" src="${HEADER_MOB_TAB_CONTACTS}"/>
                  </a>   
               </li>
            </ul>
         `,
         tablet: `
            <a href="${LINK_TO_CTLG}">
                     <p class="header-catalog__tab">
                        ${headerPage.catalog.toUpperCase()}
                     </p>
            </a>
            <ul class="header-mob-tab-menu">
               <li class="header-mob-tab__item">
                  <a href="${LINK_TO_GUARANTEE}">
                     <img class="header-mob-tab__img" src="${HEADER_MOB_TAB_GUARANTEE}"/>
                  </a>
               </li>
               <li class="header-mob-tab__item">
                  <a href="${LINK_TO_SHOPS}">
                     <img class="header-mob-tab__img" src="${HEADER_MOB_TAB_SHOPS}"/>
                  </a>
               </li>
               <li class="header-mob-tab__item">
                  <a href="${LINK_TO_CONTACTS}">
                     <img class="header-mob-tab__img" src="${HEADER_MOB_TAB_CONTACTS}"/>
                  </a>   
               </li>
            </ul>
         `,
         desktop: `
            <ul class="header__list header-menu">
               <li class="header__item header-catalog">
                  <a href="${LINK_TO_CTLG}">
                     <span>
                        ${headerPage.catalog}
                     </span>
                     <img class="header-catalog__img" src ="${HEADER_CTLG_IMG}"/>
                  </a>
               </li>
               <li class="header__item">
                  <a href="${LINK_TO_GUARANTEE}">
                     <span>${headerPage.guarantee}</span>
                  </a>
               </li>
               <li class="header__item">
                  <a href="${LINK_TO_SHOPS}">
                     <span>${headerPage.shops}</span>
                  </a>
               </li>
               <li class="header__item">
                  <a href="${LINK_TO_CONTACTS}">
                     <span>${headerPage.contacts}</span>
                  </a>
               </li>
               <li class="header__item header-socials">
                  <a href="${LINK_TO_FACEBOOK}" target="_blank">
                     <div class="header-socials__item">
                        <img src="${HEADER_FACEBOOK}"/>
                     </div>
                  </a>
                  <a href="${LINK_TO_INSTAGRAM}" target="_blank">
                     <div class="header-socials__item">
                        <img src="${HEADER_INSTAGRAM}"/>
                     </div>
                  </a>
               </li>
            </ul>`,

         getSizedHtml: function (value) {
            if (value >= 992) {
               return this.desktop;
            } else if (value < 992 && value >= 560) {
               return this.tablet;
            } else if (value < 560) {
               return this.mobile;
            }
         },
      };
      const html = `
         <div class="header-container">
            <a class="header-logo__box" href="${LINK_TO_INDEX}">
               <img class="header__logo" src="${HEADER_LOGO}"/>
            </a>
            ${sizeDependCode.getSizedHtml(window.innerWidth)}
         </div>
      `;

      ROOT_HEADER.innerHTML = html;
   }
}

const headerPage = new Header();

