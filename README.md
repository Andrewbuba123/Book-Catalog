# Book Catalog

## Description

Book Catalog is a small frontend application for browsing and searching books.
In the interface, the app is called **The Library**.
Book data is loaded from the [Open Library API](https://openlibrary.org/developers/api), and favorite books are saved in the browser.

## Features

- browse a catalog of books loaded from the Open Library API;
- search books by title or author;
- add books to favorites and remove them;
- save favorites to Local Storage, so they persist after a page reload;
- responsive layout for mobile, tablet, and desktop.

## Technologies

- HTML
- CSS
- JavaScript
- Vite
- npm
- TypeScript (practice lessons only, see [TypeScript Practice](#typescript-practice))

## Requirements

- Node.js 20.19+ or 22.12+ (required by Vite)

## Installation and Usage

Clone the repository:

```bash
git clone https://github.com/Andrewbuba123/Book-Catalog.git
```

Navigate to the project directory:

```bash
cd Book-Catalog
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Production Build

To create a production build, run:

```bash
npm run build
```

The production files will be generated in the `dist/` directory.

## TypeScript Practice

The `ts-practice/` folder contains TypeScript exercises (lessons 1–22) completed while learning the language.
They are not part of the application and are not included in the production build.

Type-check all lessons:

```bash
npx tsc -p ts-practice
```

Run a single lesson:

```bash
npx tsx ts-practice/lesson-01.ts
```

## Screenshots

![Book Catalog](./src/assets/book-catalog.png)

## Future Improvements

- add sorting;
- add pagination;
- add a separate book details page.
