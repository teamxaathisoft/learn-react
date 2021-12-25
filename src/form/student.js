import React from "react";
import Mark from "./result";

export default function StudentList()
{
    const Student =[
        {name:'sri', age:'25', class:'x', section:'A', tamil:'85', english:'70', maths:'80', sci:'90', sst:'75'},
        {name:'ram', age:'26', class:'ix', section:'F', tamil:'95', english:'96', maths:'88', sci:'98', sst:'68'},
        {name:'srm', age:'24', class:'xi', section:'S', tamil:'65', english:'79', maths:'98', sci:'89', sst:'73'},
        {name:'ramu', age:'23', class:'x', section:'D', tamil:'75', english:'82', maths:'90', sci:'75', sst:'82'},
        {name:'rishi', age:'28', class:'ix', section:'N', tamil:'80', english:'92', maths:'79', sci:'79', sst:'86'},
        {name:'jai', age:'22', class:'iix', section:'W', tamil:'90', english:'74', maths:'82', sci:'85', sst:'89'},
        {name:'raj', age:'20', class:'iii', section:'C', tamil:'70', english:'89', maths:'95', sci:'70', sst:'90'},
        {name:'king', age:'27', class:'ii', section:'H', tamil:'85', english:'68', maths:'72', sci:'83', sst:'92'},
        {name:'jack', age:'21', class:'i', section:'O', tamil:'95', english:'87', maths:'79', sci:'77', sst:'69'},
    ]

    var StudentMark = Student.map(result =>
        {
            return(
        <Mark name={result.name} age={result.age} 
               class={result.class} section={result.section} 
               tamil={result.tamil} english={result.english} 
               maths={result.maths} sci={result.sci} 
               sst={result.sst}/>
        )
        });
        
        return (
            <div>
                <h1>
                    Student Mark list
                </h1>
                {StudentMark}
            </div>
        );
        }
        