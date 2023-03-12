import { hover } from "@testing-library/user-event/dist/hover";
import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmployeeFormReducer, EmployeeFormState } from "../reducers/employee-form-reducer";
import { EmployeeActions, EmployeeState } from "../reducers/employee-reducer";

export function Main(){

    const initialState: EmployeeFormState = {
        id: "",
        name: "",
        location: "",
        email: "",
        phonenumber: ""
    }

    const [FormState, dispatchForm] = useReducer(EmployeeFormReducer, initialState);
    const sendDispatch = useDispatch()<EmployeeActions>
    const selector = useSelector((store: EmployeeState) => store)

    useEffect(()=>{ // use effect for rest gets/ constant display
      
        (async ()=>{
            
            await sendDispatch({type: "REQUEST_GET_ALL_EMPLOYEES"}); // await since it rreturns a promise
            
        })();
        
      },[]);
    const [isHover, setHover] = useState(false);
    return (<>
        {/* Create / edit*/}
        <div style={{display:"flex", width:"100%", height:"500vh", backgroundColor:"lightblue", justifyContent:"center", alignItems:"baseline"}}>
            <ul style={{flexDirection: "column" , width: "20%", height: "10%", justifyContent: "center", padding: "10px", position: "relative", backgroundColor: "lightblue"}}>
                <li style={{margin: "10px"}}>
                    <label>Name</label>
                    <input onChange={(e)=> dispatchForm({type: "UPDATE_NAME",payload: e.target.value})}></input>
                </li>
                <li style={{margin: "10px"}}>
                    <label>Location</label>
                    <input onChange={(e)=> dispatchForm({type: "UPDATE_LOCATION",payload: e.target.value})}></input>
                </li>
                <li style={{margin: "10px"}}>
                    <label>Email</label>
                    <input onChange={(e)=> dispatchForm({type: "UPDATE_EMAIL",payload: e.target.value})}></input>
                </li>
                <li style={{margin: "10px"}}>
                    <label>Phonenumber</label>
                    <input onChange={(e)=> dispatchForm({type: "UPDATE_PHONENUMBER",payload: e.target.value})}></input>
                </li>
                
            </ul>
            <button onClick={()=>sendDispatch({type: "REQUEST_CREATE_EMPLOYEE", payload: FormState})}>create</button>
            <button onClick={()=>sendDispatch({type: "REQUEST_EDIT_EMPLOYEE", payload: FormState})}>edit</button>

            <div>
                <h1>EMPLOYEES</h1>
                <ul>
                    {selector.list.map(
                        (item)=> <li key = {item.name}>

                            <ul onMouseEnter= {()=> setHover(true)}
                            onMouseLeave= {()=> setHover(false)}
                            style={{backgroundColor: isHover ? "red": ""}}>
                                <li>{item.name}</li>
                                <li>{item.location}</li>
                                <li>{item.email}</li>
                                <li>{item.phonenumber}</li>
                            </ul>
                            
                            <button onClick={()=> sendDispatch({type: "REQUEST_DELETE_EMPLOYEE", payload:item.id})}>delete</button></li>
                    )}
                </ul>
            </div>
        </div>


    </>
    );
}