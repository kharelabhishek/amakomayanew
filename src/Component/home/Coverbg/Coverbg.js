import React from 'react'
import BG from '../../../../src/Assets/image/front_bg.JPG'
import './Coverbg.css'

export default function Coverbg() {
    return (
        <div>
            <img 
            className="img-responsive bg" 
            src={BG} 
            alt="." />
        </div>
    )
}
