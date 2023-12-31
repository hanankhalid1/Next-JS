"use client";
import { ErrorTypes, contactInfoType,  onChnageEventType , } from "@/app/types/commonTypes";
import { FormEvent, useState } from "react";
import DisplayForm from "../displayForm/displayForm";
import Button from "../button/button";
import * as yup from "yup";




export default function FormValidation() {
  const [contactInfo, setContactInfo] = useState<contactInfoType>({
    first_name: "",
    last_name: "",
    father_name: "",
    mother_name: "",
    age: 0,
    school: "",
    college: "",
    university: "",
    email: "",
    phone: 92,
    message: "",
  });

const contactSchema  = yup.object().shape({
  first_name : yup.string().required(),
  last_name : yup.string().required(),
  father_name : yup.string().required(),
  mother_name : yup.string().required(),
 age : yup.number().positive().required().min(1).max(3),
 school : yup.string().required(),
 college : yup.string().required(),
 university : yup.string().required(),
 email : yup.string().email(),
 phone : yup.number().positive().required(),
 message : yup.string().required(),

})
const [errors , setError] = useState<contactInfoType[]>([])

  const onChangeHandler = (e: onChnageEventType) => {
    let contactDetail = {
      ...contactInfo,
      [e.target.name]: e.target.value,
    };
    setContactInfo(contactDetail);
    console.log(contactDetail);
  };
  const onSubmitHnadle = (e: FormEvent) =>{
    e.preventDefault();
  }
  const [contactList, setContactList] = useState<contactInfoType[]>([])

  const onClickHandler = async () => {
    try {
  
      await contactSchema.validate(contactInfo);
  
      let newContactList: contactInfoType[] = [...contactList, contactInfo];
      setContactList(newContactList);
      setError([]);
      setContactInfo({
        first_name: "",
        last_name: "",
        father_name: "",
        mother_name: "",
        age: 0,
        school: "",
        college: "",
        university: "",
        email: "",
        phone: 0,
        message: "",
      });
    } catch (err : any) {
      console.error(err);
      setError(err.errors);
      // console.log( "errors :" , err.errors);
      let errorElem = document.getElementById("errorID");
      errorElem.innerHTML = "Error :" + err.errors + "!";
    }
  };
  


  return (
    <div>
    <div >
      <form className="max-w-md mx-auto grid grid-cols-2 gap-4" onSubmit={onSubmitHnadle}>
        <div className="mb-4 col-span-1">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="first_name"
            name="first_name"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 col-span-1">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="last_name"
            name="last_name"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Father Name
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="father_name"
            name="father_name"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Mother Name
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="mother_name"
            name="mother_name"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Age
          </label>
          <input
            onChange={onChangeHandler}
            type="age"
            id="age"
            name="age"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            School
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="school"
            name="school"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            College
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="college"
            name="college"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            University
          </label>
          <input
            onChange={onChangeHandler}
            type="text"
            id="university"
            name="university"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4 col-span-1">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            onChange={onChangeHandler}
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 col-span-1">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone Number
          </label>
          <input
 onChange={onChangeHandler}
            type="phone"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4 col-span-2">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
          onChange={onChangeHandler}
            id="message"
            name="message"
            className="w-full px-3 py-2 border rounded-md"
            required
          ></textarea>
        </div>
        <div className="text-center items-center">
          <h1 id="errorID" className="text-red-700 font-serif font-bold"></h1>
        </div>
        <div>
          <Button  title = "submit" onClicked = {onClickHandler} />
        </div>
      </form>
      <div>
      <DisplayForm contactData={contactList}/>
      </div>
    </div>
    </div>
  );
}
