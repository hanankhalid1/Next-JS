"use client"
import { useState } from "react";
import Button from "../button/button";
export default function CounterSection(){
    const studentArray: string[] = ["Hanan Khalid", "Khubaib Khalil", "Umer Sufian", "Ali Husnain", "Ahamd Umer", "Haris", "Haroon Javed", "Usman Javed"  ,"Abdul Majid " , "Rana Ahamad" , "Abdul Ahad" , "M Abdullah" , "Hmaza Gujjar" , "Aaniq Farooq"];

    const [currentName, setCurrentName] = useState(studentArray[0]);
    
    const onNextClick = () => {
        setCurrentName(prevName => prevName === studentArray[studentArray.length - 1] ? studentArray[0] : studentArray[studentArray.indexOf(prevName) + 1]);
    };
    
    const onPreviousClick = () => {
        setCurrentName(prevName => prevName === studentArray[0] ? studentArray[studentArray.length - 1] : studentArray[studentArray.indexOf(prevName) - 1]);
    };
    

 return(
        <div>
            <Button title = "Next" onClicked={onNextClick}/>
              
              <div className="text-white font-sans text-2xl mt-5 ml-4">
                {currentName}
              </div>
             <br /> <br />
            <Button title = "Previous" onClicked={onPreviousClick}/>
        </div>
    )
}