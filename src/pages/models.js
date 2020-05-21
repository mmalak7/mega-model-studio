import React, { useRef, useEffect } from 'react';

import photo from '../assets/Poeple3-unsplash.jpg';
import '../stylesheets/layouts/models.scss';

import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite } from 'gsap'
import { gsap } from "gsap";

const Models = () => {

    let imgFront = useRef(null);
    let imgBack = useRef(null);

    let infoPart = useRef(null);
    let modelPart = useRef(null);

    let name = useRef(null);
    let nameCSS = CSSRulePlugin.getRule('.name:after');

    let description = useRef(null);
    let descriptionCSS = CSSRulePlugin.getRule('.description:after');

    let profession = useRef(null);
    let professionCSS = CSSRulePlugin.getRule('.profession:after');

    let experience = useRef(null);
    let experienceCSS = CSSRulePlugin.getRule('.experience:after');

    const tl = new TimelineLite();
    const tl2 = new TimelineLite();
    const tlModelImg = new TimelineLite();
    const tl3 = new TimelineLite();
    const tl4 = new TimelineLite();
    const tl5 = new TimelineLite();

    gsap.registerPlugin(CSSRulePlugin, gsap, TimelineLite)

    useEffect(() => {

        tl.to(infoPart, 1, { css: { visibility: 'visible' } })

        tl2.to(name, 1, { css: { visibility: 'visible' } })
            .to(nameCSS, 1.7, { width: "0%", ease: "power3.out" })
        tlModelImg.to(modelPart, 2, { css: { visibility: 'visible' } })
            .to(imgFront, 1.7, {css: {opacity: 1, ease: "power3.out"}})
            .to(imgBack, 1.7, {css: {opacity: 1, ease: "power3.out"}})

        tl3.to(profession, 4, { css: { visibility: 'visible' } })
            .to(professionCSS, 1.7, { width: "0%", ease: "power3.out" })
        tl4.to(description, 5.5, { css: { visibility: 'visible' } })
            .to(descriptionCSS, 1.7, { width: "0%", ease: "power3.out" })
        tl5.to(experience, 6, { css: { visibility: 'visible' } })
            .to(experienceCSS, 1.7, { width: "0%", ease: "power3.out" })
    });

    return (
        <div className='models-container'>
            <div ref={el => (modelPart = el)} className='photo-part-models'>
                <img ref={el => (imgFront = el)} className='front' src={photo} alt='' />
                <img ref={el => (imgBack = el)} className='back' src={photo} alt='' />
            </div>
            <div ref={el => (infoPart = el)} className='info-part'>
                <h1 ref={el => (name = el)} className='name'>Aldona Perez</h1>
                <h1 ref={el => (profession = el)} className='profession'>Dancer / Model</h1>
                <h1 ref={el => (description = el)} className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Sed aliquet, tellus in pellentesque tempus, tortor<br /> mauris vehicula massa, non lacinia.</h1>
                <h1 ref={el => (experience = el)} className='experience'>Vestibulum dapibus magna posuere porta viverra. In ac<br /> ante id metus maximus molestie quis vel ipsum. liquam<br /> viverra nisl porttitor lectus fringilla dictum. Vestibulum<br /> dapibus magna posuere porta viverra. In ac ante id etus <br />maximus molestie quis vel ipsum. Aliquam viverra nisl<br /> porttitor lectus fringilla dictum.</h1>
            </div>
        </div>
    )
}

export default Models; 