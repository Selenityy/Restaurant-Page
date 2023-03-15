import totoroLogoImg from "../../assets/totoro-logo.png";

export default function homeBody() {
  const allChildren = document.getElementById("allChildren");

  // 1st parent div: body
  const body = document.createElement("div");
  body.setAttribute("id", "bodyContent");
  allChildren.appendChild(body);

  // 1st child div for parent body: title and logo
  const cafeBranding = document.createElement("div");
  cafeBranding.setAttribute("id", "cafeBranding");
  cafeBranding.classList.add("bodyClass");
  body.appendChild(cafeBranding);

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
  body.appendChild(cafeDescription);

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
  body.appendChild(homePageMenuBtn);

  // button itself, child div to menu button
  const menuBtn = document.createElement("button");
  menuBtn.setAttribute("id", "menuBtn");
  menuBtn.textContent = "Menu";
  homePageMenuBtn.appendChild(menuBtn);
}
