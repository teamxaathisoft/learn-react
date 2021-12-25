import React from "react";

export default function Ram(props){
    return(
        <div>
            <h2 style={{color: "gray"}}>User Information</h2>

            <div><label> Id: {props.id}</label></div>
            <div><label> Name: {props.name}</label></div>
            <div><label> Post_Id: {props.post_id}</label></div>
            <div><label> Email: {props.email}</label></div>
            
        </div>
    );
}
