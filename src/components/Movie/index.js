import React from "react";
import { Wrapper, Poster, Genres, Rating } from "./Movie.styles";

export const Movie = ({ poster_path, title, vote_average, genres }) => (
  <Wrapper>
    <Poster url={poster_path} />
    <h3>{title}</h3>
    <Genres>Genres: {genres.join(", ")}</Genres>
    <Rating>Vote Avg: {vote_average}</Rating>
  </Wrapper>
);
