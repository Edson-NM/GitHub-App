import React, { useState, useEffect } from 'react';

//ROUTER
import { useParams } from 'react-router';

//COMPONENTS
import GitHubUser from '../../Components/Custom/GitHubUser/GitHubUser';
import Loader from '../../Components/Custom/Loader/Loader';
import Button from '../../Components/Custom/Button/Button';

const Repositories = () => {

    //HOOKS

        //Params
        const {user} = useParams()
        // console.log(user);

        //State
            const [dataRepos, setDataRepos] = useState([]); 
            const [loader, setLoader] = useState(false);
        //Effect
            useEffect (() => {
                setDataRepos([])
                setLoader(true)
                const handleFetchFollowers = async () => {
                    const response = await fetch (`https://api.github.com/users/${user}/repos`);
                    const result = await response.json();
                    setDataRepos(result);
                }
                handleFetchFollowers();
                setLoader(false)
            }, [user]);

    return (
        <div>
            { loader && <Loader/> }

            <Button/>


            {   
                dataRepos && dataRepos.length > 0 && (
                    dataRepos.map(repos => (
                            <GitHubUser
                                repo_name={repos?.name}
                                visibility={repos?.visibility}
                                repo_url={repos?.html_url}

                            />
                        ))
                ) 
            
            }           

        </div>
    );
};

export default Repositories;