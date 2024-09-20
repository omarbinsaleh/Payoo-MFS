document.addEventListener("DOMContentLoaded", function() {

   const PIN = "1234";

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