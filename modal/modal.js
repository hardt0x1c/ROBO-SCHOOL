// Получить модальный
let modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
let btnn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
let span = document.getElementsByClassName("close")[0];

// Получить элемент <a>
let anchorss = document.querySelectorAll(".modal-text");
// Когда пользователь нажимает на ссылку, закрыть окно
anchorss.forEach(function(ancor) {
    ancor.onclick = function() {
        modal.style.display = "none";
    }
});

// Когда пользователь нажимает на кнопку, откройте модальный
btnn.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 