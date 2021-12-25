import React from "react";

export default function Ramu(props){
    return(
        <div>
            <h2 style={{color: "lightblue"}}>Addmision Form</h2>
            
            <div><label> Id: {props.name}</label></div>
            <div><label> User_Id: {props.fathername}</label></div>
            <div><label> Title: {props.mothername}</label></div>
            <div><label> Due_On: {props.address}</label></div>
            
            
        </div>
    );
}