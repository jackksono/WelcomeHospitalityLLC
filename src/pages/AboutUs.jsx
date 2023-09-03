import React from "react"

import TeamPicture from '../Images/TeamPictures/TeamImage.jpg'

const AboutUs = () => {

    return (
        <>
        <div className="w-screen overflow-auto bg-stone-900">
            <div className="flex items-center justify-center overflow-auto text-3xl text-center lg:-z-0 pt-28 lg:h-3/4 sm:pt-56 lg:mt-40 bg-stone-900 font-Italiana">
                <div className="flex flex-col">
                    <h1 className="text-white lg:text-8xl sm:text-4xl lg:mt-0">WHO WE ARE</h1>
                    <p className="pt-4 mx-5 text-white lg:text-lg xl:leading-8 xl:text-xl md:text-[20px] sm:text-[15px] text-xs sm:mx-5 leading-5 lg:pt-7 lg:m-10 sm:leading-[2rem] xl:mx-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis corporis doloremque corrupti dolorem temporibus 
                
                        aliquid hic repellat atque eius dolores suscipit, quam vel porro sequi aperiam dolor omnis optio facilis, nemo laudantium
                        voluptatibus, explicabo commodi? Error iusto quasi illo quia?
                    </p>
                </div>
            </div>
;
            <div className="flex justify-center min-h-screen w-screen text-3xl lg:z-10 text-center mt-[-50px] sm:mt-[-100px] xl:mt-[20px] sm:pt-20 lg:h-auto bg-stone-900 font-Italiana">
                <div className="flex flex-col items-center justify-center pt-10 text-center text-white sm:pt-10 sm:text-4xl lg:text-8xl ">
                    <h1 className="lg:z-10 ">MEET THE TEAM</h1>

                    <img src={TeamPicture} alt="TeamPicture" className="object-cover w-3/4 mt-5 rounded-lg shadow-sm sm:w-1/4 sm:pt-10 sm:mt-0 lg:mt-16 xl:mt-[-50px] lg:w-2/5 lg:pt-0 xl:w-2/5 xl:h-5/6 xl:transform xl:scale-75"></img>

                    <div className="flex flex-col pt-5 text-center sm:absolute lg:pb-0 lg:w-2/6 lg:pr-24 lg:mt-40 xl:pt-60 lg:left-10 xl:mt-[-300px] sm:w-1/3 md:pt-20 sm:left-5 xl:left-20 sm:pt-28">
                        <h1 className="lg:text-4xl sm:text-3xl mb-[-13px] sm:mb-0 xl:text-5xl">Michelle Tran</h1>
                        <label className=" text-gray-300 lg:text-lg sm:text-xs text-[10px] mb-[-5px]">Managing Partner</label>
                        <p className="text-[10px] lg:text-lg lg:w-auto sm:text-sm sm:pt-3 lg:pt-10 md:text-base w-full leading-5 mb-[-5px] xl:text-xl">
                        Michelle boasts over a decade of profound expertise in the realm of food and beverage, underpinned by a steadfast
                         commitment to the principles of hospitality. Her dedication to the art of menu creation is equaled only by her 
                         unwavering prioritization of elevating the guest experience. Michelle's specialization lies in the intricate domains 
                         of business operations and strategic marketing, culminating in the establishment of Warm Hospitality—an entity dedicated 
                         to empowering businesses in their pursuit of profit maximization, the creation of comprehensive hospitality training 
                         materials, the refinement of operational processes, and the nurturing of culinary excellence. Having diligently cultivated an extensive network of industry peers and experts over the years, Michelle is uniquely positioned to assist her clients in surmounting operational challenges and strategically capitalizing on a spectrum of creative possibilities, all while adhering to the highest standards of professionalism and excellence. </p>
                    </div>
                    <div className="flex flex-col pt-5 text-center sm:absolute lg:right-5 lg:pl-24 lg:pb-0 lg:w-2-6 sm:w-1/3 lg:mt-40 xl:mt-[-280px] sm:right-5 xl:pt-0 sm:pt-28 md:pt-20 xl:right-20">
                        <h1 className="lg:text-4xl sm:text-3xl mb-[-13px] sm:mb-0 xl:text-5xl">Doris Calderon</h1>
                        <label className=" text-gray-300 lg:text-lg sm:text-xs text-[10px] mb-[-5px]">Mannaging Partner</label>
                        <p className="text-[10px] lg:text-lg lg:w-auto sm:text-sm sm:pt-3 lg:pt-10 md:text-base w-full xl:mx-0 leading-5 mb-[-5px] xl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae rerum 
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