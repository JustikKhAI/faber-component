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

function getAction(price, action) {
   if (action < price) {
      return action;
   }
   return price;
}

function renderSizes(sizes) {
   const sizesWithCount = [];

   // Підраховуємо кількість одиниць в кожному розмірі
   for (const size in sizes) {
      const count = sizes[size];
      if (count > 1) {
         sizesWithCount.push({ size, count });
      }
   }

   // Рендеримо квадратик з текстом розміру, якщо їх більше однієї
   const sizeElements = sizesWithCount
      .map(({ size, count }) => {
         return `<p class="size">${size}</p>`;
      })
      .join("");
   /*(${count})*/
   return sizeElements;
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