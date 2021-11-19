import React, { useState } from 'react';

//COMPONENTS
import UserForm from '../../Components/Home/Form/UserForm';
import GitHubUser from '../../Components/Custom/GitHubUser/GitHubUser';
import Loader from '../../Components/Custom/Loader/Loader';
import NotFound from '../../Components/Custom/NotFound/NotFound';
import Button from '../../Components/Custom/Button/Button';


const Home = () => {

    //HOOKS

        //State
        const [userName, setUserName] = useState("");
        const [githubDataApi, setGithubDataApi] = useState(null);
        const [loader, setLoader] = useState(false);
        const [error, setError] = useState("");
        const [value, setValue] = useState ("");

    //FUNCTIONS

        const handleClear = () => {
            setValue("");
            setGithubDataApi(null);
        }

        const handleReset = () => {
            setValue("");
            setUserName("");
            setError("");

        }

        const handleUserName = ({value}) => {
            setUserName(value);
            setValue(value);
        };

        const handleSearchValue = async (e) => {
            e.preventDefault();
            setLoader(true);
            setGithubDataApi(null);
            const API = `https://api.github.com/users/${userName}`
            try {
                const response = await fetch(API);
                const result = await response.json();
                    if(result.message === "Not Found"){
                        setError(result)
                    }else {
                        setGithubDataApi(result);
                    }
            } catch (error) {
                console.log(error);
            }
            setLoader(false)
        }

    return (
        <div>

            <UserForm
                handleUserName={handleUserName}
                handleSearchValue={handleSearchValue}
                value={value}
                />

            {githubDataApi && <Button handleClear={handleClear}/>}

            { loader && <Loader/> }

            {
                githubDataApi ? (
                    <GitHubUser
                        avatar={githubDataApi?.avatar_url}
                        github_name={githubDataApi?.login}
                        github={githubDataApi?.html_url}
                        public_repos={githubDataApi?.public_repos}
                        followers={githubDataApi?.followers}
                        following={githubDataApi?.following}
                        bio={githubDataApi?.bio}
                    />
                ) : error.message === "Not Found" && (
                    <NotFound handleReset={handleReset}/>
                ) 
            }

            
        </div>
    );
};

export default Home;