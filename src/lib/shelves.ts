/**
 * The three project shelves on the home page. Plain data only: no Node
 * imports, so client components can use it too.
 */
export const SHELVES = [
  { id: "engineering", tab: "Engineering", name: "Engineering" },
  { id: "research", tab: "Research", name: "Research" },
  { id: "coursework", tab: "Coursework", name: "Coursework and paper reproductions" },
] as const;

export type ShelfId = (typeof SHELVES)[number]["id"];
