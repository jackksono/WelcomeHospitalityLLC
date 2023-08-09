import React, {useState}  from "react"

import TeamPicture from '../Images/TeamPictures/TeamImage.jpg'

const AboutUs = () => {

    return (
        <>
            <div className="flex items-center justify-center overflow-auto text-3xl text-center pt-28 lg:h-1/4 sm:pt-48 lg:pt-80 bg-stone-900 font-Italiana ">
                <div className="flex flex-col">
                    <h1 className="text-white lg:text-8xl sm:text-4xl">WHO ARE WE</h1>
                    <p className="pt-2 sm:pt-2 text-white lg:text-lg md:text-[20px] sm:text-[15px] text-sm sm:m-5 leading-5 sm:leading-[2rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis corporis doloremque corrupti dolorem temporibus 
                        aliquid hic repellat atque eius dolores suscipit, quam vel porro sequi aperiam dolor omnis optio facilis, nemo laudantium
                        voluptatibus, explicabo commodi? Error iusto quasi illo quia?
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center w-screen overflow-auto text-3xl text-center sm:pt-10 sm:h-1/2 lg:h-1/2 bg-stone-900 font-Italiana">
                <div className="flex flex-col items-center justify-center pt-10 text-center text-white sm:text-4xl lg:text-8xl lg:mt-4">
                    <h1 className="">MEET THE TEAM</h1>

                    <img src={TeamPicture} alt="TeamPicture" className="w-3/4 mt-5 rounded-lg shadow-sm sm:w-1/4 sm:pt-10 sm:mt-16 lg:mt-4"></img>
                    <div className="flex flex-col pt-10 text-center sm:absolute lg:left-24 lg:pb-0 lg:w-1/4 sm:w-1/3 md:pt-0 sm:left-5 sm:pt-10">
                        <h1 className="lg:text-4xl sm:text-2xl">Michelle Tran</h1>
                        <label className="italic text-gray-300 lg:text-lg sm:text-xs text-[10px]">Managing Partner</label>
                        <p className="text-[10px] lg:text-lg lg:w-auto sm:text-sm sm:pt-3 lg:pt-10 md:text-base m-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae rerum 
                        quam pariatur, impedit possimus dignissimos rem quidem autem libero incidunt dolor! Soluta, ipsam saepe pariatur dolorum 
                        quos culpa assumenda ab rerum incidunt? Accusamus consequuntur dolor nulla sunt sequi? Voluptatem?</p>
                    </div>
                    <div className="flex flex-col text-center sm:absolute lg:right-24 lg:pb-0 lg:w-1/4 sm:w-1/3 sm:right-5 sm:pt-10 md:pt-0">
                        <h1 className="lg:text-4xl sm:text-3xl ">Dorris C</h1>
                        <label className="italic text-gray-300 lg:text-lg sm:text-xs text-[10px]">Managing Partner</label>
                        <p className="w-auto text-lg sm:text-sm sm:pt-3 md:text-base lg:pt-10 text-[10px] m-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae rerum 
                        quam pariatur, impedit possimus dignissimos rem quidem autem libero incidunt dolor! Soluta, ipsam saepe pariatur dolorum 
                        quos culpa assumenda ab rerum incidunt? Accusamus consequuntur dolor nulla sunt sequi? Voluptatem?</p>
                    </div>
                
                </div>
            </div>
        </>
    )
}

export default AboutUs;