import React from 'react'
import { Link } from 'react-router-dom'
import './landingArea.scss'

import landingImg from '../../img/fresh-veg.webp'
import MenuIcon from '../../Icons/MenuIcon'
import TableIcon from '../../Icons/TableIcon'

function LandingArea() {

    return (
        <div className="landing-area container">
            <div className='landing-text'>
                <h1>Eat Healthy</h1>
                <h1>Stay Healthy</h1>

                <div className="buttons">
                    <Link className="menubtn" to='/menu'><MenuIcon />Menu</Link>
                    <Link className="bookbtn" to='/reservation'><TableIcon />Book A Table</Link>
                </div>

            </div>

            <div className="landing-img">
                <img src={landingImg} alt="" />
            </div>

        </div>
    )
}

export default LandingArea