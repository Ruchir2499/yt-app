import React, { useState } from 'react';


const SearchBar = ({onFormSubmit}) => {
  const [term,setTerm] = useState("");

  const onSubmit = event => {
        event.preventDefault();

        //this.props.onFormSubmit(this.state.term); the name of prop and function is coliding
        onFormSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search For A Video</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
}


export default SearchBar;