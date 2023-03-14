import homePage from "./pages/home/homePage";
import menuPage from "./pages/menu/menuPage";
import { removeChildrenNodes } from "./functions/pageOnLoad";
import "./styles/home.css";
import "./styles/menu.css";

homePage();

const menuButton = document.getElementById("menuNavBtn");

menuButton.addEventListener("click", function () {
  removeChildrenNodes();
  menuPage();
});
