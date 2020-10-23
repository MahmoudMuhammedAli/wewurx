import React from 'react';
import Styles from './infobar.module.scss';

const InfoBar = props => {
    return <div className =  {`${Styles.infobar}`}>
        
        <h4 className = {`${Styles.infobar__name}`}>INfo Bar</h4>
        <div className = {`${Styles.infobar__info}`}>Some info</div>
    </div>
}
export default InfoBar;