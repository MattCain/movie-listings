import React, { Component, Fragment } from "react";
import { Header, Title, Content, Movies, Filters } from "./App.styles";
import { Loading } from "styles";
import { Movie } from "components/Movie";
import { GenreFilter } from "components/GenreFilter";
import { RatingFilter } from "components/RatingFilter";
import { allLoaded, getGenresFromIds, getFilteredMovies } from "./App.utils";

const API_KEY = "d8384fa0cab5bc5153e952bc512da824";

export class App extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenreIds: [],
    minRating: 3
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    ).then(response =>
      response.json().then(({ results }) =>
        this.setState({
          // Sort by popularity, most popular first.
          movies: results.sort((a, b) => b.popularity - a.popularity)
        })
      )
    );
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    ).then(response =>
      response.json().then(({ genres }) => this.setState({ genres }))
    );
  }

  render() {
    const { movies, genres, selectedGenreIds, minRating } = this.state;
    const hasLoaded = allLoaded(movies, genres);

    if (!hasLoaded) {
      return <Loading />;
    }

    const filteredMovies = getFilteredMovies(
      minRating,
      selectedGenreIds,
      movies
    );

    return (
      <Fragment>
        <Header>
          <Title>Movie Listings!</Title>
        </Header>
        <Content>
          <Movies>
            {filteredMovies.map(movie => (
              <Movie
                {...movie}
                genres={getGenresFromIds(genres, movie.genre_ids)}
                key={movie.id}
              />
            ))}
          </Movies>
          <Filters>
            <GenreFilter
              genres={genres}
              onChange={selectedGenreIds => this.setState({ selectedGenreIds })}
            />

            <RatingFilter
              minRating={minRating}
              onChange={minRating => this.setState({ minRating })}
            />
          </Filters>
        </Content>
      </Fragment>
    );
  }
}
