import React from 'react';
import { Link } from 'react-router-dom';

//COMPONENTS
import NotFound from '../NotFound/NotFound';

//IMAGES
import Images from "../../../Assets/Images"

//STYLES
import "./GitHubUser.styles.css"


const GitHubUser = (props) => {

    const {

        avatar,
        github_name,
        github,
        public_repos,
        followers,
        following,
        bio,
        id,
        repo_name,
        visibility,
        repo_url

    } = props

    return (
        <div className={repo_name ? `h-72 flex justify-center items-center` : id ? `h-72 md:h-96` : `h-96`}>
            {
                github_name ? (
                    <div className={id ? "principal-card  mt-6 lg:mt-12 h-5/6 w-10/12 sm:w-8/12 lg:w-3/5 lg:h-full mx-auto flex flex-col rounded-b-md" 
                    :
                     "principal-card  mt-6 lg:mt-12 h-5/6 w-10/12 lg:w-3/5 lg:h-full mx-auto flex flex-col rounded-b-md"}>

                        <div className=" h-2/5  flex justify-end">

                            <div className=" h-1/2 lg:h-3/4 w-full bg-github_card rounded-t-md">

                                <img className="h-1/5 mt-1 pl-3 bg-github_card rounded-full sm:h-2/5" src={Images[0]} alt="Logo minitura de GitHub" />

                                <img src={avatar} alt={github} className={id ? `mx-auto mb-6 sm:ml-10 sm:mt-10 md:mt-16 lg:mt-28 xl:mt-18 xl:ml-20 rounded-full lg:rounded-md w-4/12 sm:w-3/12 lg:w-2/6 xl:w-3/12 xl:rounded-full` 
                                :
                                `mx-auto mb-6 sm:ml-10 sm:mt-16 md:mt-12 lg:mt-28 xl:mt-18 xl:ml-20 rounded-full lg:rounded-md w-4/12 sm:w-3/12 lg:w-2/6 xl:w-3/12 xl:rounded-full`} ></img>

                            </div>

                        </div>

                        <div className=" h-2/6 sm:pb-16 flex flex-col justify-center lg:justify-end items-center sm:items-end lg:p-0 sm:ml-52 lg:ml-64 xl:ml-96 sm:w-1/2 xl:w-5/12">

                            <a className={id ? `pb-0 mt-2 xsm:mt-10 text-xl font-bold text-github_text2 sm:w-full sm:text-3xl` : `pb-8 xsm:pb-2  text-xl font-bold text-github_text2 sm:w-full sm:text-3xl lg:border-b-2 lg:border-github_card_line2`} href={github} target="_blank" rel="noreferrer">{github_name}</a>

                            <p className=" text-sm text-github_text2 font-bold w-10/12 sm:w-full lg:mt-2">{bio}</p>

                        </div>

                        <div className={id ? `followers-info_card flex justify-evenly items-center h-2/12 lg:h-3/12 w-11/12 lg:w-1/2 lg:mr-14 lg:mt-8 m-auto bg-github_down2 rounded-md border-t-2 border-github_card_line pb-1` 
                        : 
                        `followers-info_card flex justify-evenly items-center h-2/12 lg:h-3/12 w-11/12 lg:w-1/2 lg:mr-14 lg:mt-8 xl:mr-22 m-auto bg-github_down2 rounded-md border-t-2 border-github_card_line pb-1`} >

                            <p className=" flex items-center h-full"><Link className=" h-full flex items-center flex-col justify-center font-bold text-github_text2 text-lg" to={`/repositories/${github_name}`} >{public_repos}<span className="text-xs">Repositories</span></Link></p>

                            <p className=" flex items-center h-full"><Link className=" h-full flex items-center flex-col justify-center font-bold text-github_text2 text-lg" to={`/followers/${github_name}`}>{followers}<span className="text-xs">Followers</span></Link></p>

                            <p className=" flex items-center flex-col justify-center h-full text-github_text2 font-bold ">{following}<span className="text-xs">Following</span></p>

                        </div>

                    </div>    
                ) : repo_name ? (
                    <div className="repos-card bg-github_card_line2 rounded-md h-4/5 w-4/5 md:w-3/5 lg:w-2/5 flex-col  justify-center items-center">
                        <div className="w-10/12 h-1/2 mx-auto pt-10">

                            <p className="border-2 rounded-sm h-3/4 flex justify-center items-center text-sm sm:text-base md:text-lg font-bold text-github_text2">{repo_name}</p>

                            <p className="flex justify-center items-center border-2 rounded-sm text-xs text-github_text2 font-semibold">Project Name</p>

                        </div>
                        <div className="h-1/2 flex justify-center items-center">

                            <p className="bg-black text-white rounded-l-md w-5/12 h-1/2 flex justify-center items-center">{visibility ===  "public" ? "Public" : "Private"}</p>

                            <a className="flex justify-center items-center border-2 rounded-r-md w-5/12 h-1/2 " href={repo_url} target="_blank" rel="noreferrer">View in GitHub.Com</a>
                            
                        </div>
                    </div>
                ) : <NotFound/>
            }
            
            
        </div>
    );
};

export default GitHubUser;