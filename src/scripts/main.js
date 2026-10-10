import "../styles/main.css";
import { getBooks } from "./api.js";
import { getFavorites, isFavorite, toggleFavorite } from "./storage.js";
import { createBook, createFavBook } from "./books.js";

const bookList = document.querySelector(".catalog__list");
const favBookList = document.querySelector(".favorites__list");
const counterEl = document.querySelector(".favorites__counter");
const formEl = document.querySelector(".search-form");
const inputEl = formEl?.querySelector(".search-form__input");

function showMessage(text) {
  if (!bookList) return;
  bookList.replaceChildren();

  const messageLi = document.createElement("li");
  messageLi.className = "catalog__message";
  messageLi.textContent = text;
  bookList.append(messageLi);
}

function updateFavCounter() {
  if (!counterEl) return;
  const count = getFavorites().length;
  counterEl.textContent = `${count} book${count === 1 ? "" : "s"} saved`;
}

function syncFavButtons() {
  document.querySelectorAll(".catalog__item").forEach((li) => {
    const book = {
      title: li.querySelector(".book-card__title")?.textContent?.trim() ?? "",
      author: li.querySelector(".book-card__author")?.textContent?.trim() ?? "",
    };
    li.classList.toggle("catalog__item--favorite", isFavorite(book));
  });
}

function renderFavorites() {
  if (!favBookList) return;

  const favBooks = getFavorites();
  const fragment = document.createDocumentFragment();

  favBooks.forEach((book) => {
    fragment.append(createFavBook(book, handleToggleFavorite));
  });

  favBookList.replaceChildren(fragment);
  updateFavCounter();
}

function handleToggleFavorite(book) {
  toggleFavorite(book);
  syncFavButtons();
  renderFavorites();
}

async function renderBooks() {
  if (!bookList) return;
  bookList.replaceChildren();

  const books = await getBooks();

  if (!books) {
    showMessage("Не удалось загрузить книги. Проверьте интернет или попробуйте позже.");
    return;
  }

  if (books.length === 0) {
    showMessage("Книги не найдены.");
    return;
  }

  const fragment = document.createDocumentFragment();
  books.forEach((book) => {
    fragment.append(createBook(book, handleToggleFavorite));
  });

  bookList.append(fragment);
  syncFavButtons();
}

function searchBook(inputValue) {
  const query = inputValue.trim().toLowerCase();
  const allCards = document.querySelectorAll(".catalog__item");
  const existingMessage = bookList?.querySelector(".catalog__message");

  if (existingMessage) {
    existingMessage.remove();
  }

  if (!query) {
    allCards.forEach((li) => li.classList.remove("is-hidden"));
    return;
  }

  let foundCount = 0;

  allCards.forEach((li) => {
    const title = li.querySelector(".book-card__title")?.textContent.toLowerCase() ?? "";
    const author = li.querySelector(".book-card__author")?.textContent.toLowerCase() ?? "";
    const matches = title.includes(query) || author.includes(query);

    li.classList.toggle("is-hidden", !matches);
    if (matches) foundCount++;
  });

  if (foundCount === 0 && bookList) {
    const emptyLi = document.createElement("li");
    emptyLi.className = "catalog__message catalog__message--no-results";
    emptyLi.textContent = "По вашему запросу ничего не найдено.";
    bookList.append(emptyLi);
  }
}

formEl?.addEventListener("submit", (e) => {
  e.preventDefault();
  searchBook(inputEl?.value ?? "");
});

inputEl?.addEventListener("input", (e) => {
  searchBook(e.target.value);
});

async function init() {
  await renderBooks();
  renderFavorites();
}

init();