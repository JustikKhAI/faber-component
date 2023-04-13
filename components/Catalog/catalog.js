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
   buildProduct() {
      let catalogItem = document.createElement("div");
      catalogItem.classList.add("catalog-item", this.sexClass(), this.seasonClass());
      catalogItem.id = `prod-${this.articul}`;


      let itemImg = document.createElement("img");
      itemImg.className = "c-item__img";
      itemImg.src = this.img;

      let itemName = document.createElement("p");
      itemName.className = "c-item__name";
      itemName.innerText = this.name;

      let itemColor = document.createElement("p");
      itemColor.className = "c-item__color";
      itemColor.innerHTML = `<span>Колір: </span>${this.color.toLowerCase()}`;

      let itemSeason = document.createElement("p");
      itemSeason.className = "c-item__season";
      itemSeason.innerHTML = `<span>Сезон: </span>${this.season.toLowerCase()}`;

      let itemOutside = document.createElement("p");
      itemOutside.className = "c-item__outside";
      itemOutside.innerHTML = `<span>Матеріал верху: </span>${this.outside.toLowerCase()}`;

      let itemInside = document.createElement("p");
      itemInside.className = "c-item__inside";
      itemInside.innerHTML = `<span>Матеріал в середині: </span>${this.inside.toLowerCase()}`;

      let itemSize = document.createElement("div");
      itemSize.className = "c-item__size";
      itemSize.innerHTML = this.sexSizes();

      let itemPriceBlock = document.createElement("div");
      itemPriceBlock.className = "c-item-price__block";
      
      let itemAction = document.createElement("p");
      itemAction.classList.add(
         "c-item__action",
         getActionSale(this.price, this.sale)
      );
      itemAction.innerText = `${this.sale.toLocaleString("ru-RU")} ₴`;

      let itemPriceElem = document.createElement("div");
      itemPriceElem.className = "c-item-price__elem";

      let itemPriceImg = document.createElement("img");
      itemPriceImg.classList.add(
         "price-img",
         getActionImg(this.price, this.sale)
      );
      itemPriceImg.src = CATALOG_PRICE_OVERLINE;

      let itemPrice = document.createElement("p");
      itemPrice.classList.add(
         "c-item__price",
         getActionPrice(this.price, this.sale)
      );
      itemPrice.innerText = `${this.price.toLocaleString("ru-RU")} ₴`;

      itemPriceElem.append(itemPriceImg, itemPrice);
      itemPriceBlock.append(itemAction, itemPriceElem);

      let itemArticul = document.createElement("div");
      itemArticul.className = "c-item__art";

      let itemArtText = document.createElement("div");
      itemArtText.className = "art__text";
      itemArtText.innerHTML = `<span>Артикул: </span>${this.articul}`;

      // let itemArtButton = document.createElement("div");
      // itemArtButton.className = "art__button";
      // itemArtButton.onclick = (event) => {
         
      //       // const text = this.articul;
      //       navigator.clipboard.writeText(this.articul);
      //       itemArticul.classList.add('copied');
      //       setTimeout(function () {
      //       itemArticul.classList.remove("copied");
               
      //       },1500)
      //       console.log("Текст був успішно скопійований в буфер обміну");
         
      // };


      let itemArtBtnImg = document.createElement("img");
      itemArtBtnImg.className = "art__img";
      itemArtBtnImg.src = CATALOG_COPY;

      // itemArtButton.appendChild(itemArtBtnImg);
      itemArticul.append(itemArtText/*, itemArtButton*/);

      catalogItem.append(
         itemImg,
         itemName,
         itemColor,
         itemSeason,
         itemOutside,
         itemInside,
         itemSize,
         itemPriceBlock,
         itemArticul
      );
      return catalogItem;

   }
}

class Catalog {
   constructor() {
      this.products = [];
   }
   // buildCatalog() {
   //    this.products.forEach((product) => product.buildProduct());
   // }
   render() {
      const htmlCat = document.createElement("div");
      htmlCat.className = "catalog-container";

      this.products.forEach((product) => {
         let tmp = product.buildProduct();
         htmlCat.appendChild(tmp);
      });
      ROOT_CATALOG.appendChild(htmlCat);
   }

   generateProducts(data) {
      this.products = data.map((productData) => new Product(productData));
   }
}

const catalogPage = new Catalog();



