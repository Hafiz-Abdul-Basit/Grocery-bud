let input = document.querySelector(".entered-list");
let addBtn = document.querySelector(".add-list");
let tasks = document.querySelector(".tasks");
const clearBtn = document.querySelector(".clearBtn");

// Remove the entire list

const clearTaskList = () => {
  tasks.innerHTML = "";
  clearBtn.classList.add("disable");
};
clearBtn.addEventListener("click", clearTaskList);
// Add btn disabled

input.addEventListener("keyup", () => {
  if (input.value.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});

// Add New item to list

addBtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    clearBtn.classList.remove("disable");
    newItem.innerHTML = `
 
     <p>${input.value}</p>
          <div class="item-btn">
            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
          </div>
    `;
    tasks.appendChild(newItem);
    input.value = "";
  } else {
    alert("Please enter a task");
  }
});

// Delete item from list

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.parentElement.remove();
  }
});

// Mark item as completed

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
});
