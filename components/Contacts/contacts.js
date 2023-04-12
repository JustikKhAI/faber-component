class Contact {
   constructor(
      title,
      subtitle,
      address,
      scheduleTime,
      scheduleDays,
      phoneImg,
      phoneNumber
   ) {
      (this.title = title),
         (this.subtitle = subtitle),
         (this.address = address),
         (this.scheduleTime = scheduleTime),
         (this.scheduleDays = scheduleDays),
         (this.phoneImg = phoneImg),
         (this.phoneNumber = phoneNumber);
   }
}

const contactBrovary = new Contact(
   "м. Бровари",
   "Роздріб",
   "вул. Героїв України, 5/1",
   "Режим роботи: 10:00-17:00",
   "Без перерви та вихідних",
   CONTACTS_TG_IMG,
   getPhone(CONTACTS_LINK_PHONE_BROVARY) + ", Вікторія"
);
const contactBoryspil = new Contact(
   "м. Бориспіль",
   "Роздріб",
   "ТРЦ “Аеромол”, 1 поверх",
   "Режим роботи: 10:00-19:00",
   "Без перерви та вихідних",
   CONTACTS_TG_IMG,
   getPhone(CONTACTS_LINK_PHONE_BORYSPIL) + ", Олександр"
);
const contactKyiv = new Contact(
   "м. Київ",
   "Опт та роздріб",
   "вул. Крайня, 1, ТК “Альтаїр”",
   "Режим роботи: 09:00-16:00",
   "Пн - вихідний",
   CONTACTS_TG_IMG,
   getPhone(CONTACTS_LINK_PHONE_KYIV) + ", Людмила"
);
const contactOdesa = new Contact(
   "м. Одеса",
   "Роздріб",
   "вул. Рішельєвська, 48",
   "Режим роботи: 10:00-18:00",
   "Без перерви та вихідних",
   CONTACTS_TG_IMG,
   getPhone(CONTACTS_LINK_PHONE_ODESA) + ", Олександр"
);
const contactOdesa1 = new Contact(
   "м. Одеса, ринок 7км",
   "Опт та роздріб",
   "вул. Центральна, 3354",
   "Режим роботи: 07:00-15:00",
   "Пт - вихідний",
   CONTACTS_TG_IMG,
   getPhone(CONTACTS_LINK_PHONE_ODESA1) + ", Роман"
);
const contactOdesa2 = new Contact(
   "м. Одеса, ринок 7км",
   "Опт та роздріб",
   "вул. Сіра, 2279",
   "Режим роботи: 07:00-15:00",
   "Пт - вихідний",
   CONTACTS_TG_IMG,
   [
      getPhone(CONTACTS_LINK_PHONE_ODESA21) + ", В’ячеслав",
      getPhone(CONTACTS_LINK_PHONE_ODESA22) + ", Марина",
   ]
);
const contactOdesa3 = new Contact(
   "м. Одеса, ринок 7км",
   "Опт та роздріб",
   "вул. Абрикосова, 2152",
   "Режим роботи: 07:00-15:00",
   "Пт - вихідний",
   CONTACTS_TG_IMG,
   [
      getPhone(CONTACTS_LINK_PHONE_ODESA31) + ", Юрій",
      getPhone(CONTACTS_LINK_PHONE_ODESA32) + ", Олександр",
   ]
);
const contactProduction = new Contact(
   "ВИРОБНИЦТВО",
   "м. Бровари",
   "вул. Героїв України, 5/1",
   "Тільки термінові питання",
   "з 9:00 до 18:00",
   CONTACTS_TG_IMG,
   getPhone(CONTACTS_LINK_PHONE_PRODUCTION) + ", Євген"
);

