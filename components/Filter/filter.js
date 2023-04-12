class Filter {
   constructor() {
      this.idsArr1 = ["sex-classic", "sex-comfort", "sex-women"];
      this.idsArr2 = [
         "season-summer",
         "season-spring",
         "season-demi",
         "season-winter",
      ];
      this.sexText = [
         "Чоловіче взуття класичне",
         "Чоловіче взуття комфортне",
         "Жіноче взуття",
      ];
      this.seasonText = ["Літо", "Весна-осінь", "Демісезон", "Зима"];
   }
   render() {
      const html = `
      <div class="filter-block">
         <div class="filter-container">
            <ul class="filter-item">
               <li id="${this.idsArr1[0]}" class="sex-filter hoverable">${this.sexText[0]}</li>
               <li id="${this.idsArr1[1]}" class="sex-filter hoverable">${this.sexText[1]}</li>
               <li id="${this.idsArr1[2]}" class="sex-filter hoverable">${this.sexText[2]}</li>
            </ul>
         </div>
         <div class="filter2-container">
            <ul class="filter-item">
               <li id="${this.idsArr2[0]}" class="season-filter hoverable">${this.seasonText[0]}</li>
               <li id="${this.idsArr2[1]}" class="season-filter hoverable">${this.seasonText[1]}</li>
               <li id="${this.idsArr2[2]}" class="season-filter hoverable">${this.seasonText[2]}</li>
               <li id="${this.idsArr2[3]}" class="season-filter hoverable">${this.seasonText[3]}</li>
            </ul>
         </div>
      </div>
      `;
      ROOT_CAT_FILTER.innerHTML = html;
   }
}
const filterPage = new Filter();

let activeSexFilters = [];
let activeSeasonFilters = [];

function filterHandler(event) {
   if (event.target.tagName !== "LI") {
      return false;
   } else {
      const id = event.target.id;

      if (!event.target.classList.contains("active-filter")) {
         event.target.classList.add("active-filter");
         if (id.startsWith("sex-")) {
            activeSexFilters.push(id);
         } else if (id.startsWith("season-")) {
            activeSeasonFilters.push(id);
         }
      } else {
         event.target.classList.remove("active-filter");
         if (id.startsWith("sex-")) {
            activeSexFilters = activeSexFilters.filter(
               (filter) => filter !== id
            );
         } else if (id.startsWith("season-")) {
            activeSeasonFilters = activeSeasonFilters.filter(
               (filter) => filter !== id
            );
         }
      }
      catalogPage.products.map((item) => {
         let elem = document.getElementById(`prod-${item.articul}`);
         if (
            (activeSexFilters.length === 0 ||
               activeSexFilters.includes(item.sexClass())) &&
            (activeSeasonFilters.length === 0 ||
               activeSeasonFilters.includes(item.seasonClass()))
         ) {
            elem.classList.add("show-item");
            elem.classList.remove("hide-item");
         } else {
            elem.classList.remove("show-item");
            elem.classList.add("hide-item");
         }
      });
   }
}