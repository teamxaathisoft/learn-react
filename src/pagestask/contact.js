import { React } from "react";
import Api from "../component/Api";
import PropsMethode from "../Revision/propsmethode";
export default function Contact(){
    return(
        <div>
        <h1>Contact</h1>
        <p>This is a Contack page</p>
        <Api></Api>

        <div>
        <PropsMethode></PropsMethode>
        </div>
        </div>
    )
}