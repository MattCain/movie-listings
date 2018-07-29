import { contains, without, append } from "ramda";

// If the is is already present then remove it, if not then add it.
export const toggleGenreSelected = (id, selectedGenreIds) =>
  contains(id, selectedGenreIds)
    ? without([id], selectedGenreIds)
    : append(id, selectedGenreIds);
