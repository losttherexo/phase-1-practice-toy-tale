let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

fetch("http://localhost:3000/toys")
  .then(r => r.json())
  .then(data => {
    data.forEach(createCard(data))
   })

    const toyContainer = document.querySelector("#toy-collection")
    function createCard(data) {
    
        const newDiv = document.createElement("div")
        newDiv.className = "card"
        const toyName = document.createElement("h2")
        const toyImage = document.createElement("img")
        const toyLikes = document.createElement("p") 
        const toyButton = document.createElement("button")
        let i = 0
        toyImage.src = data[`${i}`].image
        toyContainer.append(toyImage)        
        console.log(toyImage)
      };         
    
    