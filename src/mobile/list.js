import React from "react";

//child
export default function Detail(props)
{
    return(
        <div>
            <div>name:{props.name}</div>
            <div>prize:{props.prize}</div>
            <div>image:{props.imagePath}</div>
            <div>
            <img src={props.imagePath} style={{width:'50px',height:'60px',position:'absolute'}}/>  
            </div>
                  </div>
    );
}

