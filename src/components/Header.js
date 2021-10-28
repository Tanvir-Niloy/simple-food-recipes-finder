import React from 'react'

const Header = ({search,onInputChange,onSearchClick}) => {
    return (
        <div className='jumbotron py-5'>
            <h2 className='display-1 text-center'>Recipes Finder 🍔🍝🍰</h2>
            <div class="input-group w-50 mx-auto py-4">
        <input
          type="text"
          class="form-control"
          placeholder="Search Your Recipe..."
          value={search}
          onChange={onInputChange}
        />
        <div class="input-group-append">
          <button className="btn btn-dark" onClick={onSearchClick}>
            Search Recipe
          </button>
        </div>
      </div>
        </div>
    )
}

export default Header
