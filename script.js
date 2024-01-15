let items = document.getElementById("items");
let btn = document.createElement("button");

fetch("Data.json")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((el) => {
      items.innerHTML += `
    <div class="box">
    <h2 class="nameUser">${el.name}</h2>
     <h3>${el.profession}</h3>
     <p>${el.work}</p>
     <div class = "btnContainer">
     <a href="./contactme/contact.html">
     <button>Contact me</button>
     </a>
     </div>
     </div>
     <div>
     <img class="images" src=${el.image}/>
    </div>
    `;
    })
  );
