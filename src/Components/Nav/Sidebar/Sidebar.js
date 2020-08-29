import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.scss'

function Sidebar(props) {

    const showOrHide = props.show ? 'show' : ""
    return (
        <div className={`sidebar ${showOrHide}`}>
            <ul className="side-navigation">
                <li><NavLink onClick={props.linkClickHandler} activeClassName="active" exact to='/'>Home</NavLink></li>
                <li><NavLink onClick={props.linkClickHandler} activeClassName="active" to='/menu'>Menu</NavLink></li>
                <li><NavLink onClick={props.linkClickHandler} activeClassName="active" to='/reservation'>Book A Table</NavLink></li>
            </ul>
        </div>
    )
}

export default Sidebar;