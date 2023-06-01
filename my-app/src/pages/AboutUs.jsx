import React, {useState}  from "react"
import logo from "../Images/111940791.jpg"

const AboutUs = () => {

    return (
        <>
        <div className="pt-20 bg-gray text-orange-500">
            <div className="text-7xl text-center pt-10">Meet the Team!</div>
        </div>
        <div className="pl-5 pr-20 grid grid-cols-2 w-screen flex flex-col rounded-lg overflow-hidden bg-gray shadow pt-5">
            <h1 className="text-2xl italic text-black">Michelle Tran
                <p className="flex text-lg  not-italic pt-5">
                    Michelle is the founder and CEO of Warm Hospitality LLC. Starting in Garden Groven and 
                    working her way to Vegas where she was the manager at several restauraunt establishments. She now resides in Vegas with two 
                    kids married to Executive Chef Andrew Carroll from Catch at the Aria. How many words can I write? How many words can I write?
                    How many words can I write? How many words can I write? How many words can I write? How many words can I write? How many words can I write?
                    How many words can I write? How many words can I write?
                    How many words can I write? How many words can I write? How many words can I write?How many words can I write?How many words can I write?
                    How many words can I write? How many words can I write? How many words can I write? How many words can I write?
                </p>
            </h1>
            <img className="rounded-lg h-96 shadow-xl ml-auto" src={logo} alt="MichellesIMG"></img> 
        </div>

        <div className="pl-20 pr-5 grid grid-cols-2 w-screen flex flex-col rounded-lg overflow-hidden bg-gray shadow pt-5">
            <img className="rounded-full w-96 h-96 shadow-xl" src={logo} alt="DonnasIMG"></img>
            <h1 className="text-2xl italic text-black">Donna
                <p className="flex not-italic text-lg pt-5">
                    Donna has known Michelle...
                </p>
            </h1>
        </div>

        <div className="pl-5 pr-20 grid grid-cols-2 w-screen flex flex-col rounded-lg overflow-hidden bg-gray shadow pt-5">
            <h1 className="text-xl italic text-black">Jack Sonoda
                <p className="flex not-italic text-lg pt-5 text-black">
                Hello - my name is Jack Sonoda. Previously, I was a scientist working in the research and development of new and upcoming 
                lateral flow diagnostic assays and made the change to learn and become the software engineer I am today. I have a lot of 
                experience in all aspects of the diagnostic field since my previous company was very small. Fun fact,  most of Covid-19 
                tests on the markets and the ones that were sent out by the government for free were created by me and a small team! I have 
                also had a huge contribution and involvement across many other projects involving the research and development of new and 
                upcoming diagnostic assays.
                </p>
                <p1 className="flex not-italic text-lg pt-5 text-black">
                Now, I am a full stack software engineer who likes to code applications and solve problems on a daily basis. 
                I am extremely passionate about TypeScript, React, Redux, Express, SQL, and noSQL databases when coding out large or 
                small scale applications.  I recently did a sponsored tech-talk by JEENY and Bractlet that was focused on the topic of 
                React Hooks and why I prefer them over class components. In my free time outside of coding, I enjoy many activities and hobbies such 
                as hiking, going to the beach, and competitive online games with friends. Most recently, I had the opportunity to work on an open source 
                project called Swell which is an electron desktop application used to test endpoints over multiple streaming technologies.
                </p1>

                

                
            </h1>
            <img className="w-96 h-96 rounded-full shadow-xl ml-auto" src={logo} alt="JacksIMG"></img>
        </div>
    
    </>
    )
}

export default AboutUs;