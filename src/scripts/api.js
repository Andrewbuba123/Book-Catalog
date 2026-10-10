export async function getBooks() {
  try {
    const res = await fetch(
      "https://openlibrary.org/search.json?q=classic&limit=10"
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.docs;
  } catch (error) {
    return null;
  }
}