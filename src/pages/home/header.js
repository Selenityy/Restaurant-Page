export default function homeNavBar() {
  const content = document.getElementById("content");

  const header = document.createElement("div");
  header.setAttribute("id", "headerContent");
  content.appendChild(header);

  const headerNavLinks = document.createElement("div");
  headerNavLinks.setAttribute("id", "headerNavLinks");
  header.appendChild(headerNavLinks);

  const homeNavBtn = document.createElement("a");
  homeNavBtn.classList.add("headerNavBtn");
  homeNavBtn.setAttribute("id", "homeNavBtn");
  // homeNavBtn.value = "home";
  homeNavBtn.textContent = "Home";
  headerNavLinks.appendChild(homeNavBtn);

  const menuNavBtn = document.createElement("a");
  menuNavBtn.classList.add("headerNavBtn");
  menuNavBtn.setAttribute("id", "menuNavBtn");
  // menuNavBtn.value = "menu";
  menuNavBtn.textContent = "Menu";
  headerNavLinks.appendChild(menuNavBtn);

  const aboutNavBtn = document.createElement("a");
  aboutNavBtn.classList.add("headerNavBtn");
  aboutNavBtn.setAttribute("id", "aboutNavBtn");
  // aboutNavBtn.value = "about";
  aboutNavBtn.textContent = "About";
  headerNavLinks.appendChild(aboutNavBtn);

  const contactNavBtn = document.createElement("a");
  contactNavBtn.classList.add("headerNavBtn");
  contactNavBtn.setAttribute("id", "contactNavBtn");
  // contactNavBtn.value = "contact";
  contactNavBtn.textContent = "Contact";
  headerNavLinks.appendChild(contactNavBtn);
}
