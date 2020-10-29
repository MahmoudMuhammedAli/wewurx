import React from 'react';
import Styles from './lastfilterbar.module.scss';

const FilterBar = props => {
    return (
        <div className = {`${Styles.filterbar}`}>
            <input type = 'checkbox' className = {`${Styles.filterbar__check}`} />
            <div className = {`${Styles.filterbar__item}`}>
                Content & Type
                <i className = {`fa fa-arrow-circle-o-down ${Styles.filterbar__item__icon}`}></i>

            </div>
            <div className = {`${Styles.filterbar__item}`}>
                Address
                <i className = {`fa fa-arrow-circle-o-down ${Styles.filterbar__item__icon}`}></i>
            </div>
            <div className = {`${Styles.filterbar__item}`}>
                Phone num.
                <i className = {`fa fa-arrow-circle-o-down ${Styles.filterbar__item__icon}`}></i>

            </div>
            <div className = {`${Styles.filterbar__item} ${Styles.filterbar__itemEmail}`}>
                Email
                <i className = {`fa fa-arrow-circle-o-down ${Styles.filterbar__item__icon}`}></i>

            </div>
            <div className = {`${Styles.filterbar__item}`}>
                Account balance
                <i className = {`fa fa-arrow-circle-o-down ${Styles.filterbar__item__icon}`}></i>

            </div>
        </div>
    )
}
export default FilterBar;