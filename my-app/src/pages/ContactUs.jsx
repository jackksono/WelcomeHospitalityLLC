import React, {useState, useRef}  from "react"
import emailjs from '@emailjs/browser'

const Result = () => {
    return (
        <p>Your message has been successfully sent!</p>
    )
}

const ContactUs = () => {
    const [ data, setData ] = useState({name:"", email:"", phone:"", message:""})
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
        showResult(true)
    };

    //hide successful submission

    setTimeout(() => {
        showResult(false)
    }, 10000)

    return (
    <div className="pt-20 pl-10 text-3xl">
        <form className="" method="post" onSubmit={sendMail}>
            <h1 className="text-red-500 pl-10 text-7xl">Contact <span className="text-black">Here</span></h1>
            <input className="m-5 w-6/12 p-5 flex border-solid border-2 border-black text-lg" 
                type='text' name='name' id="" onChange={handleChange} value={data.name} placeholder="Enter name"/>
            <input className="m-5 w-6/12 p-5 flex border-solid border-2 border-black text-lg" 
                type='email' name='email' id="" onChange={handleChange} value={data.email} placeholder="example@gmail.com"/>
            <input className="m-5 w-6/12 p-5 flex border-solid border-2 border-black text-lg" 
                type='phone' name='phone' id="" onChange={handleChange} value={data.phone} placeholder="+1 (xxx)-xxx-xxxx"/>
            <textarea className="border-solid border-2 border-black m-5 w-6/12 p-5 flex border-solid text-lg" 
                name='message' id='' cols='30' rows='10' onChange={handleChange} value={data.message} placeholder="Enter message here..."/>
            <button className=" flex content-center text-lg bg-cyan-500 text-black" type='submit'>Send</button>
            <h2 className= "pt-5 text-lg">{result ? <Result/> : null}</h2> 
        </form>  
    </div>
    )
}

export default ContactUs