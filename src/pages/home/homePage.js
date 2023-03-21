import totoroLogoImg from "../../assets/totoro-logo.png";
import { removeChildrenNodes } from "../../functions/pageFuncs";
import menuPage from "../menu/menuPage";

export default function homeBody() {
  const bodyContent = document.getElementById("bodyContent");

  const homeBodyContent = document.createElement("div");
  homeBodyContent.setAttribute("id", "homeBodyContent");
  bodyContent.appendChild(homeBodyContent);

  // 1st child div for parent body: title and logo
  const cafeBranding = document.createElement("div");
  cafeBranding.setAttribute("id", "cafeBranding");
  cafeBranding.classList.add("bodyClass");
  homeBodyContent.appendChild(cafeBranding);

  // title, child div to title and logo body
  const totoroTitle = document.createElement("div");
  totoroTitle.setAttribute("id", "totoroTitle");
  totoroTitle.textContent = "Totoro Cafe";
  cafeBranding.appendChild(totoroTitle);

  // logo, child div to title and logo body
  const totoroLogo = document.createElement("img");
  totoroLogo.setAttribute("id", "totoroLogo");
  totoroLogo.src = totoroLogoImg;
  cafeBranding.appendChild(totoroLogo);

  // 2nd child div for parent body: description
  const cafeDescription = document.createElement("div");
  cafeDescription.setAttribute("id", "cafeDescription");
  cafeDescription.classList.add("bodyClass");
  homeBodyContent.appendChild(cafeDescription);

  // description itself, child div to body description
  const lorem = document.createElement("div");
  lorem.setAttribute("id", "lorem");
  lorem.textContent =
    "Lorem ipsum dolor sit amet. Nam excepturi officia ut impedit tempora At autem minus non mollitia corrupti! Est placeat quas aut laboriosam blanditiis et rerum excepturi? Et fugit fuga qui sunt exercitationem non animi repudiandae aut repellendus internos et explicabo dolorem eos dolorum veritatis ut doloremque molestiae. Ea internos atque cum tempore amet aut aliquid internos non ipsa enim.";
  cafeDescription.appendChild(lorem);

  // 3rd child div for parent body: menu button
  const homePageMenuBtn = document.createElement("div");
  homePageMenuBtn.setAttribute("id", "homePageMenuBtn");
  homePageMenuBtn.classList.add("bodyClass");
  homeBodyContent.appendChild(homePageMenuBtn);

  // button itself, child div to menu button
  const menuBtn = document.createElement("button");
  menuBtn.setAttribute("id", "menuBtn");
  menuBtn.textContent = "Menu";
  homePageMenuBtn.appendChild(menuBtn);

  menuBtn.addEventListener("click", function () {
    removeChildrenNodes();
    menuPage();
  });
}
