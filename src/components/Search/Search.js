//REQUIRED IMPORTS
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import './Search.scss';

//IMPORT REDUX ELEMENTS
import { showUsers } from 'redux/usersRedux';

let Search = () => {
    //*HOOKS REF*/
    const inputEl = useRef(null);

    /*HOOKS DISPATCH*/
    const dispatch = useDispatch();
   
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(showUsers(inputEl.current.value));
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <label htmlFor="searchText">Search by user name</label>
            <input
                type="text"
                id="searchText"
                placeholder="Search..."
                ref={inputEl}
            />
        </form>
    )
}

export default Search;
