import homeNavBar from "./header";
import homeFooter from "./footer";
import homeBody from "./body";

export default function homePage() {
  const content = document.getElementById("content");
  const allChildren = document.createElement("div");
  allChildren.setAttribute("id", "allChildren");
  content.appendChild(allChildren); 

  homeNavBar();
  homeBody();
  homeFooter();
}
