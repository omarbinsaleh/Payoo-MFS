function createEntry(title, icon) {
   const dateTime = new Date();

   const li = document.createElement("li");
   li.innerHTML = `
      <li class="py-3 px-4 bg-white rounded-md flex items-center justify-between">
         <div class="flex items-center gap-2">
            <div class="p-3 rounded-full bg-gray-200 inline-flex justify-center items-center">
               <img class="w-[25px] aspect-square " src=${icon} alt="">
            </div>
            <div>
               <h3 class="text-slate-700 font-bold">${title}</h3>
               <p class="text-sm text-slate-500">Today at ${dateTime.getHours()}:${dateTime.getMinutes()} ${dateTime.getHours() > 12 ? 'PM' : 'AM'}</p>
            </div>
         </div>

         <button>
            <div class="text-[4px] flex flex-col gap-[3px]">
               <i class="fa fa-circle" aria-hidden="true"></i>
               <i class="fa fa-circle" aria-hidden="true"></i>
               <i class="fa fa-circle" aria-hidden="true"></i>
            </div>
         </button>
      </li>
   `

   document.querySelector("#list-transactions").appendChild(li);
}