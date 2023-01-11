const logElement = document.getElementById("login");
const passElement = document.getElementById("password");
const authWrapper = document.getElementById("auth");
const gameWrapper = document.getElementById("game");
const textWrapper = document.getElementById("text");
const resultWrapper = document.getElementById("result");
const lobbyWrapper = document.getElementById("lobby");
const loginName = document.getElementById("lobby");
const startLevel1Wrapper = document.getElementById("start-1");
const startLevel2Wrapper = document.getElementById("start-2");
const startLevel3Wrapper = document.getElementById("start-3");
const authButton = document.getElementById("auth-button");
const logoutButton = document.getElementsByClassName("logout-button");
const answer = document.getElementById("answer");
const endgameWrapper = document.getElementById("endgame");
const timerBegin = document.getElementById("counter");
const gameTimeoutWrapper = document.getElementById("game-timeout");
const gameTimeWrapper = document.getElementById("game-timer");
let count = 0;
let counter = 1;

let gameTimer;
const setGameTimer = () => {
  gameTimeWrapper.textContent = parseInt(gameTimeWrapper.textContent) - 1;
  if (parseInt(gameTimeWrapper.textContent) === 0) {
    clearInterval(gameTimer);
    gameWrapper.classList.add("hide");
    gameTimeoutWrapper.classList.remove("hide");
    const newElement = document.createElement("p");
    newElement.textContent = `Время вышло. Вы проиграли! Ваш счёт: ${count}`;
    gameTimeoutWrapper.prepend(newElement);
  }
};
const setResult = () => {
  if (
    document.querySelector(".colRow11").textContent &&
    document.querySelector(".colRow12").textContent &&
    !document.querySelector(".colRow11").classList.contains("success") &&
    !document.querySelector(".colRow12").classList.contains("success")
  ) {
    document.querySelector(".colRow11").classList.add("success");
    document.querySelector(".colRow12").classList.add("success");
    count++;
  }

  if (
    document.querySelector(".colRow21").textContent &&
    document.querySelector(".colRow22").textContent &&
    !document.querySelector(".colRow21").classList.contains("success") &&
    !document.querySelector(".colRow22").classList.contains("success")
  ) {
    document.querySelector(".colRow21").classList.add("success");
    document.querySelector(".colRow22").classList.add("success");
    count++;
  }

  if (
    document.querySelector(".colRow31").textContent &&
    document.querySelector(".colRow32").textContent &&
    !document.querySelector(".colRow31").classList.contains("success") &&
    !document.querySelector(".colRow32").classList.contains("success")
  ) {
    document.querySelector(".colRow31").classList.add("success");
    document.querySelector(".colRow32").classList.add("success");
    count++;
  }

  if (
    document.querySelector(".colRow41").textContent &&
    document.querySelector(".colRow42").textContent &&
    !document.querySelector(".colRow41").classList.contains("success") &&
    !document.querySelector(".colRow42").classList.contains("success")
  ) {
    document.querySelector(".colRow41").classList.add("success");
    document.querySelector(".colRow42").classList.add("success");
    count++;
  }

  answer.textContent = `Ваш счет: ${count}`;

  if (count === 4) {
    gameWrapper.classList.add("hide");
    endgameWrapper.classList.remove("hide");
    clearInterval(gameTimer);

    const loginName = document.createElement("h2");
    loginName.textContent = `ПОЗДРАВЛЯЮ, ВЫ УГАДАЛИ ВСЕ СЛОВА (${count})`;
    endgameWrapper.prepend(loginName);
  }
};

//
authButton.addEventListener("click", () => {
  if (logElement.value && passElement.value) {
    authWrapper.classList.add("hide");
    lobbyWrapper.classList.remove("hide");

    localStorage.setItem("login", logElement.value);
    localStorage.setItem("password", passElement.value);

    const loginName = document.createElement("h2");
    loginName.innerHTML = `Добро пожаловать, ${localStorage.getItem("login")}.
    <br> Приготовьтесь!`;
    lobbyWrapper.prepend(loginName);
  } else {
    document.getElementById("autErr").innerHTML =
      "<div style ='color: red;'>Error</div>";
  }
});

