import React from "react";
import College from "./college";
import Lecturer from "./lecturer";
import University from "./university";

export const MyContext = React.createContext({});

export default function Tamilnadu(){
    return(
        <MyContext.Provider value={{university1:"anna",university2:"bharathiyar", 
    college1:"vptc", college2:"sptc", 
    lecturer1:"hod", lecturer2:"AsstPrf",
    student:"raja", student1:"mohan"}}>
  
<div>
<University/>
<Lecturer/>
<College/>
</div>    
    </MyContext.Provider>
    );
}

