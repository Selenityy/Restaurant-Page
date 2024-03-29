import totoroFoodPic from "../../assets/totoro-food-pic.png";

export default function menuPage() {
  const bodyContent = document.getElementById("bodyContent");

  const menuBodyContent = document.createElement("div");
  menuBodyContent.setAttribute("id", "menuBodyContent");
  bodyContent.appendChild(menuBodyContent);

  // 1st child node: top half of menu page
  const brandingPortion = document.createElement("div");
  brandingPortion.setAttribute("id", "brandingPortion");
  menuBodyContent.appendChild(brandingPortion);

  // child node to top half of menu page: food pic
  const foodPic = document.createElement("img");
  foodPic.src = totoroFoodPic;
  foodPic.setAttribute("id", "foodPic");
  brandingPortion.appendChild(foodPic);

  // child node to top half of menu page: menu word
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  menu.textContent = "Menu";
  brandingPortion.appendChild(menu);

  // 2nd child node: bottom half of menu page
  const menuPortion = document.createElement("div");
  menuPortion.setAttribute("id", "menuPortion");
  menuBodyContent.appendChild(menuPortion);

  //child node to bottom half of menu page: coffee
  const coffeeMenu = document.createElement("div");
  coffeeMenu.classList.add("menu");
  coffeeMenu.setAttribute("id", "coffeeMenu");
  coffeeMenu.textContent = "Coffee";
  menuPortion.appendChild(coffeeMenu);

  // coffee list with func to add products to the ul
  const coffeeUl = document.createElement("ul");
  coffeeUl.setAttribute("id", "cofList");
  menuPortion.appendChild(coffeeUl);
  const coffeeList = [
    "Cappuccinos",
    "Espresso",
    "Latte",
    "Iced Coffee",
    "Tea",
    "Americano",
    "Brewed Coffee",
  ];
  coffeeList.sort();
  coffeeList.forEach(renderCoffeeList);
  function renderCoffeeList(element) {
    let coffeeLi = document.createElement("li");
    coffeeLi.setAttribute("class", "coffeeItems");
    coffeeUl.appendChild(coffeeLi);
    coffeeLi.innerHTML = coffeeLi.innerHTML + element;
  }

  //child node to bottom half of menu page: bakery
  const bakeryMenu = document.createElement("div");
  bakeryMenu.classList.add("menu");
  bakeryMenu.setAttribute("id", "bakeryMenu");
  bakeryMenu.textContent = "Bakery";
  menuPortion.appendChild(bakeryMenu);

  // bakery list with func to add products to the ul
  const bakeryUl = document.createElement("ul");
  bakeryUl.setAttribute("id", "bakeList");
  menuPortion.appendChild(bakeryUl);
  const bakeryList = [
    "Totoro Coffee Cake",
    "Bagel",
    "Croissant",
    "Muffin",
    "Cookies",
    "Scones",
  ];
  bakeryList.sort();
  bakeryList.forEach(renderBakeryList);
  function renderBakeryList(element) {
    let bakeryLi = document.createElement("li");
    bakeryLi.setAttribute("class", "bakeryItems");
    bakeryUl.appendChild(bakeryLi);
    bakeryLi.innerHTML = bakeryLi.innerHTML + element;
  }

  //child node to bottom half of menu page: lunch
  const lunchMenu = document.createElement("div");
  lunchMenu.classList.add("menu");
  lunchMenu.setAttribute("id", "lunchMenu");
  lunchMenu.textContent = "Lunch";
  menuPortion.appendChild(lunchMenu);

  // lunch list with func to add products to the ul
  const lunchUl = document.createElement("ul");
  lunchUl.setAttribute("id", "lunchList");
  menuPortion.appendChild(lunchUl);
  const lunchList = ["Catbus Bento", "Spirit Salad", "Totoro Buns", "Panini"];
  lunchList.sort();
  lunchList.forEach(renderLunchList);
  function renderLunchList(element) {
    let lunchLi = document.createElement("li");
    lunchLi.setAttribute("class", "lunchItems");
    lunchUl.appendChild(lunchLi);
    lunchLi.innerHTML = lunchLi.innerHTML + element;
  }
}
