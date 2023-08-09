import React, {useState}  from "react"

import TeamPicture from '../Images/TeamPictures/TeamImage.jpg'

const AboutUs = () => {

    return (
        <>
            <div className="flex items-center justify-center overflow-auto text-3xl text-center lg:h-1/4 sm:pt-40 lg:pt-80 bg-stone-900 font-Italiana lg:p-40">
                <div className="flex flex-col">
                    <h1 className="text-white lg:text-8xl sm:text-4xl">WHO ARE WE</h1>
                    <p className="pt-10 text-white lg:text-lg sm:px-9 sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis corporis doloremque corrupti dolorem temporibus 
                        aliquid hic repellat atque eius dolores suscipit, quam vel porro sequi aperiam dolor omnis optio facilis, nemo laudantium
                        voluptatibus, explicabo commodi? Error iusto quasi illo quia?
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center w-screen overflow-auto text-3xl text-center sm:pt-10 sm:h-1/2 lg:h-1/2 bg-stone-900 font-Italiana">
                <div className="flex flex-col items-center justify-center text-center text-white sm:text-4xl lg:text-8xl lg:mt-4">
                    <h1 className="">MEET THE TEAM</h1>

                    <img src={TeamPicture} alt="TeamPicture" className="w-1/4 pt-10 mt-10 rounded-lg lg:mt-4"></img>
                    <div className="absolute flex flex-col text-center lg:left-24 lg:pb-0 lg:w-1/4 sm:w-1/3 sm:left-5 sm:pt-10">
                        <h1 className="lg:text-4xl sm:text-2xl">Michelle Tran</h1>
                        <label className="italic text-gray-300 lg:text-lg sm:text-xs ">Managing Partner</label>
                        <p className="text-lg lg:w-auto sm:text-sm sm:pt-3 lg:pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae rerum 
                        quam pariatur, impedit possimus dignissimos rem quidem autem libero incidunt dolor! Soluta, ipsam saepe pariatur dolorum 
                        quos culpa assumenda ab rerum incidunt? Accusamus consequuntur dolor nulla sunt sequi? Voluptatem?</p>
                    </div>
                    <div className="absolute flex flex-col text-center lg:right-24 lg:pb-0 lg:w-1/4 sm:w-1/3 sm:right-5 sm:pt-10">
                        <h1 className="lg:text-4xl sm:text-3xl ">Dorris C</h1>
                        <label className="italic text-gray-300 lg:text-lg sm:text-xs">Managing Partner</label>
                        <p className="w-auto text-lg sm:text-sm sm:pt-3 lg:pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae rerum 
                        quam pariatur, impedit possimus dignissimos rem quidem autem libero incidunt dolor! Soluta, ipsam saepe pariatur dolorum 
                        quos culpa assumenda ab rerum incidunt? Accusamus consequuntur dolor nulla sunt sequi? Voluptatem?</p>
                    </div>
                
                </div>
            </div>
        </>
    )
}

export default AboutUs;