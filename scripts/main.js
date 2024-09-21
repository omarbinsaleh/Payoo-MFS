document.addEventListener("DOMContentLoaded", function () {

   const PIN = "1234";

   // add "click" event listener to the log-out button:
   const logOutBtn = document.querySelector("#log-out-btn");
   logOutBtn.addEventListener("click", function () {
      window.open(`${window.location.origin}/Payoo-MFS`);
   })

   // add "click" event listener to the features buttons:
   document.querySelectorAll(".feature").forEach((btn) => {
      btn.addEventListener("click", function (event) {

         // hide all info section:
         const allInfo = document.querySelectorAll("#info-container > section");
         allInfo.forEach((info) => {
            info.classList.add("hidden")
         })

         // display the appropriate section of information:
         const id = btn.dataset.info;
         document.querySelector(`#${id}`).classList.remove("hidden");
         document.querySelector(`#${id}`).querySelector("input").focus();
      })
   })

   // add "submit" event handler to the "Add Money" form:
   const addMoneyForm = document.querySelector("#add-money-form");
   addMoneyForm.addEventListener("submit", function (event) {
      // stop the default form submition
      event.preventDefault();

      // get the information from the user:
      const amount = parseFloat(document.querySelector("#cash-in-amount").value);
      const pinNumber = document.querySelector("#pin-number").value;

      // validate the PIN number:
      if (pinNumber !== PIN) {
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

   // add "submit" event handler to the "Cash Out" form:
   const cashOutForm = document.querySelector("#cash-out-form");
   cashOutForm.addEventListener("submit", function (event) {
      // stop the default form submition
      event.preventDefault();

      // get the information from the user:
      const agentNumber = document.querySelector("#agent-number").value;
      const amount = parseFloat(document.querySelector("#cash-out-amount").value);
      const pinNumber = document.querySelector("#cash-out-pin-number").value;
      console.log(pinNumber)

      // validate the PIN number:
      if (pinNumber !== PIN) {
         alert("Invalid PIN number\nPlease provide the currect PIN number!");
         return;
      }

      // add the money to the main balance:
      const previousBalance = parseFloat(document.querySelector("#balance-amount").innerText);
      console.log("previous balance", previousBalance, typeof previousBalance);
      const newBalance = previousBalance - amount;
      document.querySelector("#balance-amount").innerHTML = newBalance;

      // add an entry to transaction history:
      const icon = "../images/icons/cash-out.png"
      const title = "Cash out";
      createEntry(title, icon);

      //reset the form:
      event.currentTarget.reset();

      // show the user a successful message:
      alert(`An amount of ${amount} USD has been sent successfully\nAgent Number: ${agentNumber}`);

      // set the focus on the input field:
      document.querySelector("#cash-out-amount").focus();

   })

   // add "submit" event handler to the "Transfer Money" form:
   const transferMoneyForm = document.querySelector("#transfer-money-form");
   transferMoneyForm.addEventListener("submit", function (event) {
      // stop the default form submition
      event.preventDefault();

      // get the information from the user:
      const userAccountNumber = document.querySelector("#user-account-number").value;
      const amount = parseFloat(document.querySelector("#transfer-amount").value);
      const pinNumber = document.querySelector("#transfer-money-pin-number").value;
      console.log(pinNumber)

      // validate the PIN number:
      if (pinNumber !== PIN) {
         alert("Invalid PIN number\nPlease provide the currect PIN number!");
         return;
      }

      // add the money to the main balance:
      const previousBalance = parseFloat(document.querySelector("#balance-amount").innerText);
      console.log("previous balance", previousBalance, typeof previousBalance);
      const newBalance = previousBalance - amount;
      document.querySelector("#balance-amount").innerHTML = newBalance;

      // add an entry to transaction history:
      const icon = "../images/icons/transfer-money.png"
      const title = "Money Transfer";
      createEntry(title, icon);

      //reset the form:
      event.currentTarget.reset();

      // show the user a successful message:
      alert(`An amount of ${amount} USD has been transferred successfully\nTo,\n Account Number: ${userAccountNumber}`);

      // set the focus on the input field:
      document.querySelector("#cash-out-amount").focus();

   })

})