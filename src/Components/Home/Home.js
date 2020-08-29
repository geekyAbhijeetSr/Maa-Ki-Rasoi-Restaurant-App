import React from 'react'
import './home.scss'
import LandingArea from './LandingArea/LandingArea'
import Table from '../BookTable/Table/Table'
import Testimonial from './Testimonial/Testimonial'
import Menu from './Menu/Menu'



function Home(props) {
    return (
        <div className="home">
            <LandingArea />
            <Menu {...props}/>
            <Table />
            <Testimonial />
        </div>
    )
}

export default Home