import React, { Component } from "react";
import { MyContext } from "./name1";
import { StateContext} from "./name1";
import { TextContext } from "./name1";

class App extends Component{
    constructor(){
        super();
       
    }

    render(){
        return(
            <StateContext>
                <TextContext.Provider value={{ test: 'Ramu'}}>
                <div>
                    <p>
                        something is in output shown
                    </p>
            
                </div>
                </TextContext.Provider>
            </StateContext>
        )
    }
    
}