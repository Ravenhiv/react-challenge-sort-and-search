import React from 'react'

const SearchBar = props => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="form-group">
          <input
            type="text"
            placeholder="Search people by name..."
            className="form-control"
            onChange={props.handleSearchInput}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
