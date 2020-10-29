import React from 'react';
import Styles from './searchbar.module.scss';


const SearchBar = props => {
    return (
        <div className = {`${Styles.searchbar}`}>
            <div className = {`${Styles.actions}`}>
                <select className = {`${Styles.select}`}>
                    <option value="export">Export contacts</option>
                    <option value="import">Import contacts</option>
                    <option value="delete">Delete contacts</option>
                </select>
                <button
                    className = {`${Styles.apply}`}
                >
                    Apply
                </button>
                <button 
                    className = {`${Styles.add}`}
                    onClick = {()=>props.setShouldShowAddContact(true)}>
                    <i className = {`fa fa-plus ${Styles.add__icon}`}></i>
                    Add Contact 
                </button>
            </div>
            <div className = {`${Styles.search}`}>
                <button className = {`${Styles.search__reset}`}>
                    reset
                </button>
                <div className = {`${Styles.search__searchbox}`}>
                    <i className = {`fa fa-search ${Styles.search__searchbox__icon}`}></i>
                    <input 
                        type = 'text' 
                        placeholder = 'keyword'
                        className = {`${Styles.search__searchbox__input}`}
                    />
                </div>
            </div>
        </div>
    )
}
export default SearchBar;