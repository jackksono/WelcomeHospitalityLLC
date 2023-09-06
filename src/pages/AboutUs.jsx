import React from "react"

import TeamPicture from '../Images/TeamPictures/TeamImage.jpg'
import AboutUsIMG from '../Images/WebImages/AboutUsImage.jpg'
const AboutUs = () => {

    return (
        <>
        <div className="w-screen overflow-auto bg-stone-900">
            <div className='w-screen h-screen overflow-auto pt-28 bg-stone-900'>
                <div className='relative z-0 flex items-center justify-center w-screen h-full'>
                    <img className='object-cover w-screen h-3/4' src={AboutUsIMG} alt='serviceImage'></img>
                    <h1 className='absolute text-6xl text-white sm:pt-80 font-Italiana sm:left-60'>About Us</h1>
                </div>
            </div>
            <div className="flex items-center justify-center pt-12 overflow-auto text-3xl text-center lg:-z-0 lg:h-3/4 bg-stone-900 font-Italiana">
                <div className="flex flex-col">
                    <h1 className="text-white underline lg:text-8xl sm:text-4xl lg:mt-0">WHO WE ARE</h1>
                    <p className="pt-4 mx-5 text-white lg:text-lg xl:leading-8 xl:text-xl md:text-[20px] sm:text-[15px] text-xs sm:mx-5 leading-5 lg:pt-7 lg:m-10 sm:leading-[2rem] xl:mx-40">
                        Welcome to Warm Hospitality, where passion, expertise, and creativity converge to redefine the world of hospitality. 
                        With a shared love for the art of hospitality and a wealth of experience in food and beverage, we bring a unique blend of 
                        culinary mastery and event planning finesse to the forefront. Our journey through the culinary world has instilled in us 
                        an unwavering commitment to excellence, a deep appreciation for flavors, and an understanding of the power of impeccable 
                        service. Now, as we embark on this exciting venture, we are poised to revolutionize the industry. Our dedication to 
                        crafting unforgettable experiences shines through in every aspect of our work, from concierge services that anticipate 
                        your every need to event planning that turns dreams into reality. Join us on a journey where hospitality knows no bounds, 
                        guided by expertise and passion
                    </p>
                </div>
            </div>
;
            {/* <div className="flex justify-center min-h-screen w-screen text-3xl lg:z-10 text-center mt-[-50px] sm:mt-[-100px] lg:h-auto bg-stone-900 font-Italiana">
                <div className="flex flex-col items-center justify-center pt-5 text-center text-white sm:text-4xl lg:text-8xl ">
                    <h1 className="underline">MEET THE TEAM</h1>

                    <img src={TeamPicture} alt="TeamPicture" className="object-cover w-3/4 mt-5 rounded-lg shadow-sm sm:w-1/4 sm:pt-10 sm:mt-0 lg:mt-16 xl:mt-[-50px] lg:w-2/5 lg:pt-0 xl:w-2/5 xl:h-5/6 xl:transform xl:scale-75"></img>

                    <div className="flex flex-col pt-5 text-center sm:absolute lg:pb-0 lg:w-2/6 lg:pr-24 lg:mt-40 lg:left-10 sm:w-1/3 md:pt-20 sm:left-5 xl:left-20 sm:pt-28">
                        <h1 className="lg:text-4xl sm:text-3xl mb-[-13px] sm:mb-0 xl:text-5xl">Michelle Tran</h1>
                        <label className=" text-gray-300 lg:text-lg sm:text-xs text-[10px] mb-[-5px]">Managing Partner</label>
                        <p className="text-[10px] lg:w-auto sm:text-sm sm:pt-3 lg:pt-10 md:text-base w-full leading-5 mb-[-5px] ">
                        Michelle boasts over a decade of profound expertise in the realm of food and beverage, underpinned by a steadfast
                         commitment to the principles of hospitality. Her dedication to the art of menu creation is equaled only by her 
                         unwavering prioritization of elevating the guest experience. Michelle's specialization lies in the intricate domains 
                         of business operations and strategic marketing, culminating in the establishment of Warm Hospitality—an entity dedicated 
                         to empowering businesses in their pursuit of profit maximization, the creation of comprehensive hospitality training 
                         materials, the refinement of operational processes, and the nurturing of culinary excellence. Having diligently cultivated an extensive network of industry peers and experts over the years, Michelle is uniquely positioned to assist her clients in surmounting operational challenges and strategically capitalizing on a spectrum of creative possibilities, all while adhering to the highest standards of professionalism and excellence. </p>
                    </div>
                    <div className="flex flex-col pt-5 text-center sm:absolute lg:right-5 lg:pl-24 lg:pb-0 lg:w-2-6 sm:w-1/3 lg:mt-40 sm:right-5 xl:pt-0 sm:pt-28 md:pt-20 xl:right-20">
                        <h1 className="lg:text-4xl sm:text-3xl mb-[-13px] sm:mb-0 xl:text-5xl">Doris Calderon</h1>
                        <label className=" text-gray-300 lg:text-lg sm:text-xs text-[10px] mb-[-5px]">Mannaging Partner</label>
                        <p className="text-[10px] lg:w-auto sm:text-sm sm:pt-3 lg:pt-10 md:text-base w-full leading-5 mb-[-5px] ">
                            Doris commenced her remarkable journey in the hospitality sector at the esteemed Wynn Las Vegas in 2016, where she was exposed to the pinnacle
                             of service excellence. This transformative experience ignited her profound passion for the dynamic realm of hospitality. Doris proceeded to 
                             dedicate several years to honing her expertise in Food and Beverage administration at Wynn, and in 2019, she embarked on an impactful role as 
                             part of the opening team for Resorts World Las Vegas. During this transformative period, Doris diligently pursued her
                              academic aspirations, culminating in the attainment of her bachelor's degree in Project and Business Management. Her
                               commitment to excellence was further showcased in her role as General Manager at the renowned Cafe Lola, where she 
                               played a pivotal role in its operations. Doris's trajectory in the industry continues to evolve, marked by her 
                               unwavering dedication to the art of hospitality and her impressive record of contributions to operational 
                               excellence over the years.
                        </p>
                    </div>
                </div>
            </div> */}
            <div className="flex justify-center w-screen text-3xl text-center text-white sm:text-8xl lg:z-10 lg:h-auto bg-stone-900 font-Italiana">
                <h1 className="underline">MEET THE TEAM</h1>
            </div>
            <div className="grid items-center justify-center grid-cols-3">
                <div className="justify-center px-10 font-Italiana">
                    <h1 className="text-white lg:text-4xl sm:text-3xl xl:text-5xl">Michelle Tran</h1>
                    <label className=" text-gray-300 lg:text-lg sm:text-xs text-[10px] ">Managing Partner</label>
                    <p className="text-[10px] lg:w-auto sm:text-sm sm:pt-3 lg:pt-10 md:text-base w-full leading-5 text-white">
                        Michelle boasts over a decade of profound expertise in the realm of food and beverage, underpinned by a steadfast
                         commitment to the principles of hospitality. Her dedication to the art of menu creation is equaled only by her 
                         unwavering prioritization of elevating the guest experience. Michelle's specialization lies in the intricate domains 
                         of business operations and strategic marketing, culminating in the establishment of Warm Hospitality—an entity dedicated 
                         to empowering businesses in their pursuit of profit maximization, the creation of comprehensive hospitality training 
                         materials, the refinement of operational processes, and the nurturing of culinary excellence. 
                    </p>
                    <p className="text-[10px] lg:w-auto sm:text-sm sm:pt-3 lg:pt-10 md:text-base w-full leading-5 text-white">
                        Having diligently cultivated 
                        an extensive network of industry peers and experts over the years, Michelle is uniquely positioned to assist her clients in surmounting operational
                        challenges and strategically capitalizing on a spectrum of creative possibilities, all while adhering to the highest standards of professionalism and excellence. 
                    </p>
                </div>

                <img src={TeamPicture} alt="TeamPicture" className="object-cover rounded-lg shadow-sm "></img>

                <div className="justify-center px-10 font-Italiana">
                    <h1 className="text-white lg:text-4xl sm:text-3xl xl:text-5xl">Doris Calderon</h1>
                    <label className=" text-gray-300 lg:text-lg sm:text-xs text-[10px] ">Managing Partner</label>
                    <p className="text-[10px] lg:w-auto sm:text-sm sm:pt-3 lg:pt-10 md:text-base w-full leading-5 text-white">
                        Doris commenced her remarkable journey in the hospitality sector at the esteemed Wynn Las Vegas in 2016, where she was exposed to the pinnacle of service excellence.
                        This transformative experience ignited her profound passion for the dynamic realm of hospitality. Doris proceeded to dedicate several years to honing her expertise
                        in Food and Beverage administration at Wynn, and in 2019, she embarked on an impactful role as part of the opening team for Resorts World Las Vegas.
                    </p>
                    <p className="text-[10px] lg:w-auto sm:text-sm sm:pt-3 lg:pt-10 md:text-base w-full leading-5 text-white">
                        During this transformative period, Doris diligently pursued her academic aspirations, culminating in the attainment of her bachelor's degree in Project 
                        and Business Management. Her commitment to excellence was further showcased in her role as General Manager at the renowned Cafe Lola, where she played a 
                        pivotal role in its operations. Doris's trajectory in the industry continues to evolve, marked by her unwavering dedication to the art of hospitality and her 
                        impressive record of contributions to operational excellence over the years.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutUs;