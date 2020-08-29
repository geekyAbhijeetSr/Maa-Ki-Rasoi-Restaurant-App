import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

import BurgerMenu from '../BurgerMenu/BurgerMenu'
import BagIcon from '../../Icons/BagIcon'

class Navbar extends Component {
    state = {
        scrolledDown: false,
        scrollY: 0,
    }
    scrollListener = null

    componentDidMount() {
        this.scrollListener = document.addEventListener("scroll", () => {
            const isScrollDown = window.scrollY > 20
            this.setState({ scrolledDown: isScrollDown })
        })
    }

    componentWillUnmount() {
        document.removeEventListener(this.scrollListener)
    }


    

    render() {
        const { itemInCart, clickHandler, toggleToCross } = this.props
        return (
            <header id='navbar-wrapper' className={`${this.state.scrolledDown ? 'onScroll' : ''}`}>
                <nav className='container'>

                    <BurgerMenu click={clickHandler} toggleToCross={toggleToCross} />

                    <div className='brandLogo'>
                        <NavLink to='/'><h1>Maa Ki Rasoi</h1></NavLink>
                    </div>

                    <div className='spacer'></div>

                    <ul className="navigation">
                        <li><NavLink activeClassName="active" to='/menu'>Menu</NavLink></li>
                        <li><NavLink activeClassName="active" to='/reservation'>Book A Table</NavLink></li>
                    </ul>
                    <span className='navcart'>
                        <NavLink activeClassName="active" to='/cart'><div><span>{itemInCart}</span><BagIcon /></div><span id='cart'>Cart</span></NavLink>
                    </span>
                </nav>
            </header>
        )
    }
}

export default Navbar