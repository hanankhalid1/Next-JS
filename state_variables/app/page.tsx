"use client"
import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Button from "./components/button/button";
import ButtionSection from "./components/buttonSection/buttonSection";

export default function Home() {
 
  return (
    <div className="text-white ">
      <Navbar />
      <section>
        <div>
        <h1 className="flex justify-center text-5xl font-bold pt-20 font-serif text-amber-400">Our Pride Students</h1>
        </div>
        <div className="flex font-serif">
        <div className="p-2 m-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis natus praesentium necessitatibus obcaecati quisquam ducimus beatae tenetur assumenda vero culpa eius itaque, iste vitae maiores illo suscipit voluptas mollitia, quam dolorem eveniet libero tempore recusandae eos. Laborum aperiam accusamus consequuntur consequatur dicta quidem! Placeat tenetur nihil nulla debitis ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis natus praesentium necessitatibus obcaecati quisquam ducimus beatae tenetur assumenda vero culpa eius itaque, iste vitae maiores illo suscipit voluptas mollitia, quam dolorem eveniet libero tempore recusandae eos. Laborum aperiam accusamus consequuntur consequatur dicta quidem! Placeat tenetur nihil nulla debitis ab!</p>
        </div>
        <div className="p-2 m-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis natus praesentium necessitatibus obcaecati quisquam ducimus beatae tenetur assumenda vero culpa eius itaque, iste vitae maiores illo suscipit voluptas mollitia, quam dolorem eveniet libero tempore recusandae eos. Laborum aperiam accusamus consequuntur consequatur dicta quidem! Placeat tenetur nihil nulla debitis ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis natus praesentium necessitatibus obcaecati quisquam ducimus beatae tenetur assumenda vero culpa eius itaque, iste vitae maiores illo suscipit voluptas mollitia, quam dolorem eveniet libero tempore recusandae eos. Laborum aperiam accusamus consequuntur consequatur dicta quidem! Placeat tenetur nihil nulla debitis ab!</p>
        </div>
        </div>
       <div className="flex justify-center m-2">
      <ButtionSection/>
       </div>
      </section>
    </div>
  );
}
