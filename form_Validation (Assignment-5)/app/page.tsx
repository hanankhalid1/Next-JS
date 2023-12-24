import Image from 'next/image'
import Navbar from './components/navbar/navbar'
export default function Home() {
  return (
   <>
  <Navbar/>
  <h1 className="text-center text-4xl font-bold font-serif mt-3">Main Page</h1>
    </>
  )
}
