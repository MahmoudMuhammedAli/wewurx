import React from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className='sidebar'>
      <Link to='jobs/quotes'>
        <i className='fa fa-angle-left '></i> Quotes
      </Link>
      <NavLink to='/jobs/quotes/add'>Quote</NavLink>
      <NavLink to='/jobs/quotes/add/costitems'>Cost Items</NavLink>
      <NavLink to='/jobs/quotes/add/filesandnotes'>Files And Notes</NavLink>
      <button c>Save</button>
      <button>Cancel</button>
    </div>
  );
};

export default SideBar;
