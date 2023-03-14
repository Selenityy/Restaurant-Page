export default function homeNavBar() {
  const content = document.getElementById("content");

  const header = document.createElement("div");
  header.setAttribute("id", "headerContent");
  content.appendChild(header);

  const homeNavBtn = document.createElement("button");
  homeNavBtn.classList.add("headerNavBtn");
  homeNavBtn.setAttribute("id", "homeNavBtn");
  homeNavBtn.value = "home";
  homeNavBtn.textContent = "Home";
  header.appendChild(homeNavBtn);

  const menuNavBtn = document.createElement("button");
  menuNavBtn.classList.add("headerNavBtn");
  menuNavBtn.setAttribute("id", "menuNavBtn");
  menuNavBtn.value = "menu";
  menuNavBtn.textContent = "Menu";
  header.appendChild(menuNavBtn);

  const aboutNavBtn = document.createElement("button");
  aboutNavBtn.classList.add("headerNavBtn");
  aboutNavBtn.setAttribute("id", "aboutNavBtn");
  aboutNavBtn.value = "about";
  aboutNavBtn.textContent = "About";
  header.appendChild(aboutNavBtn);

  const contactNavBtn = document.createElement("button");
  contactNavBtn.classList.add("headerNavBtn");
  contactNavBtn.setAttribute("id", "contactNavBtn");
  contactNavBtn.value = "contact";
  contactNavBtn.textContent = "Contact";
  header.appendChild(contactNavBtn);
}
