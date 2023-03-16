import homePage from "./pages/home/homePage";
import menuPage from "./pages/menu/menuPage";
import contactPage from "./pages/contact/contactPage";
import { removeChildrenNodes } from "./functions/pageFuncs";
import "./styles/home.css";
import "./styles/menu.css";

// sets up the divs for the pages
const content = document.getElementById("content");
const allChildren = document.createElement("div");
allChildren.setAttribute("id", "allChildren");
content.appendChild(allChildren);

// runs the home page
homePage();

const menuButton = document.getElementById("menuNavBtn");
const bodyMenuButton = document.getElementById("menuBtn");
const homeButton = document.getElementById("homeNavBtn");
const contactButton = document.getElementById("contactNavBtn");

// header menu button listens for click
menuButton.addEventListener("click", function () {
  removeChildrenNodes();
  menuPage();
});

homeButton.addEventListener("click", function () {
  removeChildrenNodes();
  homePage();
});

contactButton.addEventListener("click", function () {
  removeChildrenNodes();
  contactPage();
});

// body text button listens for click
bodyMenuButton.addEventListener("click", function () {
  removeChildrenNodes();
  menuPage();
});
