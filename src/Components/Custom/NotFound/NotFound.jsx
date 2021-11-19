import React from 'react';

const NotFound = ({handleReset}) => {
    return (
        <div className="bg-yellow rounded-md mx-auto mt-10 h-40 w-10/12 sm:w-6/12 lg:w-4/12 xl:w-3/12 flex-col justify-center items-center">
            <h2 className=" h-4/5 w-8/12 mx-auto pt-3 text-red text-base font-semibold">The user you´re attempting to search was not found. Click on reset button.</h2>
            <button className=" w-3/12 bg-github_card_line2 text-white rounded-md hover:bg-github_text2 transition-all duration-300 ease-linear" onClick={handleReset}>Reset</button>
        </div>
    );
};

export default NotFound;