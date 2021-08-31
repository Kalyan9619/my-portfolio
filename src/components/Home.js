import React from "react"
import image from "../raja.jpeg"
export default function Home(){
    return (
    
    <main>
            <img src={image} alt="raja-im" className="absolute object-cover w-full h-full" />
     <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64"><h1 className="text-6xl text-green-100 font-bold cursive leading-none">Ilayaraja Music School</h1></section>
    </main>
    )
}