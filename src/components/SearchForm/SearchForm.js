import React from 'react';

import './SearchForm.css';

const SearchForm = ({onInputChange}) => {
  return (
    <div className="SearchForm">
      <input className="SearchForm-input" type='text' placeholder="Just start typing..." onChange={onInputChange} />
    </div>
  );
}

export default SearchForm;