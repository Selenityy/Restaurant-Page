import homeFooter from "../home/footer";
import homeNavBar from "../home/header";

export default function contactPage() {
  homeNavBar();

  const allChildren = document.getElementById("allChildren");

  // 1st parent node: contact
  const contactContent = document.createElement("div");
  contactContent.setAttribute("id", "contactContent");
  allChildren.appendChild(contactContent);

  homeFooter();
}
