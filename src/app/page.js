
import ParticlesAnimation from "@/components/ParticlesAnimation"
import Navbar from "@/components/navbar"
import Image from "next/image"

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
 <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <ParticlesAnimation></ParticlesAnimation>
    </div>

    </>
  )
}
