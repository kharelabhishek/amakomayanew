import React from 'react'
import './Infography.css'
import Titlesection from '../../resuable component/titlesection/Titlesection'
import Hello from '../../../Assets/image/3.png'
import Hello1 from '../../../Assets/image/4.jpg'
import Hello2 from '../../../Assets/image/5.png'


export default function Infography() {
    return (
        <div className="background-css">
            <div className="container">
                <div className="row info">
                    <Titlesection title="Infography"/>
                    <div className="mt-3 col-lg-4 mb-4">
                        <div className="card">
                            <img src={Hello2} alt="" />
                        </div>
                    </div>
                    <div className="mt-3 col-lg-4 mb-4">
                        <div className="card">
                            <img src={Hello} alt="" />
                        </div>
                    </div>
                    <div className="mt-3 col-lg-4 mb-4">
                        <div className="card">
                            <img src={Hello1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}