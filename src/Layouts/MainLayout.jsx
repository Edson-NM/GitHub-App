import React from 'react';

//COMPONENTS
import Header from '../Components/Custom/Header/Header';

const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

export default MainLayout;