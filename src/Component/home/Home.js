import React from 'react'
import Slider from './slider/Slider'
import News from './NewsStories/News'
// import Pregnancytips from './PregnancyTips/Pregnancytips'
import Aboutus from '../home/Aboutus/Aboutus'
import Ourservice from './Our service/Ourservice'
// import Ourteam from './Ourteam/Ourteam'
import Datas from './Datas/Datas'
import Distinctfeature from './Unique feature/Distinctfeature'
import Womendata from './Chart/Womendata'
import Map from '../Map/Map'
import BG from './Coverbg/Coverbg'
import Testimonial from './Testimonial/Testimonial'
import PartnersHome from './Partners/PartnersHome'

// import Infography from './infography/Infography'

export default function index() {
    return (
        <>     
            {/* <BG /> */}
            <Slider />
            <Aboutus />
            <Datas />
            <Ourservice />
            <Map />
            {/* <News /> */}
            <Distinctfeature />
            <Womendata />
            <Testimonial />
            <PartnersHome />
            {/* <Ourteam /> */}
            {/* <Pregnancytips />  */}
            {/* <Infography />  */}
        </>
    )
}
