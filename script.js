const input = document.getElementById(`input-box`);
const listContainer = document.querySelector(`.list-container`);

function addTask() {
  if (input.value === "") {
    alert(`Empty, please fill in`);
  } else {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);

    let close = document.createElement(`span`);
    close.innerHTML = `\u00d7`;
    close.classList.add(`close`);

    li.appendChild(close);
  }
  input.value = "";
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("cheked");
    } else if (e.target.tagName === `SPAN`) {
      e.target.parentElement.remove();
    }
  },
  false
);
