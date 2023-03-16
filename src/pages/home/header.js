export default function header() {
  const allChildren = document.getElementById("allChildren");

  // 1st parent div: header
  const header = document.createElement("div");
  header.setAttribute("id", "headerContent");
  allChildren.appendChild(header);

  // 1st child node for header: links
  const headerNavLinks = document.createElement("div");
  headerNavLinks.setAttribute("id", "headerNavLinks");
  header.appendChild(headerNavLinks);

  // 1st-4th child nodes for the header links: the words
  const homeNavBtn = document.createElement("a");
  homeNavBtn.classList.add("headerNavBtn");
  homeNavBtn.setAttribute("id", "homeNavBtn");
  homeNavBtn.textContent = "Home";
  headerNavLinks.appendChild(homeNavBtn);

  const menuNavBtn = document.createElement("a");
  menuNavBtn.classList.add("headerNavBtn");
  menuNavBtn.setAttribute("id", "menuNavBtn");
  menuNavBtn.textContent = "Menu";
  headerNavLinks.appendChild(menuNavBtn);

  const contactNavBtn = document.createElement("a");
  contactNavBtn.classList.add("headerNavBtn");
  contactNavBtn.setAttribute("id", "contactNavBtn");
  contactNavBtn.textContent = "Contact";
  headerNavLinks.appendChild(contactNavBtn);
}
