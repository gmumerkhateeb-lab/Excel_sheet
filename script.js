// document.querySelector(".menu-btn").addEventListener("click", () => {
//   alert("Sidebar Open!");
// });

// function removeRow(el) {
//     el.parentElement.parentElement.remove();
// }

// apps
const svgIcon = document.querySelector(".right .dots");
const appsMenu = document.querySelector(".apps");
svgIcon.addEventListener("click", () => {
  appsMenu.style.display =
    appsMenu.style.display === "block" ? "none" : "block";
});
document.addEventListener("click", (e) => {
  if (!svgIcon.contains(e.target) && !appsMenu.contains(e.target)) {
    appsMenu.style.display = "none";
  }
});

// profile
const profile = document.querySelector(".profile");
const accountBox = document.getElementById("boxDiv");

profile.addEventListener("click", (e) => {
  e.stopPropagation();
  if (accountBox.style.display === "block") {
    accountBox.style.display = "none";
  } else {
    accountBox.style.display = "block";
  }
});

document.addEventListener("click", (e) => {
  if (!accountBox.contains(e.target) && !profile.contains(e.target)) {
    accountBox.style.display = "none";
  }
});

// account
document.querySelector(".cross").addEventListener("click", function () {
  document.getElementById("boxDiv").style.display = "none";
});

// filter
const ownerSelect = document.getElementById("ownerSelect");
const rows = document.querySelectorAll(".row");

ownerSelect.addEventListener("change", function () {
  const selectedValue = this.value;

  rows.forEach((row) => {
    const rowOwner = row.getAttribute("data-owner");

    if (selectedValue === "Owned by anyone" || rowOwner === selectedValue) {
      row.style.display = "flex";
    } else {
      row.style.display = "none";
    }
  });
});

// sidebar
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("visible");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("visible");
});

// remove & rename

document.querySelectorAll(".row").forEach((row) => {
  const icon = row.querySelector(".removeicon");
  const popup = row.querySelector(".popup");
  const renameBtn = row.querySelector(".renameBtn");
  const removeBtn = row.querySelector(".removeBtn");
  const closeBtn = row.querySelector(".closePopup");

  icon.addEventListener("click", (e) => {
    e.stopPropagation();

    document.querySelectorAll(".popup").forEach((p) => {
      p.style.display = "none";
    });

    popup.style.display = "block";
  });

  renameBtn.addEventListener("click", () => {
    const newName = prompt("Enter new name:");

    if (newName) {
      const title = row.querySelector(".subrow p");
      title.textContent = newName;
    }

    popup.style.display = "none";
  });

  removeBtn.addEventListener("click", () => {
    row.remove();
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".popup").forEach((p) => {
    p.style.display = "none";
  });
});
