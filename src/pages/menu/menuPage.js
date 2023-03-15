import homeFooter from "../home/footer";
import homeNavBar from "../home/header";

export default function menuPage() {
  homeNavBar();
  homeFooter();

  const allChildren = document.getElementById("allChildren");

  // 1st parent node: top half of menu page
  const brandingPortion = document.createElement("div");
  brandingPortion.setAttribute("id", "brandingPortion");
  allChildren.appendChild(brandingPortion);

  // 2nd parent node: bottom half of menu page
  const menuPortion = document.createElement("div");
  menuPortion.setAttribute("id", "menuPortion");
  allChildren.appendChild(menuPortion);
}
