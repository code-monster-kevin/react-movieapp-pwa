import React from 'react';

const MovieSortBy = props => {
  return (
    <select
      name="sortby"
      onChange={props.handleSortChanged}
      value={props.sortby}
    >
      <option value="popularity.asc">Popularity Ascending</option>
      <option value="popularity.desc">Popularity Descending</option>
      <option value="release_date.asc">Release Date Ascending</option>
      <option value="release_date.desc">Release Date Descending</option>
      <option value="original_title.asc">Title Ascending</option>
      <option value="original_title.desc">Title Descending</option>
    </select>
  );
};

export default MovieSortBy;
