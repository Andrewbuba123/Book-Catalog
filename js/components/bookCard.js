import { createImg, createTitle, createText, createSpan, createLikeBtn } from "../dom.js";

export function createBook(book, onToggleFav) {
  const liEl = document.createElement("li");
  liEl.className = "catalog__item";
  liEl.dataset.cover = book.cover_i || "";

  const article = document.createElement("article");
  article.className = "book-card";

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "./assets/book.svg";

  const mainImg = createImg(
    coverUrl,
    "Изображение обложки",
    "book-card__cover"
  );

  const contentBox = document.createElement("div");
  contentBox.className = "book-card__content";

  const titleEl = createTitle(
    book.title || "Unknown Title",
    "book-card__title"
  );
  const textEl = createText(
    book.author_name?.[0] || "Unknown Author",
    "book-card__author"
  );
  const spanEl = createSpan(
    book.first_publish_year || "—",
    "book-card__year"
  );
  const likeBtn = createLikeBtn(false, onToggleFav);

  contentBox.append(titleEl, textEl, spanEl);
  article.append(mainImg, contentBox, likeBtn);
  liEl.appendChild(article);
  return liEl;
}