import React from 'react'
import './menuItem.scss'
import { IoMdRemove } from 'react-icons/io'
import { IoMdAdd } from 'react-icons/io'
import { RiDeleteBin7Line } from 'react-icons/ri'

function MenuItem(props) {
    const { item, addItem, removeItem } = props
    return (
        <div className='menuitem'>
            <div className='img'>
                <img src={item.img} alt="" />
            </div>
            <div className='details'>
                <span className="name">{item.name}</span>
                
                <div className='priceAdd'>
                    <div className="price">
                        <span>&#8377;</span>
                        <p>{item.price}</p>
                    </div>

                    {item.selectedQty > 0
                        ?
                        <div className="qtybtn">
                            <div className='qbtn' onClick={() => removeItem(item.id)}>
                                {item.selectedQty > 1 ?
                                    <IoMdRemove /> :
                                    <RiDeleteBin7Line />
                                }

                            </div>
                            <span>{item.selectedQty}</span>
                            <div className='qbtn' onClick={() => addItem(item.id)}>
                                <IoMdAdd />
                            </div>
                        </div>
                        :
                        <button className="addbtn" onClick={() => addItem(item.id)}>Add</button>
                    }

                </div>
            </div>
        </div>
    )
}

export default MenuItem
