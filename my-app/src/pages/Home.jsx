import React, {useState} from "react";
import Logo from "../Images/Logo.png"
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const Home = () => {
    const [ selectedPage, setSelectedPage ] = useState()
    const navigate = useNavigate()
    return (
        <div className="fixed w-screen h-screen bg-secondary-500  drop-shadow-xl">
            <img
              alt="logo"
              src={Logo}
              onClick={() => navigate('/')}
              className="cursor-pointer"
            />
            <Link
              to="/"
              onClick={() => setSelectedPage('home')}
              className={`${
                selectedPage === 'home'
                  ? 'text-tertiary-500'
                  : 'text-primary-500'
              } hover:text-opacity-75`}
            ></Link>
        </div>
    )
}

export default Home