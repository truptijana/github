import React,{useContext, useEffect, useState} from 'react'
import { ContextApiProvider } from './ContextApi'
import './Drop.css'



const Drop = () => {
let{ make,state,setState} = useContext(ContextApiProvider);


useEffect(() => {
    let fetchapi = () => {
        fetch("https://api.github.com/users")
        .then(data => data.json())

        .then(result =>setState(result))
        .catch(error=> console.log(error));
    };
    fetchapi();
},[]);

return(
    <>

    {make == "" ||(
        <div className='drop'>
            {
                state
                .filter(val => {
                    if(make == "") return false;
                    return val.login.includes(make);
                })
                .map(cobi => {
                    let {login,html_url} = cobi;
                    return(
                        <ul>
                            <span className='btn'>
                            { 
                            
                            <li onClick={e => {
                            
                            }}>
                                
                                 <span>{login}</span> 
                                 
                                <button>
                                <a href={html_url}>Login</a>
                            </button>
                            
                            </li> }
                            </span>
                        </ul>
                        
                    )
                })
            }

        </div>
    )}
    </>
)
        }

export default Drop;