class Contacts {
   constructor() {
      this.contactBrovary = contactBrovary;
      this.contactBoryspil = contactBoryspil;
      this.contactKyiv = contactKyiv;
      this.contactOdesa = contactOdesa;
      this.contactOdesa1 = contactOdesa1;
      this.contactOdesa2 = contactOdesa2;
      this.contactOdesa3 = contactOdesa3;
      this.contactProduction = contactProduction;
   }
   // спочатку була ідея зробити генератор 8 елементів,
   // але коду не так багато.
   // А коррекція може знадобитися у будь-який блок...
   // Такі вони, кастомери =)
   render() {
      const html = `
         <p class="contacts-title">контакти</p>
         <div class="contacts-container">
            <div class="contacts-item">
               <p class="cont-item__title">${this.contactBrovary.title}</p>
               <p class="cont-item__subtitle">${contactBrovary.subtitle}</p>
               <p class="cont-item__address">${contactBrovary.address}</p>
               <div class="cont-item__shedule">
                  <p class="shedule-time">${contactBrovary.scheduleTime}</p>
                  <p class="shedule-days">${contactBrovary.scheduleDays}</p>
               </div>
               <div class="cont-item-phone__block">
                  <img src="${contactBrovary.phoneImg}" alt="" class="phone-img">
                  <a href="${CONTACTS_LINK_PHONE_BROVARY}" class="phone-number hoverable">${contactBrovary.phoneNumber}</a>
               </div>
            </div>
            <div class="contacts-item">
               <p class="cont-item__title">${contactBoryspil.title}</p>
               <p class="cont-item__subtitle">${contactBoryspil.subtitle}</p>
               <p class="cont-item__address">${contactBoryspil.address}</p>
               <div class="cont-item__shedule">
                  <p class="shedule-time">${contactBoryspil.scheduleTime}</p>
                  <p class="shedule-days">${contactBoryspil.scheduleDays}</p>
               </div>
               <div class="cont-item-phone__block">
                  <img src="${contactBoryspil.phoneImg}" alt="" class="phone-img">
                  <a href="${CONTACTS_LINK_PHONE_BORYSPIL}" class="phone-number hoverable">${contactBoryspil.phoneNumber}</a>
               </div>
            </div><div class="contacts-item">
               <p class="cont-item__title">${contactKyiv.title}</p>
               <p class="cont-item__subtitle">${contactKyiv.subtitle}</p>
               <p class="cont-item__address">${contactKyiv.address}</p>
               <div class="cont-item__shedule">
                  <p class="shedule-time">${contactKyiv.scheduleTime}</p>
                  <p class="shedule-days">${contactKyiv.scheduleDays}</p>
               </div>
               <div class="cont-item-phone__block">
                  <img src="${contactKyiv.phoneImg}" alt="" class="phone-img">
                  <a href="${CONTACTS_LINK_PHONE_KYIV}" class="phone-number hoverable">${contactKyiv.phoneNumber}</a>
               </div>
            </div><div class="contacts-item">
               <p class="cont-item__title">${contactOdesa.title}</p>
               <p class="cont-item__subtitle">${contactOdesa.subtitle}</p>
               <p class="cont-item__address">${contactOdesa.address}</p>
               <div class="cont-item__shedule">
                  <p class="shedule-time">${contactOdesa.scheduleTime}</p>
                  <p class="shedule-days">${contactOdesa.scheduleDays}</p>
               </div>
               <div class="cont-item-phone__block">
                  <img src="${contactOdesa.phoneImg}" alt="" class="phone-img">
                  <a href="${CONTACTS_LINK_PHONE_ODESA}" class="phone-number hoverable">${contactOdesa.phoneNumber}</a>
               </div>
            </div><div class="contacts-item">
               <p class="cont-item__title">${contactOdesa1.title}</p>
               <p class="cont-item__subtitle">${contactOdesa1.subtitle}</p>
               <p class="cont-item__address">${contactOdesa1.address}</p>
               <div class="cont-item__shedule">
                  <p class="shedule-time">${contactOdesa1.scheduleTime}</p>
                  <p class="shedule-days">${contactOdesa1.scheduleDays}</p>
               </div>
               <div class="cont-item-phone__block">
                  <img src="${contactOdesa1.phoneImg}" alt="" class="phone-img">
                  <a href="${CONTACTS_LINK_PHONE_ODESA1}" class="phone-number hoverable">${contactOdesa1.phoneNumber}</a>
               </div>
            </div><div class="contacts-item">
               <p class="cont-item__title">${contactOdesa2.title}</p>
               <p class="cont-item__subtitle">${contactOdesa2.subtitle}</p>
               <p class="cont-item__address">${contactOdesa2.address}</p>
               <div class="cont-item__shedule">
                  <p class="shedule-time">${contactOdesa2.scheduleTime}</p>
                  <p class="shedule-days">${contactOdesa2.scheduleDays}</p>
               </div>
               <div class="cont-item-phone__block">
                  <img src="${contactOdesa2.phoneImg}" alt="" class="phone-img">
                  <p class="phone-number">
                     <a class="hoverable" href="${CONTACTS_LINK_PHONE_ODESA21}">${contactOdesa2.phoneNumber[0]}</a>
                     <a class="hoverable" href="${CONTACTS_LINK_PHONE_ODESA22}">${contactOdesa2.phoneNumber[1]}</a>
                  </p>
               </div>
            </div><div class="contacts-item">
               <p class="cont-item__title">${contactOdesa3.title}</p>
               <p class="cont-item__subtitle">${contactOdesa3.subtitle}</p>
               <p class="cont-item__address">${contactOdesa3.address}</p>
               <div class="cont-item__shedule">
                  <p class="shedule-time">${contactOdesa3.scheduleTime}</p>
                  <p class="shedule-days">${contactOdesa3.scheduleDays}</p>
               </div>
               <div class="cont-item-phone__block">
                  <img src="${contactOdesa3.phoneImg}" alt="" class="phone-img">
                  <p class="phone-number">
                     <a class="hoverable" href="${CONTACTS_LINK_PHONE_ODESA31}">${contactOdesa3.phoneNumber[0]}</a>
                     <a class="hoverable" href="${CONTACTS_LINK_PHONE_ODESA32}">${contactOdesa3.phoneNumber[1]}</a>
                  </p>
               </div>
            </div><div class="contacts-item production-tile">
               <p class="cont-item__title">${contactProduction.title}</p>
               <p class="cont-item__subtitle">${contactProduction.subtitle}</p>
               <p class="cont-item__address">${contactProduction.address}</p>
               <div class="cont-item__shedule">
                  <p class="shedule-time">${contactProduction.scheduleTime}</p>
                  <p class="shedule-days">${contactProduction.scheduleDays}</p>
               </div>
               <div class="cont-item-phone__block">
                  <img src="${contactProduction.phoneImg}" alt="" class="phone-img">
                  <a href="${CONTACTS_LINK_PHONE_PRODUCTION}" class="phone-number  hoverable">${contactProduction.phoneNumber}</a>
               </div>
            </div>
         </div>
      `;

      ROOT_CONTACTS.innerHTML = html;
   }
}

const contactsPage = new Contacts();
contactsPage.render();
