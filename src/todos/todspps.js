import React from "react";

export default function Ramu(props){
    return(
        <div>
            <h2 style={{color: "lightblue"}}>User Information</h2>

            <div><label> Id: {props.id}</label></div>
            <div><label> User_Id: {props.user_id}</label></div>
            <div><label> Title: {props.title}</label></div>
            <div><label> Due_On: {props.due_on}</label></div>
            
            
        </div>
    );
}