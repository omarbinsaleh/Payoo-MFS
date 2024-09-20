document.addEventListener("DOMContentLoaded", function () {
   // add "submit" event handler to the login form:
   const loginForm = document.querySelector("#login-form");
   loginForm.addEventListener("submit", function (event) {
      // stop the default form submition:
      event.preventDefault();

      // get the user information:
      const mobileNumber = document.querySelector("#mobile-number").innerText;
      const loginPinNumber = document.querySelector("#login-pin-number");
      console.log(mobileNumber, loginPinNumber);

      // validate the pin number:
      if (loginPinNumber !== "1234") {
         alert("Invalid PIN or Mobile Number\nTry again.")
         
         // reset the login form:
         event.currentTarget.reset();

         // set focus:
         document.querySelector("#mobile-number").focus();

         return;
      }



      // redirect to the home page:
      window.open(`${window.location.origin}/pages/home.html`);
   })

  

})