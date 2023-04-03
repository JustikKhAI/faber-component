let filter1 = ["f-classic", "f-comfort", "f-women"];
let filter2 = ["f-winter", "f-spring", "f-summer", "f-demi"];
const sex = ["классік", "комфорт", "Жіноче"];
const season = ["Зима", "Весна-осінь", "Літо", "Демісезон"];
const catalog = [
   { art: 10, sex: sex[0], season: season[0], price: 123 },
   { art: 11, sex: sex[1], season: season[1], price: 123 },
   { art: 12, sex: sex[2], season: season[2], price: 123 },
   { art: 13, sex: sex[0], season: season[3], price: 123 },
   { art: 14, sex: sex[1], season: season[0], price: 123 },
   { art: 15, sex: sex[2], season: season[1], price: 123 },
   { art: 16, sex: sex[0], season: season[2], price: 123 },
   { art: 17, sex: sex[1], season: season[3], price: 123 },
   { art: 18, sex: sex[2], season: season[0], price: 123 },
   { art: 19, sex: sex[0], season: season[1], price: 123 },
   { art: 20, sex: sex[1], season: season[2], price: 123 },
   { art: 21, sex: sex[2], season: season[3], price: 123 },
];
let elem = document.getElementById(filter1[0]);
elem.classList.add("pushed");
const filteredData = [];

function filterBySex(filter, data, j) {
   let result = [];
   let cond = document.getElementById(filter);
   for (let item of data) {
      if (item.sex == sex[j] && cond.classList.includes("pushed")) {
         result.push(item);
      } else {
         continue;
      }
   }
   return result;
}
filteredData = filterBySex(filter1[0], catalog, 0);
console.log(filteredData);
