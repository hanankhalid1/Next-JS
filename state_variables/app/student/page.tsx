import CounterSection from "../components/counterSection/counterSection";
import Navbar from "../components/navbar/navbar";

export default function Student(){
    return(
        <div>
          <nav>
          <Navbar/>
          </nav>
          <section>
            <div>
            <h1 className="text-center text-3xl font-bold m-6 text-amber-400">Student Names</h1>
            </div>
            <div className="flex justify-center">
                <CounterSection/>
            </div>
          </section>
        </div>
    )
}