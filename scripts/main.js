document.addEventListener("DOMContentLoaded", function() {

   const PIN = "1234";

   // add "submit" event handler to the login form:
   const loginForm = document.querySelector("#login-form");
   loginForm.addEventListener("submit", function(event) {
      // stop the default form submition:
      event.preventDefault();

      // get the user information:
      const mobileNumber = document.querySelector("#mobile-number").innerText;
      const loginPinNumber = document.querySelector("#login-pin-number");
      console.log(mobileNumber, loginPinNumber);

      // redirect to the home page:
      window.location.href = "./pages/home.html";
   })

   // add "click" event listener to the log-out button:
   const logOutBtn = document.querySelector("#log-out-btn");
   logOutBtn.addEventListener("click", function() {
      window.location.replace(window.location.origin);
   })


   // add "click" event listener to the features buttons:
   document.querySelectorAll(".feature").forEach((btn) => {
      btn.addEventListener("click", function(event) {

         // hide all info section:
         const allInfo = document.querySelectorAll("#info-container > section");
         allInfo.forEach((info) => {
            info.classList.add("hidden")
         })

         // display the appropriate section of information:
         const id = btn.dataset.info;
         document.querySelector(`#${id}`).classList.remove("hidden");
      })
   })

   // add "submit" event handler to the add money form:
   const addMoneyForm = document.querySelector("#add-money-form");
   addMoneyForm.addEventListener("submit", function(event) {
      // stop the default form submition
      event.preventDefault();

      // get the information from the user:
      const amount = parseFloat(document.querySelector("#cash-in-amount").value);
      const pinNumber = document.querySelector("#pin-number").value;

      // validate the PIN number:
      if(pinNumber !== PIN) {
         alert("Invalid PIN number\nPlease provide the currect PIN number!");
         return;
      }

      // add the money to the main balance:
      const previousBalance = parseFloat(document.querySelector("#balance-amount").innerText);
      console.log("previous balance", previousBalance, typeof previousBalance);
      const newBalance = previousBalance + amount;
      document.querySelector("#balance-amount").innerHTML = newBalance;

      // add an entry to transaction history:
      const icon = "../images/icons/add-money.png"
      const title = "Cash in";
      createEntry(title, icon);

      //reset the form:
      event.currentTarget.reset();

      // show the user a successful message:
      alert("Money added  successfully!");

      // set the focus on the input field:
      document.querySelector("#cash-in-amount").focus();

   })


})