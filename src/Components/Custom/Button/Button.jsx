import React from 'react';
import { useHistory } from 'react-router';

//STYLES
import "./Button.styles.css"

const Button = ({handleClear}) => {

    const history = useHistory();

    const handlehistory = () => {
        history.goBack()
        // console.log(history.goBack);
    }
    const handleGoHome = () => {
        history.push("/")
    }

    return (
        <div className=" mt-6">
           {
            handleClear ? (
                <button className="button-card bg-github_card_followers rounded-md text-github_text2 text-sm font-semibold w-1/6 h-8 lg:w-1/12 hover:bg-github_card_followers2 transition-all duration-300 ease-linear hover:text-white" onClick={handleClear} >Clear</button> 
            ) : (
                <div>
                    <button className="followers-repo__card mr-2 bg-github_card_followers rounded-md text-github_text2 text-sm font-semibold w-1/5 h-8 lg:w-1/12 hover:bg-github_card_followers2 transition-all duration-300 ease-linear hover:text-white" onClick={handlehistory} >Go Back</button>
                    <button className="followers-repo__card ml-2 bg-github_card_followers rounded-md text-github_text2 text-sm font-semibold w-1/6 h-8 lg:w-1/12 hover:bg-github_card_followers2 transition-all duration-300 ease-linear hover:text-white" onClick={handleGoHome} >Home</button>
                </div>
            )


           }
        </div>
    );
};

export default Button;