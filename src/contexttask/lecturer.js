import React from "react";
import {MyContext} from "./tamilnadu";


export default function Lecturer()

{
    debugger;
   // var uni = this.context;
    return (
        <MyContext.Consumer>
          {(theme) => (
            
                  <span>{theme.lecturer2}</span>
              
          )}
        </MyContext.Consumer>
      );

}

