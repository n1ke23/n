window.onload = function () {
  let div = document.querySelector(".game");

  for (let i = 0; i < 9; i++) {
    div.innerHTML += '<div class="cell"></div>';
  }

  let move = 0;

  div.addEventListener("click", (event) => {
    // console.log(event);
    if (event.target.className == "cell") {
      if (move % 2 == 1) {
        event.target.innerHTML = "o";
      } else {
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
    if (
      allCell[0].innerHTML == "x" &&
      allCell[1].innerHTML == "x" &&
      allCell[2].innerHTML == "x"
    )
      alert("Победили X");
    if (
      allCell[3].innerHTML == "x" &&
      allCell[4].innerHTML == "x" &&
      allCell[5].innerHTML == "x"
    )
      alert("Победили X");
    if (
      allCell[6].innerHTML == "x" &&
      allCell[7].innerHTML == "x" &&
      allCell[8].innerHTML == "x"
    )
      alert("Победили X");
    if (
      allCell[0].innerHTML == "x" &&
      allCell[3].innerHTML == "x" &&
      allCell[6].innerHTML == "x"
    )
      alert("Победили X");
    if (
      allCell[1].innerHTML == "x" &&
      allCell[4].innerHTML == "x" &&
      allCell[7].innerHTML == "x"
    )
      alert("Победили X");
    if (
      allCell[2].innerHTML == "x" &&
      allCell[5].innerHTML == "x" &&
      allCell[8].innerHTML == "x"
    )
      alert("Победили X");
    if (
      allCell[0].innerHTML == "x" &&
      allCell[4].innerHTML == "x" &&
      allCell[8].innerHTML == "x"
    )
      alert("Победили X");
    if (
      allCell[2].innerHTML == "x" &&
      allCell[4].innerHTML == "x" &&
      allCell[6].innerHTML == "x"
    )
      alert("Победили X");
    // проверка О
    if (
      allCell[0].innerHTML == "o" &&
      allCell[1].innerHTML == "o" &&
      allCell[2].innerHTML == "o"
    )
      alert("Победили O");
    if (
      allCell[3].innerHTML == "o" &&
      allCell[4].innerHTML == "o" &&
      allCell[5].innerHTML == "o"
    )
      alert("Победили O");
    if (
      allCell[6].innerHTML == "o" &&
      allCell[7].innerHTML == "o" &&
      allCell[8].innerHTML == "o"
    )
      alert("Победили O");
    if (
      allCell[0].innerHTML == "o" &&
      allCell[3].innerHTML == "o" &&
      allCell[6].innerHTML == "o"
    )
      alert("Победили O");
    if (
      allCell[1].innerHTML == "o" &&
      allCell[4].innerHTML == "o" &&
      allCell[7].innerHTML == "o"
    )
      alert("Победили O");
    if (
      allCell[2].innerHTML == "o" &&
      allCell[5].innerHTML == "o" &&
      allCell[8].innerHTML == "o"
    )
      alert("Победили O");
    if (
      allCell[0].innerHTML == "o" &&
      allCell[4].innerHTML == "o" &&
      allCell[8].innerHTML == "o"
    )
      alert("Победили O");
    if (
      allCell[2].innerHTML == "o" &&
      allCell[4].innerHTML == "o" &&
      allCell[6].innerHTML == "o"
    )
      alert("Победили O");
  };
};
