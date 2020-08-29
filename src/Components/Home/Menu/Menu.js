import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './menu.scss'
import MenuItem from '../../MenuPage/MenuItem'
import { AiOutlineArrowRight } from 'react-icons/ai'

function Menu(props) {
    const { menuItem } = props
    const previewItems = menuItem.filter((item) => item.ourPick).map((item) => {
        return (
            <MenuItem key={item.id} item={item} {...props} />
        )
    })

    return (
        <div className="container menu-preview">
            <div className='header'>
                <h2 className='heading'>Top Picks</h2>
                <NavLink className='btn' to='/menu'>Show Full Menu</NavLink>
            </div>

            <div className='preview-items'>
                {previewItems}
                <div className='menuitem'>
                    <Link className='exploremore' to='/menu'>Explore More  <AiOutlineArrowRight /></Link>
                </div>
            </div>
        </div>
    )
}

export default Menu