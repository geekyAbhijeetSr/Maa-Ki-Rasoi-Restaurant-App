import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import menuItem from './menuData/menuData'
import Navbar from './Nav/Navbar/Navbar'
import Sidebar from './Nav/Sidebar/Sidebar'
import Backdrop from './Backdrop/Backdrop'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import MenuPage from './MenuPage/MenuPage'
import { shuffle } from './functions/functions'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import BookTable from './BookTable/BookTable'
import NotFound from './NotFound/NotFound'
import Cart from './Cart/Cart'

class App extends Component {
  state = {
    menuItem: shuffle(menuItem),
    isMenuOpen: false,
    itemInCart: 0,
    totalItemInCart: 0,
    subtotal: 0,
    grandTotal: 0,
    deleveryCharge: 40,
  }

  componentDidMount() {
    this.updateItemCountInCart()
  }

  updateItemCountInCart = () => {
    let cartItemCount = 0
    let subtotal = 0
    let totalCartItemCount = 0
    let grandTotal = 0
    let menuItem = this.state.menuItem
    menuItem.forEach((item) => {
      if (item.selectedQty > 0) {
        cartItemCount = cartItemCount + 1
        totalCartItemCount = totalCartItemCount + item.selectedQty
        subtotal = subtotal + item.total
        grandTotal = this.state.deleveryCharge + subtotal
      }
    })
    this.setState({
      itemInCart: cartItemCount,
      subtotal: subtotal,
      totalItemInCart: totalCartItemCount,
      grandTotal: grandTotal,
    })
  }

  burgerMenuClickHandler = () => {
    this.setState((prevState) => {
      return {
        isMenuOpen: !prevState.isMenuOpen,
      }
    })
  }

  backdropClickHandler = () => {
    this.setState({
      isMenuOpen: false,
    })
  }


  deleteItem = (id) => {
    let currentState = this.state
    let newMenuItem = currentState.menuItem.map((item) => {
      if (item.id === id) {
        item.selectedQty = 0
        item.total = 0
      }
      return item
    })

    this.setState(prevState => {
      return {
        ...prevState,
        newMenuItem
      }
    })

    this.updateItemCountInCart()
  }

  addItem = (id) => {
    let currentState = this.state
    let newMenuItem = currentState.menuItem.map((item) => {
      if (item.id === id) {
        item.selectedQty = item.selectedQty + 1
        item.total = item.selectedQty * item.price
      }
      return item
    })

    this.setState(prevState => {
      return {
        ...prevState,
        newMenuItem
      }
    })

    this.updateItemCountInCart()
  }

  removeItem = (id) => {
    let currentState = this.state
    let newMenuItem = currentState.menuItem.map((item) => {
      if (item.id === id) {
        item.selectedQty = item.selectedQty - 1
        item.total = item.selectedQty * item.price
      }
      return item
    })

    this.setState(prevState => {
      return {
        ...prevState,
        newMenuItem
      }
    })
 
    this.updateItemCountInCart()
  }

  render() {
    const stopScroll = this.state.isMenuOpen ? 'stopScroll' : ''
    return (
      <Router>
        <ScrollToTop />
        <div className={`App ${stopScroll}`}>

          <div className='top-space'></div>

          {/* Navbar and related stuff */}
          <Navbar clickHandler={this.burgerMenuClickHandler} toggleToCross={this.state.isMenuOpen} itemInCart={this.state.itemInCart} />
          <Sidebar show={this.state.isMenuOpen} linkClickHandler={this.backdropClickHandler} />
          {this.state.isMenuOpen && <Backdrop click={this.backdropClickHandler} />}
          {/* end of Navbar and related stuff */}

          <Switch>
            <Route exact path='/' render={(props) => {
              return <Home
                {...props}
                menuItem={this.state.menuItem}
                addItem={this.addItem}
                removeItem={this.removeItem}
              />
            }} />

            <Route exact path='/menu' render={(props) => {
              return <MenuPage
                {...props}
                menuItem={this.state.menuItem}
                addItem={this.addItem}
                removeItem={this.removeItem} />
            }} />

            <Route exact path='/reservation' render={(props) => {
              return <BookTable
                {...props}
              />
            }} />

            <Route exact path='/cart' render={(props) => {
              return <Cart
                {...props}
                menuItem={this.state.menuItem}
                itemInCart={this.state.itemInCart}
                totalItemInCart={this.state.totalItemInCart}
                deleveryCharge={this.state.deleveryCharge}
                subtotal={this.state.subtotal}
                addItem={this.addItem}
                removeItem={this.removeItem}
                deleteItem={this.deleteItem}
                grandTotal={this.state.grandTotal}
              />
            }} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
