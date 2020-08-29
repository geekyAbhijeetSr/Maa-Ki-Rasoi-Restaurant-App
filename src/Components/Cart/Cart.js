import React from 'react'
import './cart.scss'
import empty_cart from '../img/empty_cart.svg'
import CartItem from './CartItem'

function Cart(props) {

    const { menuItem, itemInCart, totalItemInCart, deleveryCharge, subtotal, grandTotal } = props


    const items = menuItem.filter(item =>  item.selectedQty !== 0).map(item => {
        return (
            <CartItem {...props} item={item} key={item.id}/>
        )
    })

    console.log(items)
    const render = itemInCart
        ?
        (
            <div className="cartItem">

                <div className='itemDetails'>

                    <span className='heading'>
                        Items ( <span className='itemcount'>{totalItemInCart}</span> )
                    </span>

                    {items}

                </div>



                <div className='billDetails'>
                    <span className='heading'>Bill Details</span>

                    <span>
                        <span>Sub Total</span>
                        <span>
                            <span>&#8377;</span>
                            <p>{subtotal}</p>
                        </span>
                    </span>

                    <span>
                        <span>Delivery</span>
                        <span>
                            <span>&#8377;</span>
                            <p>{deleveryCharge}</p>
                        </span>
                    </span>

                    <span>
                        <span>Grand Total</span>
                        <span>
                            <span>&#8377;</span>
                            <p>{grandTotal}</p>
                        </span>
                    </span>

                    <button>Place Order</button>
                </div>
            </div>
        )
        :
        (
            <div className='emptyCart'>
                <div className="img"><img src={empty_cart} alt="" /></div>
                <p>Your cart is currently empty!</p>
            </div>
        )

    return (
        <div className='cartPage container'>
            {render}
        </div>
    )
}

export default Cart