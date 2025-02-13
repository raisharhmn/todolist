let addButton = document.getElementById("addbutton");
let list = document.getElementById("list");
let inputList = document.getElementById("input-list");
let endButton = document.getElementsByClassName("button1");

// menghapus semua list ketika halaman dibuka
document.addEventListener("DOMContentLoaded", function () {
  list.innerHTML = "";
  for (let button of endButton) {
    button.classList.remove("active");
  }
});

//menambahkan nomor otomatis
let taskNumber = 1;

// add list ketika button di klik
addButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (inputList.value !== "") {
    var paragraph = document.createElement("p");
    paragraph.innerText = taskNumber + ". " + inputList.value;
    list.appendChild(paragraph);

    taskNumber++;

    inputList.value = "";

    paragraph.addEventListener("click", function () {
      if (paragraph.style.textDecoration === "line-through") {
        paragraph.style.textDecoration = "none"; // Hapus garis tengah
      } else {
        paragraph.style.textDecoration = "line-through"; // Tambah garis tengah
      }
    });

    if (list.children.length > 0) {
      for (let button of endButton) {
        button.classList.add("active");
      }
    }
  }
});

// clear completed button
document
  .querySelector(".button1:nth-child(1)")
  .addEventListener("click", function () {
    let tasks = list.getElementsByTagName("p");
    for (let i = tasks.length - 1; i >= 0; i--) {
      let task = tasks[i];
      if (task.style.textDecoration === "line-through") {
        task.remove();
      }
    }
    updateTaskNumbers();
  });

// clear all button
document
  .querySelector(".button1:nth-child(2)")
  .addEventListener("click", function () {
    list.innerHTML = "";
    taskNumber = 1;
    for (let button of endButton) {
      button.classList.remove("active");
    }
  });

// memperbarui nomor tugas setelah tugas selesai dihapus
function updateTaskNumbers() {
  let tasks = list.getElementsByTagName("p");
  let currentNumber = 1;
}

// mengatur ulang nomor tugas setelah dihapus
for (let task of tasks) {
  task.innerText = currentNumber + ". " + task.innerText.split(". ")[1];
  currentNumber++;
}
