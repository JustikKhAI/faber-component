// LINKS TO OTHER PAGES AND RESOURCES
const LINK_TO_INDEX = "/index.html";
const LINK_TO_CTLG = "/catalog-page.html";
const LINK_TO_GUARANTEE = "/index.html#guarantee";
const LINK_TO_SHOPS = "/index.html#shops";
const LINK_TO_CONTACTS = "#contacts";

const LINK_TO_FACEBOOK = "#";
const LINK_TO_INSTAGRAM = "#";

// HEADER MEDIA LINKS

const HEADER_LOGO = "img/header/logo.svg";
const HEADER_CTLG_IMG = "img/header/catalogImg.svg";
const HEADER_FACEBOOK = "img/header/facebook.svg";
const HEADER_INSTAGRAM = "img/header/instagram.svg";

// MAIN MEDIA LINKS

// const MAIN_BG_IMG = "img/main/bg-image.svg";
const MAIN_FOTO = "img/main/main_foto.png";

// GUARANTEE MEDIA LINKS

const GUARANTEE_REPARE_FOTO = "img/guarantee/repare-foto.png";
const GUARANTEE_SERVICE_FOTO = "img/guarantee/service-foto.png";

// SHOPS MEDIA LINKS

const SHOPS_BROVARY = "img/shops/bro_bg.png";
const SHOPS_KYIV = "img/shops/Kyiv_bg.png";
const SHOPS_BORYSPIL = "img/shops/Bor_bg.png";
const SHOPS_ODESA = "img/shops/od_bg.png";

const SHOPS_LINK_PHONE_BROVARY = "tel:+380957318885";
const SHOPS_LINK_PHONE_KYIV = "tel:+380677611741";
const SHOPS_LINK_PHONE_BORYSPIL = "tel:+380987727734";
const SHOPS_LINK_PHONE_ODESA = "tel:+380992526307";

function getPhone(phone) {
   const result =
      phone.substr(7, 3) +
      " " +
      phone.substr(10, 3) +
      "-" +
      phone.substr(13, 2) +
      "-" +
      phone.substr(15, 2);
   return result;
}


// SPINNER MEDIA LINKS

// https://loading.io/asset/646912

const SPINNER_IMG800PX = "img/spinner/spinner800px.svg";

// CATALOG MEDIA LINKS


function getAction(price, action) {
   if (action < price) {
      return action;
   }
   return price;
}