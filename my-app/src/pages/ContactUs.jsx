import React, {useState, useRef}  from "react"
import emailjs from '@emailjs/browser'

const Result = () => {
    return (
        <p>Your message has been successfully sent!</p>
    )
}

const ContactUs = () => {
    const [ data, setData ] = useState({name:"", lastName:"", email:"", phone:"", message:""})
    const [ result, showResult ] = useState(false)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData({...data, [name]:value})
    }

    const sendMail = (e) => { //EmailJS documentation
        e.preventDefault()

        emailjs
        .sendForm('service_0bd37pt', 'template_sasqli3', e.target, 'iauEh19za_KMIe1hP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setData("")
        setData({message:""})
        showResult(true)
    };

    //hide successful submission

    setTimeout(() => {
        showResult(false)
    }, 10000)

    return (
    <div className="flex flex-col items-center justify-center h-screen text-3xl text-center">
        <h1 className="text-5xl text-black lg:pt-80">Contact <span className="text-black">Us</span></h1>
        <form className="" method="post" onSubmit={sendMail}>
            <div className="flex justify-between ">
                <input className="flex p-5 m-5 text-lg border-2 border-black border-solid" 
                    type='text' name='name' id="" onChange={handleChange} value={data.name} placeholder="First name" required/>
                <input className="w-full p-5 m-5 text-lg border-2 border-black border-solid" 
                type="text" name="lastName" id="" onChange={handleChange} value={data.lastName} placeholder="Last name"></input>
            </div>
            <input className="flex w-6/12 p-5 m-5 text-lg border-2 border-black border-solid" 
                type='email' name='email' id="" onChange={handleChange} value={data.email} placeholder="example@gmail.com"/>
            <input className="flex w-6/12 p-5 m-5 text-lg border-2 border-black border-solid" 
                type='phone' name='phone' id="" onChange={handleChange} value={data.phone} placeholder="+1 (xxx)-xxx-xxxx"/>
            <textarea className="flex w-6/12 p-5 m-5 text-lg border-2 border-black border-solid" 
                name='message' id='' cols='30' rows='10' onChange={handleChange} value={data.message} placeholder="Enter message here..."/>
            <button className="flex content-center text-lg text-black bg-cyan-500" type='submit'>Send</button>
            <h2 className= "pt-5 text-lg">{result ? <Result/> : null}</h2> 
        </form>  
    </div>
    )
}

export default ContactUs