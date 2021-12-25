import React from 'react';
import Tamilnadu from '../contexttask/tamilnadu';
import GetDAta from '../newtask/apigetdata';

export default function NoPages() {
    return (
        <div>
            <h1 style={{color: "orange"}}>NoPages</h1>
            <p>
                this is a NoPages page.
            </p>
             <div>
                 <Tamilnadu/>
                 <GetDAta/>
             </div>
             <div>
                
             </div>
            
        </div>
    )
}
