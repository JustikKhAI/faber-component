"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Footer =
/*#__PURE__*/
function () {
  function Footer() {
    _classCallCheck(this, Footer);

    this.links = ["Головна", "Каталог", "Гарантія", "Магазини", "Контакти", FOOTER_FACEBOOK, FOOTER_INSTAGRAM];
    this.linkValues = [LINK_TO_INDEX, LINK_TO_CTLG, LINK_TO_GUARANTEE, LINK_TO_SHOPS, LINK_TO_CONTACTS, LINK_TO_FACEBOOK, LINK_TO_INSTAGRAM];
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var container = document.createElement("div");
      container.className = "footer-container";
      var links = [document.createElement("a"), document.createElement("a"), document.createElement("a"), document.createElement("a"), document.createElement("a"), document.createElement("a"), document.createElement("a")];

      for (var i = 0; i < 5; i++) {
        links[i].classList.add("f-text-link", "hoverable");
        links[i].innerText = this.links[i];
        links[i].href = this.linkValues[i];
      }

      links[5].classList.add("f-facebook-link", "hoverable");
      links[5].href = this.linkValues[5];
      links[5].target = "_blank";

      links[5].onmouseover = function () {
        if (!checkTouchFooter()) {
          var qrBlock = document.getElementById("fbqr");
          qrBlock.classList.add("show-qr");
        }
      };

      links[5].onmouseout = function () {
        var qrBlock = document.getElementById("fbqr");
        qrBlock.classList.remove("show-qr");
      };

      var fbQR = document.createElement("div");
      fbQR.className = "hover-block";
      fbQR.id = "fbqr";
      var fbSVG = new QRCode({
        content: this.linkValues[5],
        padding: 0,
        width: 150,
        height: 150,
        join: true,
        color: "#00868a",
        crispEdges: true,
        background: "transparent",
        swap: true,
        ecl: "M"
      });
      fbQR.innerHTML = fbSVG.svg();
      var fbImg = document.createElement("img");
      fbImg.src = this.links[5];
      links[5].append(fbImg, fbQR);
      links[6].classList.add("f-insta-link", "hoverable");
      links[6].href = this.linkValues[6];
      links[6].target = "_blank";

      links[6].onmouseover = function () {
        if (!checkTouchFooter()) {
          var qrBlock = document.getElementById("instaqr");
          qrBlock.classList.add("show-qr");
        }
      };

      links[6].onmouseout = function () {
        var qrBlock = document.getElementById("instaqr");
        qrBlock.classList.remove("show-qr");
      };

      var instaQR = document.createElement("div");
      instaQR.className = "hover-block";
      instaQR.id = "instaqr";
      var instaSVG = new QRCode({
        content: this.linkValues[6],
        padding: 0,
        width: 150,
        height: 150,
        join: true,
        color: "#00868a",
        crispEdges: true,
        background: "transparent",
        swap: true,
        ecl: "M"
      });
      instaQR.innerHTML = instaSVG.svg();
      var instImg = document.createElement("img");
      instImg.src = this.links[6];
      links[6].append(instImg, instaQR);

      for (var _i = 0, _links = links; _i < _links.length; _i++) {
        var item = _links[_i];
        container.appendChild(item);
      }

      ROOT_FOOTER.appendChild(container);
    }
  }]);

  return Footer;
}();

var footerPage = new Footer();