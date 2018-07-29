import {
  filter,
  isEmpty,
  unapply,
  all,
  complement,
  innerJoin,
  pipe,
  pluck,
  equals,
  intersection,
  propSatisfies,
  lte,
  curry
} from "ramda";

const isNotEmpty = complement(isEmpty);

export const allLoaded = unapply(all(isNotEmpty));

export const getGenresFromIds = pipe(
  innerJoin((genre, id) => genre.id === id),
  pluck("name")
);

export const filterByGenre = curry(
  (selectedGenreIds, movies) =>
    isEmpty(selectedGenreIds)
      ? movies
      : filter(
          ({ genre_ids }) =>
            // Check that the movie contains all the selected genre filters.
            equals(intersection(genre_ids, selectedGenreIds), selectedGenreIds),
          movies
        )
);

export const filterByRating = curry((minRating, movies) =>
  filter(propSatisfies(lte(minRating), "vote_average"), movies)
);

export const getFilteredMovies = (minRating, selectedGenreIds, movies) =>
  pipe(filterByRating(minRating), filterByGenre(selectedGenreIds))(movies);
