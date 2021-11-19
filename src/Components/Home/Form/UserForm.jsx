import React from 'react';

const UserForm = ({handleUserName, handleSearchValue, value}) => {
    return (
        <div>
            <form onSubmit={(e) => handleSearchValue(e)} className="mt-6">
                <input 
                type="text" 
                onChange={({target}) => handleUserName(target)} 
                required
                value={value}
                placeholder="Type GitHub user here"
                className="border-2 rounded-l p-1 w-3/5 text-center lg:w-2/5" 
                />

                <input 
                type="submit" 
                value="Search" 
                className="border-2 border-black border-l-0 rounded-r w-1/5 p-1 bg-github_card_line2 text-white lg:w-1/12 hover:bg-github_text2 transition-all duration-300 ease-linear"
                />
            </form>
        </div>
    );
};

export default UserForm;