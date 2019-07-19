import React from 'react';

import './SearchForm.css';

const SearchForm = ({onInputChange}) => {
  return (
    <div className="SearchForm">
      <input type='text' onChange={onInputChange} />
    </div>
  );
}

export default SearchForm;