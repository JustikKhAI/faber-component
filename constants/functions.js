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

function getActionSale(price, sale) {
   if (sale != 0 && sale < price) {
      return "action-enabled";
      // result[1] = "img-visible";
      // result[2] = "price-inactive";
   } else {
      return "action-disabled";
      // result[1] = "img-invisible";
      // result[2] = "price-active";
   }
}
function getActionImg(price, sale) {
   if (sale != 0 && sale < price) {
      return "img-visible";
      // result[2] = "price-inactive";
   } else {
      return "img-invisible";
      // result[2] = "price-active";
   }
}
function getActionPrice(price, sale) {
   if (sale != 0 && sale < price) {
      return "price-inactive";
   } else {
      return "price-active";
   }
}

function createWayFoto(basicWay) {
   let result;
   let resStart = basicWay.slice(0, -4);
   let resEnd = basicWay.slice(-4);
   let a = 1200;
   let b = 992;
   let c = 768;
   let d = 560;
   let e = 320;
   let f = "-min";
   if (window.innerWidth >= a) {
      result = resStart + a + resEnd;
   } else if (window.innerWidth >= b) {
      result = resStart + b + resEnd;
   } else if (window.innerWidth >= c) {
      result = resStart + c + resEnd;
   } else if (window.innerWidth >= d) {
      result = resStart + d + resEnd;
   } else if (window.innerWidth >= e) {
      result = resStart + e + resEnd;
   } else {
      result = resStart + f + resEnd;
   }
   return result;
}
function checkTouchDevice() {
   const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
   const elements = document.querySelectorAll(".hoverable");
   if (isTouchDevice) {
      elements.forEach(item => item.classList.remove("hoverable"));
   }
}
function checkTouchFooter() {
      const isTouchDevice =
         "ontouchstart" in window ||
         navigator.maxTouchPoints > 0 ||
         navigator.msMaxTouchPoints > 0;
   return isTouchDevice;
}
