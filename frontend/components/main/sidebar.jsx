import React from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="div-sidebar">
            <NavLink to={`/home`}><strong>Home</strong></NavLink>
            <p>PUBLIC</p>
            <ul className="tag-lists">
                <li>Tags</li>
                <li>Users</li>
                <li>Jobs</li>
            </ul>
        </div>
    )
}

export default Sidebar;