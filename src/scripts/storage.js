const FAV_KEY = "favBooks";

export function getFavorites() {
  return JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
}

export function saveFavorites(list) {
  localStorage.setItem(FAV_KEY, JSON.stringify(list));
}

export function isFavorite(book) {
  return getFavorites().some(
    (b) => b.title === book.title && b.author === book.author
  );
}

export function toggleFavorite(book) {
  const favorites = getFavorites();
  const idx = favorites.findIndex(
    (b) => b.title === book.title && b.author === book.author
  );

  if (idx === -1) {
    favorites.push(book);
  } else {
    favorites.splice(idx, 1);
  }

  saveFavorites(favorites);
}