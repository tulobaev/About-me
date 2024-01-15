let data = document.getElementById("data");
let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("inputEmail");
let inputMessage = document.getElementById("inputMessage");
let btn = document.getElementById("btn");
let items = document.getElementById("items");

fetch("contact.json")
  .then((response) => response.json())
  .then((dataUser) => {
    dataUser.forEach((el) => {
      data.innerHTML += `
       <div class="locationBox">
       <img src="${el.img}"/>
       <h1>${el.location}</h1>
       <h2>${el.city}</h2>
       <h2>${el.Street}</h2>
       </div>
       <div class="phoneBox">
       <img src="${el.imgPhone}"/>
       <h1>${el.Phone}</h1>
       <h2>${el.numberPhone}</h2>
       <h2>${el.numberPhone2}</h2>
       </div>

       <div class="emailBox">
       <img src="${el.imgEmail}"/>
       <h1>${el.email}</h1>
       <h2>${el.emailP}</h2>
       </div>
       `;
    });
  });

btn.addEventListener("click", () => {
  let obj = {
    name: inputName.value,
    email: inputEmail.value,
    message: inputMessage.value,
  };

  let date = JSON.parse(localStorage.getItem("Data")) || [];
  date.push(obj);
  localStorage.setItem("todolist", JSON.stringify(date));
  getProduct();
});
function getProduct() {
  let newDate = JSON.parse(localStorage.getItem("todolist")) || [];
  items.innerHTML = "";
  newDate.forEach((el) => {
    items.innerHTML += `
        <div class="dataUser">
        <h3>Name:${el.name}</h3>
        <h3>Email: ${el.email}</h3>
        <p>Message:${el.message}</p>
        </div>`;
  });

  inputName.value = "";
  inputEmail.value = "";
  inputMessage.value = "";
}
