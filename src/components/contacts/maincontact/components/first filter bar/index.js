import React from 'react';
import Styles from './firstfilterbar.module.scss';

const FilterBar = props => {
    return (
        <div className = {`${Styles.filterbar}`}>
            <span className = {`${Styles.filterbar__item} ${Styles.filterbar__itemActive}`}>
                Filter <i className = {`fa  fa-arrow-circle-down fa-lg ${Styles.filterbar__item__arrow}`}></i>
            </span>
            <span className = {`${Styles.filterbar__item}`}>
                Contact type 
                <span className = {`${Styles.filterbar__item__filter}`}>
                    All
                </span>
            </span>
            <span className = {`${Styles.filterbar__item}`}>
                Contact Category 
                <span className = {`${Styles.filterbar__item__filter}`}>
                    All
                </span>
            </span>
            <span className = {`${Styles.filterbar__item}`}>
                Balance overdue 
                <span className = {`${Styles.filterbar__item__filter}`}>
                    All
                </span>
            </span>
            <span className = {`${Styles.filterbar__item}`}>
                 Custom Fields 
                <span className = {`${Styles.filterbar__item__filter}`}>
                    All
                </span>
            </span>
        </div>
    )
}
export default FilterBar;