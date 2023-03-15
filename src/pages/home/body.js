import totoroLogoImg from "../../assets/totoro-logo.png"

export default function homeBody() {
  const content = document.getElementById("content");

  const body = document.createElement("div");
  body.setAttribute("id", "bodyContent");
  content.appendChild(body);

  const cafeBranding = document.createElement("div");
  cafeBranding.setAttribute("id", "cafeBranding");
  cafeBranding.classList.add("bodyClass");
  body.appendChild(cafeBranding);

  const totoroTitle = document.createElement("div");
  totoroTitle.setAttribute("id", "totoroTitle");
  totoroTitle.textContent = "Totoro Cafe";
  cafeBranding.appendChild(totoroTitle);

  const totoroLogo = document.createElement("img");
  totoroLogo.setAttribute("id", "totoroLogo");
  totoroLogo.src = totoroLogoImg;
  cafeBranding.appendChild(totoroLogo);

  const cafeDescription = document.createElement("div");
  cafeDescription.setAttribute("id", "cafeDescription");
  cafeDescription.classList.add("bodyClass");
  body.appendChild(cafeDescription);

  const lorem = document.createElement("div");
  lorem.setAttribute("id", "lorem");
  lorem.textContent =
    "Lorem ipsum dolor sit amet. Nam excepturi officia ut impedit tempora At autem minus non mollitia corrupti! Est placeat quas aut laboriosam blanditiis et rerum excepturi? Et fugit fuga qui sunt exercitationem non animi repudiandae aut repellendus internos et explicabo dolorem eos dolorum veritatis ut doloremque molestiae. Ea internos atque cum tempore amet aut aliquid internos non ipsa enim.";
  cafeDescription.appendChild(lorem);

  const homePageMenuBtn = document.createElement("div");
  homePageMenuBtn.setAttribute("id", "homePageMenuBtn");
  homePageMenuBtn.classList.add("bodyClass");
  body.appendChild(homePageMenuBtn);

  const menuBtn = document.createElement("button");
  menuBtn.setAttribute("id", "menuBtn");
  menuBtn.textContent = "Menu"
  homePageMenuBtn.appendChild(menuBtn);

}
