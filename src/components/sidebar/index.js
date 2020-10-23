import React from 'react';
import Styles from './sidebar.module.scss';
import {NavLink as Link} from 'react-router-dom';

const SideBar = props => {
    return <aside className = {`${Styles.sidebar}`}>
        <span className = {`${Styles.sidebar__we}`}>we</span>
        <ul className = {`${Styles.sidebar__links} list-unstyled`}>
            <li>
                <Link to = '/' exact  className = {`${Styles.sidebar__link}`}>
                    <i className = {`fa fa-clock-o fa-lg ${Styles.sidebar__icon}`}>
                    </i><span>Jobs</span>
                </Link>
            </li>
            <li>
                <Link to = '/schedule' className = {`${Styles.sidebar__link}`}>
                    <i className = {`fa fa-calendar fa-lg ${Styles.sidebar__icon}`}>
                    </i><span>Sechedule</span>
                </Link>
            </li>
            <li>
                <Link to = '/contacts' className = {`${Styles.sidebar__link}`}>
                    <i className = {`fa fa-user fa-lg ${Styles.sidebar__icon}`}>
                    </i><span>contacts</span>
                </Link>
            </li>
            <li>
                <Link to = '/documents' className = {`${Styles.sidebar__link}`}>
                    <i className = {`fa fa-file fa-lg ${Styles.sidebar__icon}`}>
                    </i><span>Company Documents</span>
                </Link>
            </li>
            
            <li>
                <hr />
                <Link className = {`${Styles.sidebar__link}`} to = '/settings'>
                    <i className = {`fa fa-cogs fa-lg ${Styles.sidebar__icon}`}>
                    </i>
                    <span>settings</span>
                </Link>
            </li>
            
        </ul>
        
    </aside>
}
export default SideBar;
