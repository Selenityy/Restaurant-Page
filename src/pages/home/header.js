export default function homeNavBar() {
  const allChildren = document.getElementById("allChildren");

  const header = document.createElement("div");
  header.setAttribute("id", "headerContent");
  allChildren.appendChild(header);

  const headerNavLinks = document.createElement("div");
  headerNavLinks.setAttribute("id", "headerNavLinks");
  header.appendChild(headerNavLinks);

  const homeNavBtn = document.createElement("a");
  //homeNavBtn.addEventListener("click", func);
  homeNavBtn.classList.add("headerNavBtn");
  homeNavBtn.setAttribute("id", "homeNavBtn");
  homeNavBtn.textContent = "Home";
  headerNavLinks.appendChild(homeNavBtn);

  const menuNavBtn = document.createElement("a");
  menuNavBtn.classList.add("headerNavBtn");
  menuNavBtn.setAttribute("id", "menuNavBtn");
  menuNavBtn.textContent = "Menu";
  headerNavLinks.appendChild(menuNavBtn);

  const aboutNavBtn = document.createElement("a");
  aboutNavBtn.classList.add("headerNavBtn");
  aboutNavBtn.setAttribute("id", "aboutNavBtn");
  aboutNavBtn.textContent = "About";
  headerNavLinks.appendChild(aboutNavBtn);

  const contactNavBtn = document.createElement("a");
  contactNavBtn.classList.add("headerNavBtn");
  contactNavBtn.setAttribute("id", "contactNavBtn");
  contactNavBtn.textContent = "Contact";
  headerNavLinks.appendChild(contactNavBtn);
}
