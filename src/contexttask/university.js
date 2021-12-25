import React from "react";
import {MyContext} from "./tamilnadu";


export default function University()

{
    debugger;
   // var uni = this.context;
    return (
        <MyContext.Consumer>
          {(theme) => (
            
                  <span>{theme.university1}</span>
              
          )}
        </MyContext.Consumer>
      );

}

