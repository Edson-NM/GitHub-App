import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../Components/Custom/Button/Button';

//COMPONENTS
import GitHubUser from '../../Components/Custom/GitHubUser/GitHubUser';
import Loader from '../../Components/Custom/Loader/Loader';

//STYLES
import "./Followers.styles.css"

const Followers = () => {
    //HOOKS

        //Params
        const { user } = useParams();
        // console.log(user);

    //State
        const [dataFollowers, setDataFollowers] = useState([]); 
        const [loader, setLoader] = useState(false);
    //Effect
        useEffect (() => {
            setLoader(true)
            const handleFetchFollowers = async () => {
                const response = await fetch (`https://api.github.com/users/${user}/followers`);
                const result = await response.json();
                setDataFollowers(result);
            }
            handleFetchFollowers();
            setLoader(false)
        }, [user]);

    return (
        <div>
            {
                loader && <Loader/>
            }

            <Button/>
    

            {
                dataFollowers?.map(data => (
                        <GitHubUser
                            avatar={data?.avatar_url}
                            github={data?.html_url}
                            github_name={data?.login}
                            public_repos={data?.public_repos}
                            id={data?.id}
                            />
                            ))
                        }
        </div>
    );
};

export default Followers;