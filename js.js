window.onload = function () {
  let div = document.querySelector(".game");
  let p = document.querySelector('.text')
  for (let i = 0; i < 9; i++) {
    div.innerHTML += '<div class="cell"></div>';
  }

  let move = 0;
  p.textContent = "Ход игрока, который ставит Х"

  div.addEventListener("click", (event) => {
    // console.log(event);
    if (event.target.className == "cell") {
      if (move % 2 == 1) {
        p.textContent = "Ход игрока, который ставит Х"
        event.target.innerHTML = "o";
      } else {
        p.textContent = "Ход игрока, который ставит О"
        event.target.innerHTML = "x";
      }
      move++;
      win();
    }
  });

  const win = function () {
    let allCell = document.getElementsByClassName("cell");
    //console.log(allCell);
    // проверка Х
    if ((
      allCell[0].innerHTML == "x" &&
      allCell[1].innerHTML == "x" &&
      allCell[2].innerHTML == "x"
    ) || (
      allCell[3].innerHTML == "x" &&
      allCell[4].innerHTML == "x" &&
      allCell[5].innerHTML == "x"
      ) || (
      allCell[6].innerHTML == "x" &&
      allCell[7].innerHTML == "x" &&
      allCell[8].innerHTML == "x"
    ) || (
      allCell[0].innerHTML == "x" &&
      allCell[3].innerHTML == "x" &&
      allCell[6].innerHTML == "x"
      ) || (
      allCell[1].innerHTML == "x" &&
      allCell[4].innerHTML == "x" &&
      allCell[7].innerHTML == "x"
      ) || (
      allCell[2].innerHTML == "x" &&
      allCell[5].innerHTML == "x" &&
      allCell[8].innerHTML == "x"
      ) || (
      allCell[0].innerHTML == "x" &&
      allCell[4].innerHTML == "x" &&
      allCell[8].innerHTML == "x"
      ) || (
      allCell[2].innerHTML == "x" &&
      allCell[4].innerHTML == "x" &&
      allCell[6].innerHTML == "x"
    )){
      alert("Победили X");
      location.reload();
    }
    // проверка О
    if ((
      allCell[0].innerHTML == "o" &&
      allCell[1].innerHTML == "o" &&
      allCell[2].innerHTML == "o"
      ) || (
      allCell[3].innerHTML == "o" &&
      allCell[4].innerHTML == "o" &&
      allCell[5].innerHTML == "o"
      ) || (
      allCell[6].innerHTML == "o" &&
      allCell[7].innerHTML == "o" &&
      allCell[8].innerHTML == "o"
      ) || (
      allCell[0].innerHTML == "o" &&
      allCell[3].innerHTML == "o" &&
      allCell[6].innerHTML == "o"
      ) || (
      allCell[1].innerHTML == "o" &&
      allCell[4].innerHTML == "o" &&
      allCell[7].innerHTML == "o"
      ) || (
      allCell[2].innerHTML == "o" &&
      allCell[5].innerHTML == "o" &&
      allCell[8].innerHTML == "o"
      ) || (
      allCell[0].innerHTML == "o" &&
      allCell[4].innerHTML == "o" &&
      allCell[8].innerHTML == "o"
      ) || (
      allCell[2].innerHTML == "o" &&
      allCell[4].innerHTML == "o" &&
      allCell[6].innerHTML == "o"
    )){
      alert("Победили O");
      location.reload();
    }
  };
};
