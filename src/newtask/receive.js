import React from "react";
import {MyContext} from "./apigetdata";
import MyForm from '../myform'

export default function Receive()

{

   // var uni = this.context;
    return (
        <MyContext.Consumer>
          {(data) => (
            <div>
                {
                    data.map(d=>  <MyForm  name={d.name} email={d.email} body={d.body}/>)

                }
                This is a API Titles{console.log(data)}
                
            </div>
                               
          )}
        </MyContext.Consumer>
      );

}

// need to check <p>this is trial {data.name}</p>