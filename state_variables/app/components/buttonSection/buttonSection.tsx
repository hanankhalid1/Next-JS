"use client"
import Button from "../button/button";
export default function ButtionSection(){
    const onclick = () =>{
        alert("Button clicked from main page!!!");
      }
    return(
        <div>
            <Button title="Click Here" onClicked={onclick} />
        </div>
    )
}