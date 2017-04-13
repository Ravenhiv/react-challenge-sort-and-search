import React from 'react'

const Toolbar = props => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="toolbar">
          <button className="btn btn-default" onClick={() => props.handleSorting('name')}>
            <span>Sort by name</span>
          </button>
          <button className="btn btn-default" onClick={() => props.handleSorting('age')}>
            <span>Sort by age</span>
          </button>
          <button className="btn btn-default" onClick={props.resetSorting}>
            <span>Reset sorting</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Toolbar
