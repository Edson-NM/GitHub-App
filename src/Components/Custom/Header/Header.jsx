import React from 'react';
import { Link } from 'react-router-dom';
import Images from "../../../Assets/Images" 

//STYLES
import "./Header.styles.css"

const Header = () => {
    return (
        <div className="h-24 bg-github_card flex items-center justify-center sm:justify-evenly md:justify-between">

            <h2 className="logo md:border-2 rounded-md px-2 h-1/2 my-auto text-2xl font-semibold text-white flex justify-center items-center mr-2 md:ml-10 md:text-3xl">
                <Link to="/">GitHub App</Link>
            </h2>

            <img src={Images[0]} alt="Logo de GitHub"  className=" rounded-full h-1/3 my-auto md:mr-10 md:h-1/2"/>

        </div>
    );
};

export default Header;