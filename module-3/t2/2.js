document.querySelector("#target").appendChild(document.createElement("li")).textContent = "First item";
const item2 = document.querySelector("#target").appendChild(document.createElement("li"));
document.querySelector("#target").appendChild(document.createElement("li")).textContent = "Third item";


item2.classList.add("my-item");
item2.textContent = "Second item";