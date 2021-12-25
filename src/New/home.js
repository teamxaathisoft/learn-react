import React from 'react';
import Form from "../myform";
import GetDAta from '../newtask/apigetdata';



export default function Home(){
    return(
        <div>
            <h1>Home</h1>
            <p>
                this is a home page.
            </p>
            <GetDAta></GetDAta>
            <div>
            </div>
        </div>
    )
}