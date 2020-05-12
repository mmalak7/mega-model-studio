import React, { useRef, useEffect } from 'react';

import photo from '../assets/Poeple4-unsplash.jpg';
import '../stylesheets/layouts/home.scss';

import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite } from "gsap";

const Home = () => {

    let p1 = useRef(null);
    let p1After = CSSRulePlugin.getRule(".p1:after");
    let p2 = useRef(null);
    let p2After = CSSRulePlugin.getRule(".p2:after");
    let p3 = useRef(null);
    let p3After = CSSRulePlugin.getRule(".p3:after");
    let quote = useRef(null);
    let quoteAfter = CSSRulePlugin.getRule(".quote:after");

    let photo_frontModel = useRef(null);
    let photo_back = useRef(null);
    let frontModel = useRef(null);
    let backModel = useRef(null);

    const tlHomeImg = new TimelineLite();
    const tl = new TimelineLite();
    const tl2 = new TimelineLite();
    const tl3 = new TimelineLite();
    const tl4 = new TimelineLite();

    useEffect(() => {

        tlHomeImg.from([photo_back, photo_frontModel], 1.5, {
                delay: 0.8,
                ease: "power3.out",
                y: 800,
            })

        tl.to(p1, 3, { css: { visibility: 'visible' } })
            .to(p1After, 1.7, { width: "0%", ease: "power3.out" })
        tl2.to(p2, 4, { css: { visibility: 'visible' } })
            .to(p2After, 1.7, { width: "0%", ease: "power3.out" })
        tl3.to(p3, 5, { css: { visibility: 'visible' } })
            .to(p3After, 1.7, { width: "0%", ease: "power3.out" })
        tl4.to(quote, 6.2, { css: { visibility: 'visible' } })
            .to(quoteAfter, 1.7, { width: "0%", ease: "power3.out" })

    }, [])

    return (
        <div className='home-container'>
            <div className='info-part'>
                <h1 ref={el => (p1 = el)} className='p1'>We help to</h1>
                <h1 ref={el => (p2 = el)} className='p2'>discover</h1>
                <h1 ref={el => (p3 = el)} className='p3'>new <p>talents</p></h1>
                <h4 ref={el => (quote = el)} className='quote'>~"In photography there is a reality so subtle that <br />
                   it becomes more real than reality"</h4>
            </div>
            <div className='photo-part'>
                <div ref={el => (frontModel = el)} className='frontModel'>
                    <img className='image-home' ref={el => (photo_frontModel = el)} src={photo} alt='' />
                </div>
                <div ref={el => (backModel = el)} className='backModel'>
                    <img className='image-home' ref={el => (photo_back = el)} src={photo} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Home;