///
startLevel1Wrapper.addEventListener("click", () => {
  textWrapper.innerHTML = ` Стоит в поле теремок. Бежит мимо
  <span class="col4 row2">такса</span>-норушка. Увидела теремок,
  остановилась и спрашивает: <br />
  — Терем-теремок! Кто в тереме живет? Никто не отзывается. Вошла
  <span class="col2 row2">баронесса</span> в теремок и стала там жить.
  Прискакала к терему <span class="col3 row2">кошка</span>-квакушка и
  спрашивает:
  <br />
  — <span class="col2 row1">барон</span>-теремок! Кто в тереме живет?
  <br />
  — Я, <span class="col3 row1">кот</span>-норушка! А ты кто? <br />
  — А я <span class="col4 row1">собака</span>-квакушка. <br />— Иди ко мне
  жить! <span class="col1 row1">Жеребёнок</span> прыгнула в теремок. Стали
  они вдвоем жить.
  <br />
  Бежит мимо <span class="col1 row2">конь</span>-побегайчик.`;
  timerBegin.classList.remove("hide");
  let timer;
  function Timer() {
    var elem = document.getElementById("counter");
    elem.textContent = parseInt(elem.textContent) - 1;
    if (parseInt(elem.textContent) === 0) {
      clearInterval(timer);
      lobbyWrapper.classList.add("hide");
      gameWrapper.classList.remove("hide");
      resultWrapper.classList.remove("hide");
      gameTimeWrapper.textContent = "40";
      gameTimer = window.setInterval(setGameTimer, 1000);
    }
  }
  startLevel1Wrapper.disabled = true;
  startLevel2Wrapper.disabled = true;
  startLevel3Wrapper.disabled = true;
  timer = window.setInterval(Timer, 1000);
});

startLevel2Wrapper.addEventListener("click", () => {
  textWrapper.innerHTML = `Посадил дед <span class="col4 row2">машина</span> и говорит:
  <br>— Расти, расти, <span class="col2 row2">графиня</span>, сладкá! Расти, расти, <span class="col3 row2">собака</span>, крепкá!
Выросла <span class="col2 row1">граф</span> сладкá, крепкá, большая-пребольшая.
Пошел дед репку рвать: тянет-потянет, вытянуть не может.
Позвал дед <span class="col3 row1">щенок</span>.<br>

Бабка за дедку,
Дедка за репку <br>—

Тянут-потянут, вытянуть не могут.
Позвала <span class="col4 row1">автомобиль</span> внучку.

Внучка за бабку,
Бабка за дедку,
<span class="col1 row1">Кролик</span> за репку<br> —

Тянут-потянут, вытянуть не могут.
Позвала внучка Жучку.

<span class="col1 row2">Зайчик</span> за внучку,
Внучка за бабку,
Бабка за дедку,
Дедка за репку`;
  timerBegin.classList.remove("hide");
  let timer;
  function Timer() {
    var elem = document.getElementById("counter");
    elem.textContent = parseInt(elem.textContent) - 1;
    if (parseInt(elem.textContent) === 0) {
      clearInterval(timer);
      lobbyWrapper.classList.add("hide");
      gameWrapper.classList.remove("hide");
      resultWrapper.classList.remove("hide");
      gameTimeWrapper.textContent = "30";
      gameTimer = window.setInterval(setGameTimer, 1000);
    }
  }
  startLevel1Wrapper.disabled = true;
  startLevel2Wrapper.disabled = true;
  startLevel3Wrapper.disabled = true;
  timer = window.setInterval(Timer, 1000);
});

