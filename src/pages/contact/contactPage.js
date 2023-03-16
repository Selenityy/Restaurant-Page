export default function contactPage() {
  const bodyContent = document.getElementById("bodyContent");

  // 1st parent node: contact
  const contactContent = document.createElement("div");
  contactContent.setAttribute("id", "contactContent");
  bodyContent.appendChild(contactContent);
}
