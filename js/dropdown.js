// Ждём полной загрузки DOM
document.addEventListener("DOMContentLoaded", function () {
  // Находим элементы
  const burgerMenu = document.getElementById("burgerMenu");
  const navbarList = document.getElementById("navbarList");

  // Проверяем, что элементы существуют на странице
  if (burgerMenu && navbarList) {
    // ===== 1. ОТКРЫТИЕ/ЗАКРЫТИЕ МЕНЮ ПРИ КЛИКЕ НА БУРГЕР =====
    burgerMenu.addEventListener("click", function (event) {
      event.stopPropagation(); // предотвращаем всплытие события
      navbarList.classList.toggle("active");
      burgerMenu.classList.toggle("active");
    });

    // ===== 2. ЗАКРЫТИЕ MENU ПРИ КЛИКЕ НА ЛЮБУЮ ССЫЛКУ =====
    const menuLinks = navbarList.querySelectorAll(".navbar__item");
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navbarList.classList.remove("active");
        burgerMenu.classList.remove("active");
      });
    });

    // ===== 3. ЗАКРЫТИЕ MENU ПРИ КЛИКЕ ВНЕ ЕГО =====
    document.addEventListener("click", function (event) {
      if (
        !burgerMenu.contains(event.target) &&
        !navbarList.contains(event.target)
      ) {
        navbarList.classList.remove("active");
        burgerMenu.classList.remove("active");
      }
    });

    // ===== 4. ЗАКРЫТИЕ MENU ПРИ ИЗМЕНЕНИИ РАЗМЕРА ОКНА =====
    // Если ширина стала больше 1024px — сбрасываем активные классы
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1024) {
        navbarList.classList.remove("active");
        burgerMenu.classList.remove("active");
      }
    });

    // ===== 5. ОБРАБОТЧИК ДЛЯ BUTTON ПОИСКА (опционально) =====
    const searchBtn = document.querySelector(".search__container-btn");
    const searchInput = document.querySelector(".search__container-input");

    if (searchBtn && searchInput) {
      searchBtn.addEventListener("click", function () {
        const query = searchInput.value.trim();
        if (query !== "") {
          console.log("Поиск:", query);
          // alert('Вы ищете: ' + query);
          // Здесь можно добавить перенаправление на страницу поиска
          // window.location.href = 'search.html?q=' + encodeURIComponent(query);
        } else {
          alert("Введите текст для поиска");
        }
      });

      // Поиск по нажатию Enter
      searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          searchBtn.click();
        }
      });
    }
  }
});
