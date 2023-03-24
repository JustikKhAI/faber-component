class Product {
   constructor(data) {
      this.counter = data.counter;
      this.type = data.type;
      this.season = data.season;
      this.price = parseFloat(data.price);
      this.action = parseFloat(data.action);
      this.articul = data.articul;
      this.img = data.img;
      this.sizes = {
         37: data.s37,
         38: data.s38,
         39: data.s39,
         40: data.s40,
         41: data.s41,
         42: data.s42,
         43: data.s43,
         44: data.s44,
         45: data.s45,
      };
   }

   render() {
      const html = `
         <div class="catalog-item" id="prod-${this.counter}">
            <p class="c-item__type">${this.type}</p>
            <img class="c-item__img" src="${this.img}"/>
            <p class="c-item__season">${this.season}</p>
            <div class="sizes-enable">${renderSizes(this.sizes)}</div>
            <p class="c-item__price">${getAction(this.price, this.action)}</p>
            
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
