const container = document.querySelector("#container");

const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!";

const h3 = document.createElement("h3");
h3.style.backgroundColor = "blue";
h3.textContent = "I'm a blue h3!";

const div = document.createElement("div");
div.setAttribute("style", "background-color:pink; border: 5px solid black; height: 500px;");

const h1 = document.createElement("h1");
 h1.textContent = "I'm in a div";

const p2 = document.createElement("p2");
p2.textContent = "ME TOO!";


container.appendChild(p);
container.appendChild(h3);
div.appendChild(h1);
div.appendChild(p2);
container.appendChild(div);
