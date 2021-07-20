import React from 'react';

const Header = (props) => {
  return (
    <div className='row'>
      <div className='col hero-name'>
        <h1>{props.heading}</h1>
      </div>

      <div className='col col-sm-4'>
        <input
          className='form-control'
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder='Type here to search...'
        ></input>
      </div>
    </div>
  );
}

export default Header;