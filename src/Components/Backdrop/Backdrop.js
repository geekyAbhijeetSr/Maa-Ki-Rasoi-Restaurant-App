import React from 'react'
import './backdrop.scss'

function Backdrop(props) {
    return (
        <div className='backdrop' onClick={props.click}>
            <div className="top-space"></div>
            <div className='dark-backdrop'></div>
        </div>
    )
}

export default Backdrop