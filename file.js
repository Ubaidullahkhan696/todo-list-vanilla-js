const inputField = document.querySelector(".container input[type='text']");

const submitm = document.querySelector(".form-list");

const ul = document.querySelector(".ulstyle");

submitm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputField.value == "") {
    alert("empty field");
  } else {
    const fliedText = inputField.value;

    const newLi = document.createElement("li");

    const innerHtmlText = `
          <span>${fliedText}</span>
          <div class="for-btn">
            <input type="button" value="Done" id="btn" class="done"/>
            <input type="button" value="Remove" id="btn" class="remove"/>
          </div>`;

    newLi.innerHTML = innerHtmlText;

    ul.append(newLi);

    inputField.value = "";
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    const btnDone = e.target.parentNode.previousElementSibling;
    btnDone.style.textDecoration = "line-through";
  }

  if (e.target.classList.contains("remove")) {
    const removeBtn = e.target.parentNode.parentNode;
    removeBtn.remove();
  }
});
