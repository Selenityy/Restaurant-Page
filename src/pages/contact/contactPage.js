import { eventListeners } from "../../functions/pageFuncs";
import homeFooter from "../home/footer";
import homeNavBar from "../home/header";

export default function contactPage() {
  const bodyContent = document.getElementById("bodyContent");

  // 1st parent node: contact
  const contactContent = document.createElement("div");
  contactContent.setAttribute("id", "contactContent");
  bodyContent.appendChild(contactContent);
}
