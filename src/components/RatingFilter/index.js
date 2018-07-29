import React, { Fragment } from "react";
import PropTypes from "prop-types";

export const RatingFilter = ({ minRating, onChange }) => (
  <Fragment>
    <h3>Minimum Rating</h3>
    <input
      type="number"
      value={minRating}
      step={0.5}
      onChange={e => onChange(Number(e.target.value))}
    />
  </Fragment>
);

RatingFilter.propTypes = {
  minRating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
