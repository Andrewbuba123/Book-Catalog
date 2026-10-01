import { getBooks } from "./api.js";
import { getFavorites, isFavorite, toggleFavorite } from "./storage.js";
import { createBook } from "./components/bookCard.js";
import { createFavBook } from "./components/favCard.js";

const bookList = document.querySelector(".catalog__list");
const favBookList = document.querySelector(".favorites__list");
const counterEl = document.querySelector(".favorites__counter");
const formEl = document.querySelector(".search-form");
const inputEl = formEl?.querySelector(".search-form__input");

function showMessage(text) {
  if (!bookList) return;
  bookList.innerHTML = `<li style="grid-column: 1 / -1; text-align: center; padding: 40px; font-size: 1.1rem; color: #7c736a;">${text}</li>`;
}

function updateFavCounter() {
  if (!counterEl) return;
  const count = getFavorites().length;
  counterEl.textContent = `${count} book${count === 1 ? "" : "s"} saved`;
}

function syncFavButtons() {
  document.querySelectorAll(".catalog__item").forEach((li) => {
    const book = {
      title: li.querySelector(".book-card__title")?.textContent ?? "",
      author: li.querySelector(".book-card__author")?.textContent ?? "",
    };
    li.classList.toggle("catalog__item--favorite", isFavorite(book));
  });
}

function renderFavorites() {
  if (!favBookList) return;
  favBookList.innerHTML = "";

  const favBooks = getFavorites();
  favBooks.forEach((book) => {
    favBookList.appendChild(createFavBook(book, handleToggleFavorite));
  });

  updateFavCounter();
}

function handleToggleFavorite(book) {
  toggleFavorite(book);
  syncFavButtons();
  renderFavorites();
}

async function renderBooks() {
  if (!bookList) return;
  bookList.innerHTML = "";

  const books = await getBooks();

  if (!books) {
    showMessage("Не удалось загрузить книги. Проверьте интернет или попробуйте позже.");
    return;
  }

  if (books.length === 0) {
    showMessage("Книги не найдены.");
    return;
  }

  books.forEach((book) => {
    bookList.appendChild(createBook(book, handleToggleFavorite));
  });

  syncFavButtons();
}

function searchBook(inputValue) {
  const query = inputValue.trim().toLowerCase();
  const allCards = document.querySelectorAll(".catalog__item");
  const noResultEl = document.querySelector(".catalog__no-results");

  if (noResultEl) noResultEl.remove();

  if (query.length === 0) {
    allCards.forEach((li) => (li.style.display = ""));
    return;
  }

  let foundCount = 0;
  allCards.forEach((li) => {
    const title = li.querySelector(".book-card__title")?.textContent.toLowerCase() ?? "";
    const author = li.querySelector(".book-card__author")?.textContent.toLowerCase() ?? "";
    const matches = title.includes(query) || author.includes(query);

    li.style.display = matches ? "" : "none";
    if (matches) foundCount++;
  });

  if (foundCount === 0 && bookList) {
    const emptyLi = document.createElement("li");
    emptyLi.className = "catalog__no-results";
    emptyLi.style.gridColumn = "1 / -1";
    emptyLi.style.textAlign = "center";
    emptyLi.style.padding = "40px";
    emptyLi.style.color = "#7c736a";
    emptyLi.textContent = "По вашему запросу ничего не найдено.";
    bookList.appendChild(emptyLi);
  }
}

// Слушатели событий
formEl?.addEventListener("submit", (e) => {
  e.preventDefault();
  searchBook(inputEl.value);
});

// Запуск приложения
renderBooks().then(renderFavorites);