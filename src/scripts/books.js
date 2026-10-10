import bookIcon from "../assets/icons/book.svg";

export function createImg(src, alt, className) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  if (className) img.className = className;
  return img;
}

export function createTitle(text, className) {
  const h3 = document.createElement("h3");
  h3.textContent = text;
  if (className) h3.className = className;
  return h3;
}

export function createText(text, className) {
  const p = document.createElement("p");
  p.textContent = text;
  if (className) p.className = className;
  return p;
}

export function createSpan(text, className) {
  const span = document.createElement("span");
  span.textContent = text;
  if (className) span.className = className;
  return span;
}

export function createLikeBtn(isFavSidebar = false, onToggle) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = isFavSidebar
    ? "fav-card__remove-btn"
    : "book-card__fav-btn";

  const iconClass = isFavSidebar
    ? "fav-card__remove-icon"
    : "book-card__fav-icon";

  button.innerHTML = `
    <svg class="${iconClass}" viewBox="0 0 16 16" width="16" height="16">
      <path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5928 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82671 2 9.00004 2.33333 8.00004 3.33333C7.00004 2.33333 6.17337 2 5.00004 2C4.02758 2 3.09495 2.38631 2.40732 3.07394C1.71968 3.76158 1.33337 4.69421 1.33337 5.66667C1.33337 7.2 2.33337 8.36667 3.33337 9.33333L8.00004 14L12.6667 9.33333Z" 
            stroke-width="1.33" 
            stroke-linecap="round" 
            stroke-linejoin="round"/>
    </svg>
  `;

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.currentTarget.closest("article");
    if (!card) return;

    const isCatalogCard = card.classList.contains("book-card");
    const book = {
      title: isCatalogCard
        ? (card.querySelector(".book-card__title")?.textContent ?? "")
        : (card.querySelector(".fav-card__title")?.textContent ?? ""),
      author: isCatalogCard
        ? (card.querySelector(".book-card__author")?.textContent ?? "")
        : (card.querySelector(".fav-card__author")?.textContent ?? ""),
      year: isCatalogCard
        ? (card.querySelector(".book-card__year")?.textContent ?? "")
        : (card.querySelector(".fav-card__year")?.textContent ?? ""),
      cover_i: card.closest("li")?.dataset.cover || "",
    };

    if (onToggle) onToggle(book);
  });

  return button;
}

export function createFavBook(book, onToggleFav) {
  const liEl = document.createElement("li");
  liEl.className = "favorites__item";
  liEl.dataset.cover = book.cover_i || "";

  const article = document.createElement("article");
  article.className = "fav-card";

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : bookIcon;

  const mainImg = createImg(coverUrl, "Изображение обложки", "fav-card__cover");
  const titleEl = createTitle(book.title || "Unknown Title", "fav-card__title");
  const textEl = createText(book.author || "", "fav-card__author");
  const spanEl = createSpan(book.year || "—", "fav-card__year");
  const likeBtn = createLikeBtn(true, onToggleFav);

  const infoBox = document.createElement("div");
  infoBox.className = "fav-card__info";
  infoBox.append(titleEl, textEl, spanEl);

  article.append(mainImg, infoBox, likeBtn);
  liEl.appendChild(article);
  return liEl;
}

export function createBook(book, onToggleFav) {
  const liEl = document.createElement("li");
  liEl.className = "catalog__item";
  liEl.dataset.cover = book.cover_i || "";

  const article = document.createElement("article");
  article.className = "book-card";

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : bookIcon;

  const mainImg = createImg(
    coverUrl,
    "Изображение обложки",
    "book-card__cover",
  );

  const contentBox = document.createElement("div");
  contentBox.className = "book-card__content";

  const titleEl = createTitle(
    book.title || "Unknown Title",
    "book-card__title",
  );
  const textEl = createText(
    book.author_name?.[0] || "Unknown Author",
    "book-card__author",
  );
  const spanEl = createSpan(book.first_publish_year || "—", "book-card__year");
  const likeBtn = createLikeBtn(false, onToggleFav);

  contentBox.append(titleEl, textEl, spanEl);
  article.append(mainImg, contentBox, likeBtn);
  liEl.appendChild(article);
  return liEl;
}
