import React from 'react'
import './footer.scss'
import { NavLink } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { GrYoutube } from 'react-icons/gr'
import { FiPhoneCall } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'
import { FiMapPin } from 'react-icons/fi'

function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer>
            <div className='container footer'>
                <div className='border'></div>

                <div className="footer-content">
                    <div className="contact-us-wrapper">
                        <ul>
                            <li className="contact-us">Contact Us</li>

                            <li className='item'><FiPhoneCall className="icon" size='18px'/><p><a href="tel:+919876543210">(+91)-987-654-3210</a>,
                            <a href="tel:+910123456789">(+91)-01-2345-6789</a></p></li>

                            <li className='item'><FiMail className='icon' size='18px' /><p><a href="mailto:someone@example.com">maakirasoi@support.com</a></p></li>

                            <li className='item'><FiMapPin className="icon" size="18px" /><p><a href="https://goo.gl/maps/bKWktsddonK17JWC6" target='_blank' rel="noopener noreferrer">Maa Ki Rasoi, Somewhere in Varansi, India</a></p></li>

                        </ul>
                    </div>


                    <div className='map'>
                        <iframe title='varanasi map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.23982788093!2d82.92106909945713!3d25.320746100078523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1596174724640!5m2!1sen!2sin" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className='brandLogo'>
                        <NavLink to='/'><h1>Maa Ki Rasoi</h1></NavLink>
                    </div>
                    <div className='social-media'>
                        <a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer"><FaFacebookF className='fb icon' /></a>

                        <a href="https://www.twitter.com/" target='_blank' rel="noopener noreferrer"><FaTwitter className='tw icon' /></a>

                        <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer"><GrInstagram className='in icon' /></a>

                        <a href="https://www.youtube.com/" target='_blank' rel="noopener noreferrer"><GrYoutube className='yt icon' /></a>




                    </div>
                    <p>&copy;{year}. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer