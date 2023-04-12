class Footer {
   constructor() {
      this.links = [
         "Головна",
         "Каталог",
         "Гарантія",
         "Магазини",
         "Контакти",
         FOOTER_FACEBOOK,
         FOOTER_INSTAGRAM,
      ];
      this.linkValues = [
         LINK_TO_INDEX,
         LINK_TO_CTLG,
         LINK_TO_GUARANTEE,
         LINK_TO_SHOPS,
         LINK_TO_CONTACTS,
         LINK_TO_FACEBOOK,
         LINK_TO_INSTAGRAM,
      ];
   }
   render() {
      const container = document.createElement("div");
      container.className = "footer-container";

      const links = [
         document.createElement("a"),
         document.createElement("a"),
         document.createElement("a"),
         document.createElement("a"),
         document.createElement("a"),
         document.createElement("a"),
         document.createElement("a"),
      ];

      for (let i = 0; i < 5; i++) {
         links[i].classList.add("f-text-link", "hoverable");
         links[i].innerText = this.links[i];
         links[i].href = this.linkValues[i];
      }

      links[5].classList.add("f-facebook-link", "hoverable");
      links[5].href = this.linkValues[5];
      links[5].target = "_blank";
      links[5].onmouseover = function () {
         let qrBlock = document.getElementById("fbqr");
         qrBlock.classList.add("show-qr");
      };
      links[5].onmouseout = function () {
         let qrBlock = document.getElementById("fbqr");
         qrBlock.classList.remove("show-qr");
      };

      const fbQR = document.createElement("div");
      fbQR.className = "hover-block";
      fbQR.id = "fbqr";

      const fbSVG = new QRCode({
         content: this.linkValues[5],
         padding: 0,
         width: 150,
         height: 150,
         join: true,
         color: "#00868a",
         crispEdges: true,
         background: "transparent",
         swap: true,
         ecl: "M",
      });
      fbQR.innerHTML = fbSVG.svg();

      const fbImg = document.createElement("img");
      fbImg.src = this.links[5];

      links[5].append(fbImg, fbQR);

      links[6].classList.add("f-insta-link", "hoverable");
      links[6].href = this.linkValues[6];
      links[6].target = "_blank";
      links[6].onmouseover = function () {
         let qrBlock = document.getElementById("instaqr");
         qrBlock.classList.add("show-qr");
      };
      links[6].onmouseout = function () {
         let qrBlock = document.getElementById("instaqr");
         qrBlock.classList.remove("show-qr");
      };

      const instaQR = document.createElement("div");
      instaQR.className = "hover-block";
      instaQR.id = "instaqr";

      const instaSVG = new QRCode({
         content: this.linkValues[6],
         padding: 0,
         width: 150,
         height: 150,
         join: true,
         color: "#00868a",
         crispEdges: true,
         background: "transparent",
         swap: true,
         ecl: "M",
      });
      instaQR.innerHTML = instaSVG.svg();

      const instImg = document.createElement("img");
      instImg.src = this.links[6];
      links[6].append(instImg, instaQR);

      for (let item of links) {
         container.appendChild(item);
      }
      ROOT_FOOTER.appendChild(container);
   }
}

const footerPage = new Footer();
