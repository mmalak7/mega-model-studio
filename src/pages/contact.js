import React from 'react';

import '../stylesheets/layouts/contact.scss';
import photo from '../assets/photo-unsplash2.jpg';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='main-part'>
                <p className='info'>Let's collaborate</p> 
                <p className='email-form'>discover.studio@gmail.com</p>
                <div className='contact-form'>
                    <div className='social-form'>
                        <p className='social-text'>Find us</p>
                        <p className='social-icons'>FB IG BE IN</p>
                    </div>
                    <div className='phone-form'>
                        <p className='city'>Hamburg, Germany</p>
                        <p className='num'>+32 (00) 27 378 242</p>
                    </div>
                </div>
            </div>
            <div className='photo-part'>
                <img src={photo} alt='' />
            </div>
        </div>
    )
}

export default Contact;