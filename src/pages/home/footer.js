import githubIcon from "../../assets/githubLogo.png";

export default function footer() {
  const allChildren = document.getElementById("allChildren");

  // 1st parent div: footer
  const footer = document.createElement("div");
  footer.setAttribute("id", "footerContent");
  allChildren.appendChild(footer);

  const developedBy = document.createElement("div");
  developedBy.classList.add("footerClass");
  developedBy.setAttribute("id", "developed");
  developedBy.textContent = "Developed by Selena Rodriguez";
  footer.appendChild(developedBy);

  const icon = document.createElement("img");
  icon.classList.add("footerClass");
  icon.setAttribute("id", "icon");
  icon.src = githubIcon;
  footer.appendChild(icon);

  const creditsTo = document.createElement("div");
  creditsTo.classList.add("footerClass");
  creditsTo.setAttribute("id", "credited");
  creditsTo.textContent =
    "Reference & Credits to Studio Ghibli and Mr. Toshio Suzuki's Restaurant, May's Garden House located in Bangkok Thailand.";
  footer.appendChild(creditsTo);
}
