import React from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="div-sidebar">
            <NavLink className="link-home" to={`/home`}>Home</NavLink>
            <p>PUBLIC</p>
            <ul className="tag-lists">
                <NavLink to={`/tags`}><li>Tags</li></NavLink>
                <li>Users</li>
                <li>Jobs</li>
            </ul>
        </div>
    )
}

export default Sidebar;