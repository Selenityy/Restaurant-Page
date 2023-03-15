import homePage from "./pages/home/homePage";
import menuPage from "./pages/menu/menuPage";
import { removeChildrenNodes } from "./functions/pageOnLoad";
import "./styles/home.css";
import "./styles/menu.css";

homePage();

const menuButton = document.getElementById("menuNavBtn");
const bodyMenuButton = document.getElementById("menuBtn");

menuButton.addEventListener("click", function () {
  removeChildrenNodes();
  menuPage();
});

bodyMenuButton.addEventListener("click", function () {
    removeChildrenNodes();
    menuPage();
  });
