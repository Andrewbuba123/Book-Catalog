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
        ? card.querySelector(".book-card__title")?.textContent ?? ""
        : card.querySelector(".fav-card__title")?.textContent ?? "",
      author: isCatalogCard
        ? card.querySelector(".book-card__author")?.textContent ?? ""
        : card.querySelector(".fav-card__author")?.textContent ?? "",
      year: isCatalogCard
        ? card.querySelector(".book-card__year")?.textContent ?? ""
        : card.querySelector(".fav-card__year")?.textContent ?? "",
      cover_i: card.closest("li")?.dataset.cover || "",
    };

    if (onToggle) onToggle(book);
  });

  return button;
}