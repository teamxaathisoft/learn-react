import React, {Component} from "react";

export const MyContext = React.createContext({});
export const TextContext =React.createContext();

export class StateContext extends Component {
    constructor(){
        super();
        this.state = {
            name: "Sriram",
            count:1
        };
    }

    increment = ()=>{
        this.setState({count: this.state.count + 1});
    }
    decrement = ()=>{
        this.setState({count: this.state.count - 1});
    }

    render () {

           <MyContext.Provider value={{count: this.state.count, increment: this.increment,decrement: this.decrement }}>
            <div>
                <Hello cuont={this.state.count}/>
                <p> Start incrementing and decrementing </p>
            </div>
            </MyContext.Provider>
        }
    }
}

