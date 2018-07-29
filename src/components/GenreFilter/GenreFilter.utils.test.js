import { getSelectedGenreIds, toggleGenreSelected } from "./GenreFilter.utils";

describe("toggleGenreSelected", () => {
  it("should add the id to the selected list if it's not already in it", () => {
    const selectedGenreIds = [1, 2, 3];
    expect(toggleGenreSelected(4, selectedGenreIds)).toEqual([1, 2, 3, 4]);
  });

  it("should remove the id from the selected list if it's already in it", () => {
    const selectedGenreIds = [1, 2, 3];
    expect(toggleGenreSelected(2, selectedGenreIds)).toEqual([1, 3]);
  });
});
