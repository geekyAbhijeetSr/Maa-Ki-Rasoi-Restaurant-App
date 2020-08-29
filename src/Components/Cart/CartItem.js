import React from 'react'
import { IoMdRemove } from 'react-icons/io'
import { AiFillDelete } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

import './cartItem.scss'

function CartItem(props) {
    const { item, addItem, removeItem, deleteItem } = props
    return (
        <div className='itemsInCart'>
            <div className='info'>
                <div className='image'>
                    <img src={item.img} alt="" />
                </div>
                <div className='details'>
                    <span className='name'>{item.name}</span>
                    <span className='price'>
                        <span>&#8377;</span>
                        <p>{item.price}</p>
                    </span>
                </div>

            </div>

            <div className='qtyAndTotal'>
                <div className='qty'>
                    <div className="qtybtn">
                        <div className='qbtn' onClick={() => removeItem(item.id)}>
                            {item.selectedQty > 1 ?
                                <IoMdRemove /> :
                                <AiFillDelete />
                            }

                        </div>
                        <span>{item.selectedQty}</span>
                        <div className='qbtn' onClick={() => addItem(item.id)}>
                            <IoMdAdd />
                        </div>
                    </div>
                </div>

                <div className='total'>
                    <span className='price'>
                        <span>&#8377;</span>
                        <p>{item.total}</p>
                    </span>
                </div>

                <div>
                    <button onClick={() => deleteItem(item.id)} className='removebtn'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
