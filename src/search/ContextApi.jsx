import React,{Children,createContext,useState} from 'react'
export const ContextApiProvider = createContext();


const ContextApi = ({children}) => {
    const [make,setMake] = useState("");
    const [state,setState] = useState([]);

    let handleSubmit = e =>{
        e.preventDefault();  
        console.log(make);
    }

  return (
    <ContextApiProvider.Provider
        value= {{make,setMake,handleSubmit,state,setState}}>
        {children}
    </ContextApiProvider.Provider>
  );
};

export default ContextApi;
