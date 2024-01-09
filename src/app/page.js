
import FirstSection from "@/components/FirstSection";
import HomeView from "@/components/HomeView";
import Navbar from "@/components/Navbar";
import ParticlesAnimation from "@/components/ParticlesAnimation";
import SecondSection from "@/components/SecondSection";



export default function Home() {
  const name = "Mostofa Dhali Emon";
  
  return (
    
  <>

  <Navbar/>
  {/* <ParticlesAnimation/> */}

 <FirstSection name={name} />
  <SecondSection name={name} />
  </>

    
  
  )
}
