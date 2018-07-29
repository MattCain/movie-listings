import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper, Genre, Checkbox } from "./GenreFilter.styles";
import { toggleGenreSelected } from "./GenreFilter.utils";

export class GenreFilter extends Component {
  static propTypes = {
    genres: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChange: PropTypes.func.isRequired
  };

  state = {
    selectedGenreIds: []
  };

  render() {
    const { genres } = this.props;

    return (
      <Wrapper>
        <h3>Genres</h3>
        {genres.map(({ id, name }) => (
          <Genre key={id}>
            <Checkbox onChange={() => this.handleChange(id)} />
            {name}
          </Genre>
        ))}
      </Wrapper>
    );
  }

  handleChange = id => {
    const { onChange } = this.props;
    const { selectedGenreIds } = this.state;
    this.setState(
      { selectedGenreIds: toggleGenreSelected(id, selectedGenreIds) },
      () => onChange(this.state.selectedGenreIds)
    );
  };
}
