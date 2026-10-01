import { createImg, createTitle, createText, createSpan, createLikeBtn } from "../dom.js";

export function createFavBook(book, onToggleFav) {
  const liEl = document.createElement("li");
  liEl.className = "favorites__item";
  liEl.dataset.cover = book.cover_i || "";

  const article = document.createElement("article");
  article.className = "fav-card";

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "./assets/book.svg";

  const mainImg = createImg(
    coverUrl,
    "Изображение обложки",
    "fav-card__cover"
  );
  const titleEl = createTitle(
    book.title || "Unknown Title",
    "fav-card__title"
  );
  const textEl = createText(book.author || "", "fav-card__author");
  const spanEl = createSpan(book.year || "—", "fav-card__year");
  const likeBtn = createLikeBtn(true, onToggleFav);

  article.append(mainImg, titleEl, textEl, spanEl, likeBtn);
  liEl.appendChild(article);
  return liEl;
}