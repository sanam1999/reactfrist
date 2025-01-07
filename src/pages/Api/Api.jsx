import React, { useState, useEffect } from "react";

import Axios from "axios"; 


function Api() {
    
    const [catfaact, changechat] = useState("")
    const get = (()=>{
        Axios.get("https://catfact.ninja/fact?max_length=140").then((res)=>{
            changechat(res.data.fact)
        })
    })

    useEffect(()=>{
        Axios.get("https://catfact.ninja/fact?max_length=140").then((res)=>{
          changechat(res.data.fact)
        })
      },[])  // 1


    const [name, getname] = useState("")
    const [age, setname] = useState("")

const storename = ((e)=>{
    getname(e.target.value)
})
    const getinfo = (()=>{

        Axios.get(`https://api.agify.io/?name=${name}`).then((req)=>{
            setname(` your ${req.data.age} years old`)
        })

    }) // 2

const [text, changetext] = useState("")
const [error, setError] = useState(false);

const fatchreques = ((e)=>{
    Axios.get(`https://api.agify.io/?name=${e.target.innerText}`).then((req)=>{
        changetext(req.data.age)
    }).catch((ee)=>{
      changetext(ee.message)
        setError(true); 
    })
    
    
})


  return (
     <>
 <button onClick={get}>
        Get fact
      </button>
    <p>{catfaact}</p> 
    <hr />
 <input type="text" onChange={storename} placeholder="enter your name" />


 <button onClick={getinfo}>fatch age   </button>
   <p>  {age}  </p> 



<hr />

    

 <button onClick={fatchreques}>Party</button>
 <button onClick={fatchreques}>Family</button>
 <button onClick={fatchreques}>Office</button>
<p className={ error ? "denger": ""} >{text}</p>



</>

  );
}

export default Api;
