import React from "react";
import {MyContext} from './tamilnadu';

export default function College()

{
    debugger;
   // var uni = this.context;
    return (
        <MyContext.Consumer>
          {(theme) => (
            
                  <span>{theme.college2}</span>
              
          )}
        </MyContext.Consumer>
      );

}