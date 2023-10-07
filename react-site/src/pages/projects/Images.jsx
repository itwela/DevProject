import React, { useEffect, useRef } from 'react';
import './Images.scss'
import '../../index.css'
import { useTransform, useScroll, motion} from 'framer-motion';
import Lenis from '@studio-freight/lenis'
import useDimension from './useDimension.jsx';


const images = [
    'img1.gif',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.GIF',
    'img6.jpg',
    'img7.gif',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg'

]

export default function ImagesScroll() {

    const scrollRef = useRef(null);
    const { height } = useDimension(); 
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start end', 'end start']
    })

    const y = useTransform(scrollYProgress, [0,1], [0, height * 1.5])
    const y2 = useTransform(scrollYProgress, [0,1], [0, height * 2])
    const y3 = useTransform(scrollYProgress, [0,1], [0, height * 2.5])
    const y4 = useTransform(scrollYProgress, [0,1], [0, height * 1.2])

    useEffect( () => {
        const lenis = new Lenis({
            smooth: 0.4
        })


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
    })

    return (
        <>
        <div className="gallery-wrapper">
        <div className='gallery' ref={scrollRef}>
            <Column images={[images[0], images[1], images[2]]}  y={y}/>
            <Column images={[images[3], images[4], images[5]]} y={y2}/>
            <Column images={[images[6], images[7], images[8]]} y={y3}/>
            <Column images={[images[9], images[10], images[11]]} y={y4}/>
        </div>
        </div>
        </>
    )
}

const Column = ({images, y=0}) => (
    <motion.div style={{ y: y }} className="img-column">
        {
            images.map((src, index) => (
                <div key={index} className='img-container'>
                    <img
                        src={`/images/${src}`}
                        alt='image'
                    />
                </div>
            ))
        }
    </motion.div>
)