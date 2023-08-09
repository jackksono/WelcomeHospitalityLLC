import React, {useState}  from "react"

import TeamPicture from '../Images/TeamPictures/TeamImage.jpg'

const AboutUs = () => {

    return (
        <>
        <div className="w-screen overflow-auto bg-stone-900">
            <div className="flex items-center justify-center overflow-auto text-3xl text-center lg:-z-0 pt-28 lg:h-3/4 sm:pt-56 lg:mt-40 bg-stone-900 font-Italiana">
                <div className="flex flex-col">
                    <h1 className="text-white underline lg:text-8xl sm:text-4xl underline-offset-8 lg:mt-0">WHO ARE WE</h1>
                    <p className="pt-4 mx-5 text-white lg:text-lg md:text-[20px] sm:text-[15px] text-xs sm:mx-5 leading-5 lg:pt-7 lg:m-10 sm:leading-[2rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis corporis doloremque corrupti dolorem temporibus 
                        aliquid hic repellat atque eius dolores suscipit, quam vel porro sequi aperiam dolor omnis optio facilis, nemo laudantium
                        voluptatibus, explicabo commodi? Error iusto quasi illo quia?
                    </p>
                </div>
            </div>
;
            <div className="flex justify-center lg:min-h-screen w-screen text-3xl lg:z-10 text-center mt-[-50px] sm:mt-[-100px] sm:pt-0 sm:h-3/4 lg:h-auto bg-stone-900 font-Italiana">
                <div className="flex flex-col items-center justify-center pt-10 text-center text-white sm:pt-10 sm:text-4xl lg:text-8xl ">
                    <h1 className="underline lg:z-10 underline-offset-8">MEET THE TEAM</h1>

                    <img src={TeamPicture} alt="TeamPicture" className="w-3/4 mt-5 rounded-lg shadow-sm sm:w-1/4 sm:pt-10 sm:mt-0 lg:mt-16 lg:w-2/5 lg:pt-0"></img>

                    <div className="flex flex-col pt-5 text-center sm:absolute lg:pb-0 lg:w-1/4 lg:pr-16 lg:mt-40 lg:left-10 sm:w-1/3 md:pt-20 sm:left-5 sm:pt-28">
                        <h1 className="lg:text-4xl sm:text-3xl mb-[-13px] sm:mb-0">Michelle Tran</h1>
                        <label className="italic text-gray-300 lg:text-lg sm:text-xs text-[10px] mb-[-5px]">Managing Partner</label>
                        <p className="text-[10px] lg:text-lg lg:w-auto sm:text-sm sm:pt-3 lg:pt-10 md:text-base mx-3 leading-5 mb-[-5px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae rerum 
                        quam pariatur, impedit possimus dignissimos rem quidem autem libero incidunt dolor! Soluta, ipsam saepe pariatur dolorum 
                        quos culpa assumenda ab rerum incidunt? Accusamus consequuntur dolor nulla sunt sequi? Voluptatem?</p>
                    </div>
                    <div className="flex flex-col pt-5 text-center sm:absolute lg:right-10 lg:pl-16 lg:pb-0 lg:w-1/4 sm:w-1/3 lg:mt-40 sm:right-5 sm:pt-28 md:pt-20">
                        <h1 className="lg:text-4xl sm:text-3xl mb-[-13px] sm:mb-0">Dorris C</h1>
                        <label className="italic text-gray-300 lg:text-lg sm:text-xs text-[10px] mb-[-5px]">Managing Partner</label>
                        <p className="text-[10px] lg:text-lg lg:w-auto sm:text-sm sm:pt-3 lg:pt-10 md:text-base mx-3 leading-5 mb-[-5px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae rerum 
                        quam pariatur, impedit possimus dignissimos rem quidem autem libero incidunt dolor! Soluta, ipsam saepe pariatur dolorum 
                        quos culpa assumenda ab rerum incidunt? Accusamus consequuntur dolor nulla sunt sequi? Voluptatem?</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutUs;