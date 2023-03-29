class Shops {
   constructor() {
      this.shopsTitle = "НАШІ МАГАЗИНИ";
      this.shopsCity = ["Бровари", "Київ", "Бориспіль", "Одеса"];
      this.broSubtitle = "роздрібний магазин при виробництві";
      this.shopsAddress = [
         "вул. Героїв України, 5/1",
         "вул. Крайня, 1: ТК «Альтаїр»",
         "ТРЦ «Аеромол»: 1 поверх",
         "вул. Рішельєвська, 48",
      ];
      this.shopsSchedule = [
         { time: "10:00-17:00", shema: "Без перерви та вихідних" },
         { time: "09:00-16:00", shema: "ПН - вихідний" },
         { time: "10:00-19:00", shema: "Без перерви та вихідних" },
         { time: "10:00-18:00", shema: "Без перерви та вихідних" },
      ];
      this.shopsPhone = [
         getPhone(SHOPS_LINK_PHONE_BROVARY),
         getPhone(SHOPS_LINK_PHONE_KYIV),
         getPhone(SHOPS_LINK_PHONE_BORYSPIL),
         getPhone(SHOPS_LINK_PHONE_ODESA),
      ];
   }
   render() {
      const html = `
         <div class="shops-container">
            <p class="shops__title">
               ${shopsPage.shopsTitle}
            </p>
            <div class="shops-block">
               <div class="shops-item shop-1">
                  <p class="shops-item__title bro-shop-title">
                     ${shopsPage.shopsCity[0]}
                  </p>
                  <p class="shops-item__subtitle">
                     ${shopsPage.broSubtitle}
                  </p>
                  <p class="shops-item__address">
                     ${shopsPage.shopsAddress[0]}
                  </p>
                  <div class="shops-item__schedule">
                     <p class="shops-item__time" >
                        ${shopsPage.shopsSchedule[0].time}
                     </p>
                     <p class="shops-item__shema" >
                        ${shopsPage.shopsSchedule[0].shema}
                     </p>
                  </div>
                  <a class="shops-item__phone" href="${SHOPS_LINK_PHONE_BROVARY}">
                     ${shopsPage.shopsPhone[0]}
                  </a>
                  <img class="shops-item__img" src="${SHOPS_BROVARY}"/>
               </div>
               <div class="shops-item shop-2">
                  <p class="shops-item__title">
                     ${shopsPage.shopsCity[1]}
                  </p>
                  <p class="shop-address-2 shops-item__address">
                     ${shopsPage.shopsAddress[1]}
                  </p>
                  <div class="shops-item__schedule">
                     <p class="shops-item__time" >
                        ${shopsPage.shopsSchedule[1].time}
                     </p>
                     <p class="shops-item__shema" >
                        ${shopsPage.shopsSchedule[1].shema}
                     </p>
                  </div>
                  <a class="shops-item__phone" href="${SHOPS_LINK_PHONE_KYIV}">
                     ${shopsPage.shopsPhone[1]}
                  </a>
                  <img class="shops-item__img" src="${SHOPS_KYIV}"/>
               </div>
               <div class="shops-item shop-3">
                  <p class="shops-item__title">
                     ${shopsPage.shopsCity[2]}
                  </p>
                  <p class="shop-address-3 shops-item__address">
                     ${shopsPage.shopsAddress[2]}
                  </p>
                  <div class="shops-item__schedule">
                     <p class="shops-item__time" >
                        ${shopsPage.shopsSchedule[2].time}
                     </p>
                     <p class="shops-item__shema" >
                        ${shopsPage.shopsSchedule[2].shema}
                     </p>
                  </div>
                  <a class="shops-item__phone" href="${SHOPS_LINK_PHONE_BORYSPIL}">
                     ${shopsPage.shopsPhone[2]}
                  </a>
                  <img class="shops-item__img" src="${SHOPS_BORYSPIL}"/>
               </div>
               <div class="shops-item shop-4">
                  <p class="shops-item__title">
                     ${shopsPage.shopsCity[3]}
                  </p>
                  <p class="shops-item__address">
                     ${shopsPage.shopsAddress[3]}
                  </p>
                  <div class="shops-item__schedule">
                     <p class="shops-item__time" >
                        ${shopsPage.shopsSchedule[3].time}
                     </p>
                     <p class="shops-item__shema" >
                        ${shopsPage.shopsSchedule[3].shema}
                     </p>
                  </div>
                  <a class="shops-item__phone" href="${SHOPS_LINK_PHONE_ODESA}">
                     ${shopsPage.shopsPhone[3]}
                  </a>
                  <img class="shops-item__img" src="${SHOPS_ODESA}"/>
               </div>
            </div>
         </div>
      `;
      ROOT_SHOPS.innerHTML = html;
   }
}

const shopsPage = new Shops();

