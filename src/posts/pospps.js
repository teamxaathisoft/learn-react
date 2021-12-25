import React from "react";

export default function Sri(props){
    return(
        <div>
            <h2 style={{color: "lightgreen"}}>User Information</h2>

            <label> id: {props.id}</label>
            <label> user_id: {props.user_id}</label>
            <label> title: {props.title}</label>
            
            
        </div>
    );
}