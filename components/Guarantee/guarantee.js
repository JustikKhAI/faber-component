class Guarantee {
   constructor() {
      this.repareTitle = "Гарантійний ремонт";
      this.repareSummary = [
         "Ви можете звернутися в будь-який фірмовий магазин Faber <span class='g-summary-bold'>протягом 45 днів</span> з дня продажу через роздрібну мережу або в інтернет-магазині.",
         "В цьому випадку дана послуга <span class='g-summary-bold'>БЕЗКОШТОВНА!</span>",
      ];
      this.repareSubtitle =
         "*не є виробничим дефектом пофарбована шкіряна підкладка, так як в ній використані натуральні барвники";
      this.gConditionTitle =
         "ПРИ ЗВЕРНЕННІ ДО ФІРМОВОГО МАГАЗИНУ З ПРЕТЕНЗІЄЮ АБО ПОВЕРНЕННЯМ,ПОКУПЕЦЬ ОБОВ’ЯЗКОВО ПОВИНЕН НАДАТИ:";
      this.gConditionList = [
         "Чисте взуття (в іншому випадку магазин має право не прийняти товар)",
         "Підтверджуючий документ придбання товару з датою продажу (гарантійний лист, візитка, тощо).",
      ];
      this.gDeclineTitle =
         "ПРИ ЯКИХ УМОВАХ ВАМ МОЖЕ БУТИ ВІДМОВЛЕНО У ГАРАНТІЙНОМУ РЕМОНТІ?";
      this.gDeclineList = [
         "Якщо вами не було дотримано обов’язкових правил експлуатації взуття",
         "Якщо відклейка підошви або інша проблема відбулася не з вини виробництва",
      ];
      this.gRepareFotoText =
         "Жодний випадок не залишається нами без уваги і розглядається індивідуально!";
      this.gServiceFotoText = "“НЕСЕМО ВІДПОВІДАЛЬНІСТЬ ЗА КОЖНУ ПАРУ ВЗУТТЯ”";
      this.gServiceTitle = "ПІСЛЯГАРАНТІЙНИЙ СЕРВІС";
      this.gService500Title = "Вартість 500грн:";
      this.gService500List = [
         "Підклейка підошви",
         "Вижарка взуття",
         "Заміна устілок",
         "Заміна шнурків (за потреби)",
         "Відновлення кольору",
         "Усунення дрібних пошкоджень",
      ];
      this.gService900Title = "Вартість 900грн:";
      this.gService900List = [
         "Заміна підошви на нову",
         "Перетяжка взуття",
         "Заміна внутрішньої устілки або пошкоджених ділянок",
         "Відновлення кольору",
         "Заміна шнурків (за потреби)",
      ];
   }

   render() {
      const html = `
         <div class="guarantee-container">
            <div class="guarantee-repare">
               <p class="g__title">
                  ${guaranteePage.repareTitle}
               </p>
               <div class="repare-summary">
                  <p class="g-summary__text">
                     ${guaranteePage.repareSummary[0]}
                  </p>
                  <p class="g-summary__text">
                     ${guaranteePage.repareSummary[1]}
                  </p>
               </div>
               <p class="g__subtitle">
                  ${guaranteePage.repareSubtitle}
               </p>
               <div class="g-condition-decline-container">
                  <div class="g-condition-container">
                     <p class="g-condition-decline__title">
                        ${guaranteePage.gConditionTitle}
                     </p>
                     <ul class="g-condition-decline-list">
                        <li class="g-condition-decline__item">
                           ${guaranteePage.gConditionList[0]}
                        </li>
                        <li class="g-condition-decline__item">
                           ${guaranteePage.gConditionList[1]}   
                        </li>
                     </ul>
                  </div>
                  <div class="g-decline-container">
                     <p class="g-condition-decline__title">
                        ${guaranteePage.gDeclineTitle}
                     </p>
                     <ul class="g-condition-decline-list">
                        <li class="g-condition-decline__item">
                           ${guaranteePage.gDeclineList[0]}
                        </li>
                        <li class="g-condition-decline__item">
                           ${guaranteePage.gDeclineList[1]}
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="g-repare-foto">
                  <p class="g-repare-foto__text">
                     ${guaranteePage.gRepareFotoText}
                  </p>
                  <img class="g-repare-foto__img" src="${GUARANTEE_REPARE_FOTO}"/>
               </div>
            </div>
            <div class="guarantee-service">
               <div class="g-service-foto">
                  <p class="g-service-foto__text">
                     ${guaranteePage.gServiceFotoText}
                  </p>
                  <img class="g-service-foto__img" src="${GUARANTEE_SERVICE_FOTO}"/>
               </div>
               <p class="g__title">
                  ${guaranteePage.gServiceTitle}
               </p>
               <div class="g-service-price">
                  <p class="g-service-price__title">
                     ${guaranteePage.gService500Title}
                  </p>
                  <ul class="g-service-price__list">
                     <li class="g-service-price__item">
                        ${guaranteePage.gService500List[0]}
                     </li>
                     <li class="g-service-price__item">
                        ${guaranteePage.gService500List[1]}
                     </li>
                     <li class="g-service-price__item">
                        ${guaranteePage.gService500List[2]}
                     </li>
                     <li class="g-service-price__item">
                        ${guaranteePage.gService500List[3]}
                     </li>
                     <li class="g-service-price__item">
                        ${guaranteePage.gService500List[4]}
                     </li>
                     <li class="g-service-price__item">
                        ${guaranteePage.gService500List[5]}
                     </li>
                  </ul>
               </div>
               <div class="g-service-price">
                  <p class="g-service-price__title">
                     ${guaranteePage.gService900Title}
                  </p>
                  <ul class="g-service-price__list">
                     <li class="g-service-price__item">
                        ${guaranteePage.gService900List[0]}
                     </li>
                     <li class="g-service-price__item">
                        ${guaranteePage.gService900List[1]}
                     </li>
                     <li class="g-service-price__item">
                        ${guaranteePage.gService900List[2]}
                     </li>
                     <li class="g-service-price__item">
                        ${guaranteePage.gService900List[3]}
                     </li>
                     <li class="g-service-price__item">
                        ${guaranteePage.gService900List[4]}
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      `;
      ROOT_GUARANTEE.innerHTML = html;
   }
}

const guaranteePage = new Guarantee();


