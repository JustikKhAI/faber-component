class Product {
   constructor(data) {
      this.articul = data.ARTICUL;
      this.name = data.NAME;
      this.sex = data.SEX;
      this.color = data.COLOR;
      this.season = data.SEASON;
      this.outside = data.OUTSIDE;
      this.inside = data.INSIDE;
      this.price = parseFloat(data.PRICE);
      this.sale = parseFloat(data.SALE);
      this.img = data.IMG;
      this.sizes = [1, 2, 3, 4, 5, 6];
      this.sexClass = function () {
         if (this.sex == "жіноче") {
            return "sex-women";
         } else if (this.sex == "комфорт") {
            return "sex-comfort";
         } else if (this.sex == "классік") {
            return "sex-classic";
         } else {
            return "";
         }
      };
      this.seasonClass = function () {
         if (this.season == "літо") {
            return "season-summer";
         } else if (this.season == "весна-осінь") {
            return "season-spring";
         } else if (this.season == "зима") {
            return "season-winter";
         } else if (this.season == "демісезон") {
            return "season-demi";
         } else {
            return "";
         }
      };
      this.sexSizes = function () {
         let sizesCode = ``;
         if (this.sex == "жіноче") {
            for (let i = 0; i < this.sizes.length; i++) {
               sizesCode += `<p class="size">${this.sizes[i] + 35}</p>`;
            }
         } else {
            for (let i = 0; i < this.sizes.length; i++) {
               sizesCode += `<p class="size">${this.sizes[i] + 39}</p>`;
            }
         }
         return sizesCode;
      };
   }

   render() {
      const html = `
         <div class="catalog-item ${this.sexClass()} ${this.seasonClass()}" id="prod-${
         this.articul
      }">
            <img class="c-item__img" src="${this.img}"/>
            <p class="c-item__name">${this.name}</p>
            <p class="c-item__color"><span>Колір: </span>${this.color}</p>
            <p class="c-item__season"><span>Сезон: </span>${this.season}</p>
            <p class="c-item__outside"><span>Матеріал верху: </span>${
               this.outside
            }</p>
            <p class="c-item__inside"><span>Матеріал в середині: </span>${
               this.inside
            }</p>
            <div class="c-item__size">${this.sexSizes()}</div>
            <div class="c-item-price__block">
               <p class="c-item__action ${getActionSale(
                  this.price,
                  this.sale
               )}">${this.sale.toLocaleString("ru-RU")} ₴</p>
               <div class="c-item-price__elem">
                  <img class="price-img ${getActionImg(
                     this.price,
                     this.sale
                  )}" src="${CATALOG_PRICE_OVERLINE}"/>
                  <p class="c-item__price ${getActionPrice(
                     this.price,
                     this.sale
                  )}">${this.price.toLocaleString("ru-RU")} ₴</p>
               </div>
            </div>
            <div class="c-item__art">
               <div class="art__text"><span>Артикул:</span>${this.articul}</div>
               <div class="art__button"><img class="art__img" src="${CATALOG_COPY}"/></div>            
            </div>
            
         </div>
      `;
      return html;
   }
}

class Catalog {
   constructor() {
      this.products = [];
   }

   render() {
      const code = this.products.map((product) => product.render()).join("");
      const html = `<div class="catalog-container">${code}</div>`;
      ROOT_CATALOG.innerHTML = html;
   }

   generateProducts(data) {
      this.products = data.map((productData) => new Product(productData));
   }
}

const catalogPage = new Catalog();

// document
//    .querySelector("div.filter-container")
//    .addEventListener("click", (event) => {
//       if (event.target.tagName !== "LI") return false;

//       let filterClass = event.target.dataset["f"];
//       console.log(filterClass);
//    });
