import Marquee from "react-fast-marquee";
import ScrollCard from "@/components/ScrollCard";
import { Film, Tractor } from 'lucide-react';

import Image from "next/image"
interface Props{
tagId : string
}
const OurStory = ({tagId}:Props) => {
  const name = "AGRIMEET"
  return (
    <section className="w-screen h-[100vh] bg-[#021500] text-white font-poppins flex-col relative pt-14" id={tagId}>
    <span className="absolute text-8xl font-bold text-white/5 z-0  ">{name}</span>
    <Marquee  pauseOnHover={true} style={{position:"absolute",top:"50%",overflowY:"hidden",transform:"translateY(-40%)",width:"100%",height:"fit-content",zIndex:"10"}} speed={15} autoFill={true}>
    <ScrollCard path={"/farmer-with-goat.png"}/>
    <ScrollCard path={"/farmer-with-goats.png"}/>
    <ScrollCard path={"/cows.png"}/>
    <ScrollCard path={"/farm.png"}/>
   </Marquee>
    <div className="flex justify-items-center items-top font-bold text-6xl h-1/2 px-20 py-8 z-10 relative">
    <p className="text-center mx-auto w-fit text-7xl">Coexistence between  <br/> farmers and pastoralists</p>
    <Tractor className="text-white/50 absolute top-1/3 right-20" size={80}/>
    <span className="absolute top-1/3 left-1/4 text-9xl font-bold text-white/5 z-0">{name}</span>
    <span className="absolute top-3/4 right-1 text-8xl font-bold text-white/5 z-0">{name}</span>
   </div> 
  
    <div className="h-1/2 w-full bg-[#D6F9C6] text-[#021500] py-20 px-20 relative">
    <div className="mt-10"></div>
    <Film className="text-[#224103] absolute right-10 top-[35%]" size={50}/>
    <Film className="text-[#224103]/10 absolute top-1/2 left-1/2 z-0" size={100}/>
    <Film className="text-[#224103]/5  absolute bottom-10 left-20 z-0" size={65}/>
    <span className="bg-[#224103] text-white font-bold p-2 rounded-3xl mt-10">Our story</span>
    <p className="mt-5 text-xl z-20">
    We aim to develop a mobile application to facilitate the peaceful coexistence of Kenyan pastoralists and crop farmers by addressing resource conflicts. The app will provide real-time updates on pasture availability, weather forecasts, and GPS-enabled tracking of animals, empowering pastoralists to make informed decisions. By fostering dialogue and providing vital decision-making support, the application seeks to enhance mutual understanding and collaboration between these communities, ensuring sustainable management of shared resources.
    </p>

    </div>
    </section>
  )
}

export default OurStory