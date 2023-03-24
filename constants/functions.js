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