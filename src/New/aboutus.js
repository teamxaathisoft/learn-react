import React from 'react';
import Comment from "../comments/comfun";


export default function Aboutus() {
    return (
        <div>
            <h1 style={{color: "red"}}>Aboutus</h1>
            <p>
                this is a Aboutus page.
            </p>
            
            <div>
                <Comment/>
            </div>
          
        </div>
    )
}