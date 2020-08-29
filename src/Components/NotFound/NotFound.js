import React from 'react'
import './notFound.scss'
import {Link} from 'react-router-dom'

function NotFound() {
    return (
        <div className='not-found'>
            <div>
                <p className='error404'>404</p>
                <p className='para'>Sorry! we couldn't find that page</p>
                <p>Go to <Link to='/'>Maa Ki Rasoi's home page</Link></p>
            </div>
        </div>
    )
}

export default NotFound