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

async function renderBooks(query) {
  if (!bookList) return;
  showMessage("Loading books...");

  const books = await getBooks(query);

  if (!books) {
    showMessage("Failed to load books. Check your connection or try again later.");
    return;
  }

  if (books.length === 0) {
    showMessage("Nothing found for your request.");
    return;
  }

  const fragment = document.createDocumentFragment();
  books.forEach((book) => {
    fragment.append(createBook(book, handleToggleFavorite));
  });

  bookList.replaceChildren(fragment);
  syncFavButtons();
}

formEl?.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = inputEl?.value.trim() ?? "";

  if (!query) {
    showMessage("Enter a title or an author to search.");
    return;
  }

  renderBooks(query);
});

async function init() {
  await renderBooks();
  renderFavorites();
}

init();
