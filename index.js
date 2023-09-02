const text = document.getElementById("text");
const description = document.querySelector(".textarea");
const form = document.getElementById("form");
const tasks = document.querySelector(".tasks");
const buttons = document.getElementsByClassName("delete");
const collection = document.getElementsByClassName("target");

document.addEventListener('click',(e) =>{
  const currentEl = e.target.className;
  const rootParentNode = ((e.target.parentNode).parentNode);
  if (currentEl === 'delete') {
    rootParentNode.classList.add('hidden');
  }
});

function deleteFromClass(cls) {
  document.querySelector(cls).remove();
}

function putData(value1, value2) {
  try {
    const target = document.createElement("div");
    target.classList.add("target");
    tasks.appendChild(target);

    const controls = document.createElement("div");
    controls.classList.add("controls");
    target.appendChild(controls);

    const h2 = document.createElement("h2");
    h2.innerText = value1;
    controls.appendChild(h2);

    const close = document.createElement("button");
    close.id = "delete";
    close.classList.add("delete");
    close.innerText = "X";

    controls.appendChild(close);

    const content = document.createElement("div");
    content.classList.add("content");
    target.appendChild(content);

    const p = document.createElement("p");
    p.innerText = value2;
    content.appendChild(p);
  } catch (e) {
    console.log(e);
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = text.value;
  let desc = description.textContent;
  if (title == "" || desc == "") {
    alert("put a true value");
  } else {
    putData(title, desc);
    text.value = '';
    description.textContent = '';
    // for (let i = 0; i < collection.length; i++) {
    //   buttons[i].addEventListener("click", () => {
    //     collection[i].remove();
    //   });
    //   console.log(`Button:${buttons[i]}\n Target:${collection[i]}`);  
    // }
  }
});
