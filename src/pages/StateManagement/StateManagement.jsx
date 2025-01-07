import { useContext, useState } from "react";
import React  from "react";
import { Appcontex } from "../../App";
import { authantication } from '../../config/firebase';


function StateManagement() {
   const [newusername , changeusername] = useState("")
   const {setname,name} = useContext(Appcontex)
   const chaneusernaem = ((e)=>{
    if(e.target.value){
    changeusername(e.target.value)
    setname(e.target.value)
    }
   })
   const savename = (()=>{
    setname(newusername)
   })




    return (
        <>
        <input type="text" placeholder="enter you new user name" onChange={chaneusernaem} />
        <p>hello {name}</p>
        <button onClick={savename} >Save</button>

        <div>
            <p> {authantication.currentUser?.displayName} </p>
        </div>
        </>
    );
}

export default StateManagement;
