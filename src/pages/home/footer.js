import githubIcon from "../../assets/icons/githublogo.png";

export default function homeFooter() {
  const content = document.getElementById("content");

  const footer = document.createElement("div");
  content.appendChild(footer);

  const developedBy = document.createElement("div");
  developedBy.classList.add("footerContent");
  developedBy.setAttribute("id", "developed");
  developedBy.textContent = "Developed by Selena Rodriguez";
  footer.appendChild(developedBy);

  const icon = document.createElement("img");
  icon.classList.add("footerContent");
  icon.setAttribute("id", "icon");
  icon.src = githubIcon;
  footer.appendChild(icon);

  const creditsTo = document.createElement("div");
  creditsTo.classList.add("footerContent");
  creditsTo.setAttribute("id", "credited");
  creditsTo.textContent =
    "Reference & Credits to Studio Ghibli and Mr. Toshio Suzuki's Restaurant, May's Garden House located in Bangkok Thailand.";
  footer.appendChild(creditsTo);
}