startLevel3Wrapper.addEventListener("click", () => {
  textWrapper.innerHTML = ` Я Колобок, <span class="col4 row2">медведь</span>,
  Я по коробу скребен,<br>
  По сусеку метен,
  На сметане мешон
  Да в масле пряжон,
  На окошке стужон.
  Я от <span class="col3 row2">крыски</span> ушел,
  Я от бабушки ушел,
  От тебя, зайца, подавно уйду!<br>
  
  И покатился по дороге — только <span class="col4 row1">медвежёнок</span> его и видел!
  Катится Колобок, навстречу ему <span class="col2 row1">орёл</span>:<br>
  — Колобок, Колобок, я тебя съем!
  — Не ешь меня, Серый <span class="col1 row1">карп</span>, я тебе песенку спою:<br>
  
  Я Колобок, <span class="col3 row1">мышка</span>,
  Я по коробу скребен,
  По сусеку метен,
  На сметане мешон
  Да в масле пряжон,
  На окошке стужон.
  Я от <span class="col2 row2">сокола</span> ушел,
  Я от бабушки ушел,
  Я от зайца ушел,
  От тебя, <span class="col1 row2">карась</span>, подавно уйду!<br>
  `;
  timerBegin.classList.remove("hide");
  let timer;
  function Timer() {
    var elem = document.getElementById("counter");
    elem.textContent = parseInt(elem.textContent) - 1;
    if (parseInt(elem.textContent) === 0) {
      clearInterval(timer);
      lobbyWrapper.classList.add("hide");
      gameWrapper.classList.remove("hide");
      resultWrapper.classList.remove("hide");
      gameTimeWrapper.textContent = "20";
      gameTimer = window.setInterval(setGameTimer, 1000);
    }
  }
  startLevel1Wrapper.disabled = true;
  startLevel2Wrapper.disabled = true;
  startLevel3Wrapper.disabled = true;
  timer = window.setInterval(Timer, 1000);
});

///

textWrapper.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("col1") &&
    event.target.classList.contains("row1")
  ) {
    document.querySelector(".colRow11").innerHTML = event.target.textContent;
    event.target.classList.add("foreign-words");
  }

  if (
    event.target.classList.contains("col1") &&
    event.target.classList.contains("row2")
  ) {
    document.querySelector(".colRow12").innerHTML = event.target.textContent;
    event.target.classList.add("foreign-words");
  }

  if (
    event.target.classList.contains("col2") &&
    event.target.classList.contains("row1")
  ) {
    document.querySelector(".colRow21").innerHTML = event.target.textContent;
    event.target.classList.add("foreign-words");
  }

  if (
    event.target.classList.contains("col2") &&
    event.target.classList.contains("row2")
  ) {
    document.querySelector(".colRow22").innerHTML = event.target.textContent;
    event.target.classList.add("foreign-words");
  }

  if (
    event.target.classList.contains("col3") &&
    event.target.classList.contains("row1")
  ) {
    document.querySelector(".colRow31").innerHTML = event.target.textContent;
    event.target.classList.add("foreign-words");
  }

  if (
    event.target.classList.contains("col3") &&
    event.target.classList.contains("row2")
  ) {
    document.querySelector(".colRow32").innerHTML = event.target.textContent;
    event.target.classList.add("foreign-words");
  }

  if (
    event.target.classList.contains("col4") &&
    event.target.classList.contains("row1")
  ) {
    document.querySelector(".colRow41").innerHTML = event.target.textContent;
    event.target.classList.add("foreign-words");
  }

  if (
    event.target.classList.contains("col4") &&
    event.target.classList.contains("row2")
  ) {
    document.querySelector(".colRow42").innerHTML = event.target.textContent;
    event.target.classList.add("foreign-words");
  }

  setResult();
});

//
Array.from(logoutButton).forEach((btn) =>
  btn.addEventListener("click", () => {
    localStorage.removeItem("login");
    localStorage.removeItem("password");
    location.reload();
  })
);
