import React, {useState}  from "react"


const AboutUs = () => {

    return (
        <div className="pt-20">
        <h1 className="text-2xl">About Us!</h1>
        <div className="max-w-sm flex flex-col rounded-lg overflow-hidden bg-white shadow">
            {/* <img src={logo}></img> */}
            <p className="">Michelle Tran</p>
            <p1 className="">text</p1>
        </div>
        <div className="max-w-sm flex flex-col rounded-lg overflow-hidden bg-white shadow">
            {/* <img src={logo}></img> */}
            <p className="">Donna</p>
            <p1 className="">text</p1>
        </div>
        <div className="max-w-sm flex flex-col rounded-lg overflow-hidden bg-white shadow">
            {/* <img className="" src={logo}></img> */}
            <p className="">Jack Sonoda</p>
            <p1 className="">text</p1>
        </div>
    </div>
    )
}

export default AboutUs;