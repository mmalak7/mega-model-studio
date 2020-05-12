import React, { useRef, useEffect } from 'react';

import '../stylesheets/layouts/contact.scss';
import photo from '../assets/photo-unsplash2.jpg';

import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite } from 'gsap'
import { gsap } from "gsap";

const Contact = () => {

    let info = useRef(null);
    let infoCSS = CSSRulePlugin.getRule('.info:after');

    let emailForm = useRef(null);
    let emailCSS = CSSRulePlugin.getRule('.email-form:after');

    let city = useRef(null);
    let cityCSS = CSSRulePlugin.getRule('.city:after');

    let num = useRef(null);
    let numCSS = CSSRulePlugin.getRule('.num:after');

    let socialText = useRef(null);
    let socialTxtCSS = CSSRulePlugin.getRule('.social-text:after');

    let socialIcons = useRef(null);
    let socialIconsCSS = CSSRulePlugin.getRule('.social-icons:after');

    let photoForm = useRef(null);
    let image = useRef(null);
    let imageFormCSS = CSSRulePlugin.getRule('.photo-part-contact:after');

    const tl = new TimelineLite();
    const tl2 = new TimelineLite();
    const tlcontactImg = new TimelineLite();
    const tl3 = new TimelineLite();
    const tl4 = new TimelineLite();

    gsap.registerPlugin(CSSRulePlugin, gsap, TimelineLite)

    useEffect(() => {

        tlcontactImg.to(photoForm, { css: { visibility: 'visible' } })
            .to(imageFormCSS, 1.7, { width: "-0%", ease: "power3.out" })
            .from(image, 1.7, { scale: 2, ease: "power3.out", delay: -1.7 });

        tl.to(info, 1.5, { css: { visibility: 'visible' } })
            .to(infoCSS, 1.7, { width: "0%", ease: "power3.out" })

        tl2.to(emailForm, 2.7, { css: { visibility: 'visible' } })
            .to(emailCSS, 1.7, { width: "0%", ease: "power3.out" })

        tl3.to([city, socialText], 3.2, { css: { visibility: 'visible' } })
            .to([cityCSS, socialTxtCSS], 1.7, { width: "0%", ease: "power3.out" })

        tl4.to([num, socialIcons], 4, { css: { visibility: 'visible' } })
            .to([socialIconsCSS, numCSS], 1.7, { width: "0%", ease: "power3.out" })


    }, []);

    return (
        <div className='contact-container'>
            <div className='main-part'>
                <p ref={el => (info = el)} className='info'>Let's collaborate</p>
                <p ref={el => (emailForm = el)} className='email-form'>discover.studio@gmail.com</p>
                <div className='contact-form'>
                    <div className='social-form'>
                        <p ref={el => (socialText = el)} className='social-text'>Find us</p>
                        <p ref={el => (socialIcons = el)} className='social-icons'>FB IG BE IN</p>
                    </div>
                    <div className='phone-form'>
                        <p ref={el => (city = el)} className='city'>Hamburg, Germany</p>
                        <p ref={el => (num = el)} className='num'>+32 (00) 27 378 242</p>
                    </div>
                </div>
            </div>
            <div ref={el => (photoForm = el)} className='photo-part-contact'>
                <img ref={el => (image = el)} src={photo} alt='' />
            </div>
        </div>
    )
}

export default Contact;