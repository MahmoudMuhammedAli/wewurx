import React from 'react';
import FilterBar from './components/first filter bar';
import Letters from './components/letters filter bar';
import LastFilterBar from './components/last filter bar';
import SearchBar from './components/search bar';
import Styles from './maincontact.module.scss';
import ContactItem from './components/contact item';

const MainContact = props => {
    return <div className = {`${Styles.maincontact}`}>
        <FilterBar />
        <Letters />
        <SearchBar setShouldShowAddContact = {props.setShouldShowAddContact} />
        <LastFilterBar />
        <ContactItem setShouldShowViewContact = {props.setShouldShowViewContact}/>
    </div>
}
export default MainContact