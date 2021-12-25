import React from 'react';
import Todos from "../todos/todsfun";
import Form from "../myform";


export default function Detail() {
    return (
        <div>
            <h1 style={{color: "orange"}}>Detail</h1>
            <p>
                this is a Detail page.
            </p>
            
            <div>
                <Todos/>
            </div>

            <div>
                <Form/>
            </div>
           
        </div>
    )
}