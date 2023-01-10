const logElement = document.getElementById('login');
const passElement = document.getElementById('password');
const authWrapper = document.getElementById('auth');
const gameWrapper = document.getElementById('game');
const textWrapper = document.getElementById('text');
const resultWrapper = document.getElementById('result');
const lobbyWrapper = document.getElementById('lobby');
const loginName = document.getElementById('lobby');
const startWrapper = document.getElementById('start');
const authButton = document.getElementById('auth-button');
const logoutButton = document.getElementById('logout-button');
const answer = document.getElementById('answer');
const endgameWrapper = document.getElementById('endgame');

let count = 0;

const setResult = () => {
  if (
    document.querySelector('.colRow11').textContent &&
    document.querySelector('.colRow12').textContent &&
    !document.querySelector('.colRow11').classList.contains('success') &&
    !document.querySelector('.colRow12').classList.contains('success')
  ) {
    document.querySelector('.colRow11').classList.add('success');
    document.querySelector('.colRow12').classList.add('success');
    count++;
  }

  if (
    document.querySelector('.colRow21').textContent &&
    document.querySelector('.colRow22').textContent &&
    !document.querySelector('.colRow21').classList.contains('success') &&
    !document.querySelector('.colRow22').classList.contains('success')
  ) {
    document.querySelector('.colRow21').classList.add('success');
    document.querySelector('.colRow22').classList.add('success');
    count++;
  }

  if (
    document.querySelector('.colRow31').textContent &&
    document.querySelector('.colRow32').textContent &&
    !document.querySelector('.colRow31').classList.contains('success') &&
    !document.querySelector('.colRow32').classList.contains('success')
  ) {
    document.querySelector('.colRow31').classList.add('success');
    document.querySelector('.colRow32').classList.add('success');
    count++;
  }

  if (
    document.querySelector('.colRow41').textContent &&
    document.querySelector('.colRow42').textContent &&
    !document.querySelector('.colRow41').classList.contains('success') &&
    !document.querySelector('.colRow42').classList.contains('success')
  ) {
    document.querySelector('.colRow41').classList.add('success');
    document.querySelector('.colRow42').classList.add('success');
    count++;
  }

  answer.textContent = `Ваш счет: ${count}`;

  if (count === 4) {
    gameWrapper.classList.add('hide');
    endgameWrapper.classList.remove('hide');

    const loginName = document.createElement('h2');
    loginName.textContent = `ПОЗДРАВЛЯЮ, ВЫ УГАДАЛИ ВСЕ СЛОВА (${count})`;
    endgameWrapper.prepend(loginName);
  }
};

//
authButton.addEventListener('click', () => {
  if (logElement.value && passElement.value) {
    authWrapper.classList.add('hide');
    lobbyWrapper.classList.remove('hide');

    localStorage.setItem('login', logElement.value);
    localStorage.setItem('password', passElement.value);

    const loginName = document.createElement('h2');
    loginName.textContent = `Добро пожаловать, ${localStorage.getItem(
      'login'
    )}`;
    lobbyWrapper.prepend(loginName);
  } else {
    document.getElementById('autErr').innerHTML =
      "<div style ='color: red;'>Error</div>";
  }
});

//
startWrapper.addEventListener('click', () => {
  lobbyWrapper.classList.add('hide');
  gameWrapper.classList.remove('hide');
  resultWrapper.classList.remove('hide');
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
});

//
textWrapper.addEventListener('click', (event) => {
  if (
    event.target.classList.contains('col1') &&
    event.target.classList.contains('row1')
  ) {
    document.querySelector('.colRow11').innerHTML = event.target.textContent;
    event.target.classList.add('foreign-words');
  }

  if (
    event.target.classList.contains('col1') &&
    event.target.classList.contains('row2')
  ) {
    document.querySelector('.colRow12').innerHTML = event.target.textContent;
    event.target.classList.add('foreign-words');
  }

  if (
    event.target.classList.contains('col2') &&
    event.target.classList.contains('row1')
  ) {
    document.querySelector('.colRow21').innerHTML = event.target.textContent;
    event.target.classList.add('foreign-words');
  }

  if (
    event.target.classList.contains('col2') &&
    event.target.classList.contains('row2')
  ) {
    document.querySelector('.colRow22').innerHTML = event.target.textContent;
    event.target.classList.add('foreign-words');
  }

  if (
    event.target.classList.contains('col3') &&
    event.target.classList.contains('row1')
  ) {
    document.querySelector('.colRow31').innerHTML = event.target.textContent;
    event.target.classList.add('foreign-words');
  }

  if (
    event.target.classList.contains('col3') &&
    event.target.classList.contains('row2')
  ) {
    document.querySelector('.colRow32').innerHTML = event.target.textContent;
    event.target.classList.add('foreign-words');
  }

  if (
    event.target.classList.contains('col4') &&
    event.target.classList.contains('row1')
  ) {
    document.querySelector('.colRow41').innerHTML = event.target.textContent;
    event.target.classList.add('foreign-words');
  }

  if (
    event.target.classList.contains('col4') &&
    event.target.classList.contains('row2')
  ) {
    document.querySelector('.colRow42').innerHTML = event.target.textContent;
    event.target.classList.add('foreign-words');
  }

  setResult();
});

//
logoutButton.addEventListener('click', () => {
  localStorage.removeItem('login');
  localStorage.removeItem('password');
  location.reload();
});
