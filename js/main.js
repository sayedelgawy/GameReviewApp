import { displayAllGame, dispalyGameDetails } from "./ui.js";
import { getAllgames } from "./allGames.js";
import { getGameDetails } from "./gameDetalis.js";

const gamesDataContainer = document.getElementById("gameData");
const gamesSection = document.querySelector(".games");
const detailsContent = document.getElementById("detailsContent");
const detailsSection = document.querySelector(".details");
const looderSection = document.querySelector(".loading");
const btnClose = document.getElementById("btnClose");
const navLinks = document.querySelectorAll(".nav-link");

//get game detail according to id
async function getGamedetails(gameId) {
  //display loading
  looderSection.classList.remove("d-none");

  //gameDetalis module (getGameDetails class)
  const result = new getGameDetails(gameId);

  //ui module (dispalyGameDetails class)
  const displayGame = new dispalyGameDetails(await result.getTheGame());

  //putting the return of printGameDetail method in dispalyGameDetails class in inner html of detailsContent
  detailsContent.innerHTML = displayGame.printGameDetail();

  //stop loading
  looderSection.classList.add("d-none");
}

//run and display all games
async function run(category = "mmorpg") {
  //display loading
  looderSection.classList.remove("d-none");

  //allGames module (getAllgames class)
  const result = new getAllgames(category);

  //ui module (displayAllGame class)
  const displayAll = new displayAllGame(await result.getGames());

  //putting the return of printAll method in displayAllGame class in inner html of gamesDataContainer
  gamesDataContainer.innerHTML = displayAll.printAll();

  const cardsOfGames = document.querySelectorAll(".card");

  for (let index = 0; index < cardsOfGames.length; index++) {
    cardsOfGames[index].addEventListener("click", function (e) {
      gamesSection.classList.add("d-none");
      let dataIdValue = cardsOfGames[index].getAttribute("data-id");
      getGamedetails(dataIdValue);
      detailsSection.classList.remove("d-none");
    });
  }

  //stop loading
  looderSection.classList.add("d-none");
}

//close btn function
btnClose.addEventListener("click", function () {
  gamesSection.classList.remove("d-none");
  detailsSection.classList.add("d-none");
});

//removing active class from all links
function removeActive() {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("active");
  }
}

//adding event listenres to all nav-links and run the run function with data-category
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function (e) {
    removeActive();
    e.target.classList.add("active");
    let categoryValue = e.target.getAttribute("data-category")
    run(categoryValue);
  });
}

//run first to get all games at the startup 
run();
