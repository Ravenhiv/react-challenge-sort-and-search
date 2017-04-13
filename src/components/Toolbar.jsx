import React from 'react'

const Toolbar = props => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="toolbar">
          <button className="btn btn-default" onClick={() => props.handleSortName('name')}>
            <i className="icon fa fa-sort-alpha-asc"></i>
            <span>Sort by name</span>
          </button>
          <button className="btn btn-default" onClick={() => props.handleSortName('age')}>
            <i className="icon fa fa-sort-numeric-desc"></i>
            <span>Sort by age</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Toolbar
