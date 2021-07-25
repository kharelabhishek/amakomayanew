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
// import Infography from './infography/Infography'

export default function index() {
    return (
        <>     
            <Slider />
            <Aboutus />
            <Womendata />
            <Datas />
            <Ourservice />
            <News />
            <Distinctfeature />
            {/* <Ourteam /> */}
            {/* <Pregnancytips />  */}
            {/* <Infography />  */}
        </>
    )
}
