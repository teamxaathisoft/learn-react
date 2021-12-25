import React, { Component } from 'react';
import './index.css';
import IncrementSample from './component/context';
import Test from './component/test';
import SchoolInformation from './task/schoolinformation';

export default  function App() {
    // constructor() {
    //     super();
    // }
    // render() {
    //     return (<div>
    //         <h2>Increment sample</h2>
    //         <IncrementSample>
    //             <Test></Test>
    //         </IncrementSample>
    //     </div>);
    // }
    return(    <div>
        <SchoolInformation></SchoolInformation>
    </div>
    );
        
    
}