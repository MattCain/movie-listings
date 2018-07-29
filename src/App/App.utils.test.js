import { filterByRating, filterByGenre } from "./App.utils";

describe("filterByRating", () => {
  it("should return movies with a rating equal to or higher than the minumum", () => {
    const movies = [
      { vote_average: 3 },
      { vote_average: 5 },
      { vote_average: 7 }
    ];

    expect(filterByRating(3, movies)).toHaveLength(3);
    expect(filterByRating(5, movies)).toHaveLength(2);
    expect(filterByRating(6.5, movies)).toHaveLength(1);
    expect(filterByRating(8, movies)).toHaveLength(0);
  });
});

describe("filterByGenres", () => {
  it("should return movies that match all of the selected genre filters", () => {
    const movies = [
      { genre_ids: [1, 2, 3] },
      { genre_ids: [1] },
      { genre_ids: [1, 3] }
    ];

    expect(filterByGenre([1], movies)).toHaveLength(3);
    expect(filterByGenre([1, 2], movies)).toHaveLength(1);
    expect(filterByGenre([1, 3], movies)).toHaveLength(2);
  });
});
