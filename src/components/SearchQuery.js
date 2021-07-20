import React from 'react';

const SearchQuery = (props) => {
  return (
    <div className='col'>
      <h5><i>Showing search results for '{props.inputString}'</i></h5>
    </div>
  )
}

export default SearchQuery;