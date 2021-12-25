import React, {Component} from "react";
import { MyContext, TextContext } from "./name1";

export default (props) =>{
    return(
        <MyContext.Consumer>
        { (context) =>{
            return(
                <TextContext.Consumer>
                    {(testContext) =>{
                        return (
                            <>
                            <h1> Test Component:{ testContext.test} {context.count} {context.name}</h1>
                            <button onClick={context.increment}> Increment </button>
                            <button onClick={context.decrement}> Decrement </button>
                            </>
                        )
                    }}
                
                </TextContext.Consumer>
            )
        }
        }
        </MyContext.Consumer>
    )
}
