class Spinner {
   handleClear() {
      ROOT_SPINNER.innerHTML = "";
   }

   render() {
      const html = `
      <div class="spinner-container">
         <img src="${SPINNER_IMG800PX}" class="spinner__img"/>
      </div>
      `;

      ROOT_SPINNER.innerHTML = html;
   }
}

spinnerPage = new Spinner();

