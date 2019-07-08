//REQUIRED IMPORTS
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Search.scss';

//IMPORT REDUX ELEMENTS
import { showUsers } from '../../redux/usersRedux';

let Search = () => {
    /*HOOKS STATE*/
    let [searchText, textChange] = useState('');

    /*HOOKS DISPATCH*/
    const dispatch = useDispatch();

    const handleChange = (e) => textChange(searchText = e.target.value);
   
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(showUsers(searchText));
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <label htmlFor="searchText">Search by user name</label>
            <input
                type="text"
                id="searchText"
                placeholder="Search..."
                onChange={handleChange}
            />
        </form>
    )
}

export default Search;
