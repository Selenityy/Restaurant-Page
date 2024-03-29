// import noFace from "../../assets/no-face.png";

export default function contactPage() {
  const bodyContent = document.getElementById("bodyContent");

  const contactParentNode = document.createElement("div");
  contactParentNode.setAttribute("id", "contactParentNode");
  bodyContent.appendChild(contactParentNode);

  const contactSiblingNode = document.createElement("div");
  //   contactSiblingNode.src = noFace;
  contactSiblingNode.setAttribute("id", "contactSiblingNode");
  bodyContent.appendChild(contactSiblingNode);

  const contactBodyContent = document.createElement("div");
  contactBodyContent.setAttribute("id", "contactBodyContent");
  contactParentNode.appendChild(contactBodyContent);

  // 1st parent node: contact description
  const contactDescription = document.createElement("div");
  contactDescription.setAttribute("id", "contactContent");
  contactBodyContent.appendChild(contactDescription);

  // 1st child of the contact description
  const contactImage = document.createElement("div");
  contactImage.setAttribute("id", "contactImage");
  contactImage.classList.add("contactTopHalf");
  contactImage.innerHTML = "Contact";
  contactDescription.appendChild(contactImage);

  // 2nd child of the contact description
  const contactText = document.createElement("div");
  contactText.setAttribute("id", "contactText");
  contactText.classList.add("contactTopHalf");
  contactText.innerHTML =
    "Lorem ipsum dolor sit amet. Qui repellat dolorum est nobis voluptas vel dolores molestias in voluptatem nisi qui internos mollitia ut quos quia sed enim voluptates! In unde maiores in voluptatem architecto et debitis possimus et debitis magni hic quasi fugit.";
  contactDescription.appendChild(contactText);

  // Form creation
  const formBox = document.createElement("div");
  formBox.setAttribute("id", "formBox");
  formBox.classList.add("form");
  contactBodyContent.appendChild(formBox);

  const fieldset = document.createElement("fieldset");
  fieldset.setAttribute("id", "fieldset");
  formBox.appendChild(fieldset);

  const contactForm = document.createElement("form");
  contactForm.setAttribute("name", "contactForm");
  contactForm.setAttribute("id", "myForm");
  contactForm.setAttribute("action", "");
  contactForm.setAttribute("method", "GET");
  fieldset.appendChild(contactForm);

  const ul = document.createElement("ul");
  ul.setAttribute("id", "contactUl");
  contactForm.appendChild(ul);

  // Full Name
  const fullNameLi = document.createElement("li");
  fullNameLi.classList.add("li");
  ul.appendChild(fullNameLi);

  const fullNameLabel = document.createElement("label");
  fullNameLabel.setAttribute("for", "fullName");
  fullNameLabel.innerHTML = "Full Name:";
  fullNameLi.appendChild(fullNameLabel);

  const fullNameInput = document.createElement("input");
  fullNameInput.setAttribute("type", "text");
  fullNameInput.setAttribute("id", "fullName");
  fullNameInput.setAttribute("name", "fulName");
  fullNameInput.setAttribute("pattern", "^[a-zA-Z-]*$");
  fullNameInput.setAttribute("required", "*");
  fullNameLi.appendChild(fullNameInput);

  // Email
  const emailLi = document.createElement("li");
  emailLi.classList.add("li");
  ul.appendChild(emailLi);

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.innerHTML = "Email:";
  emailLi.appendChild(emailLabel);

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "text");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("pattern", "^[a-zA-Z0-9_.@-]*$");
  emailInput.setAttribute("required", "*");
  emailLi.appendChild(emailInput);

  // Message
  const messageLi = document.createElement("li");
  messageLi.classList.add("li");
  ul.appendChild(messageLi);

  const messageLabel = document.createElement("label");
  messageLabel.setAttribute("for", "message");
  messageLabel.innerHTML = "Message:";
  messageLi.appendChild(messageLabel);

  const messageInput = document.createElement("textarea");
  messageInput.setAttribute("type", "text");
  messageInput.setAttribute("id", "message");
  messageInput.setAttribute("name", "message");
  messageInput.setAttribute("pattern", "^[a-zA-Z0-9_.@-]*$");
  messageInput.setAttribute("required", "*");
  messageLi.appendChild(messageInput);

  //Submit
  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("id", "submitBtn");
  submitBtn.setAttribute("value", "click");
  submitBtn.innerHTML = "Submit";
  submitBtn.onclick = function (e) {
    e.preventDefault();
    contactForm.reset();
  };
  contactForm.appendChild(submitBtn);
}
