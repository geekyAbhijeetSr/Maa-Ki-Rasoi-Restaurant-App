import React from 'react'
import './burgerMenu.scss'

function BurgerMenu(props) {

    const toggle = props.toggleToCross ? 'toggle' : ''
    return (
        <div className='burger-menu' onClick={props.click}>
            <span className={toggle}></span>
            <span className={toggle}></span>
            <span className={toggle}></span>
        </div>
    )
}

export default BurgerMenu