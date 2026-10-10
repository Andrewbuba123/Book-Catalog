const SEARCH_URL = "https://openlibrary.org/search.json";
const RESULTS_LIMIT = 10;

export async function getBooks(query = "classic") {
  try {
    const params = new URLSearchParams({ q: query, limit: RESULTS_LIMIT });
    const res = await fetch(`${SEARCH_URL}?${params}`);

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.docs;
  } catch {
    return null;
  }
}
