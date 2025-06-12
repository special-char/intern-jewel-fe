import React from "react"
import {Button } from "@lib/components/ui/button"
interface propps {
  backgroundImage: string
  title: string
  subtitle: string
  buttonText: string
}

const BigBanner: React.FC<propps> = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
}) => {
  return (
    <div
    className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
   
<div className="absolute inset-0 block sm:hidden bg-gradient-to-t from-black to-transparent z-0" />

    <div className="text-center px-4 relative z-10">
      <h1 className="w-full max-w-[90%] mx-auto font-serif mb-6 text-center leading-[1.1] break-words whitespace-pre-line text-[2.5rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem]">
        {title}
      </h1>
  
      <p className="text-base sm:text-lg md:text-xl font-light mb-6 max-w-[600px] mx-auto">
        {subtitle}
      </p>
  
      <Button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition duration-300">
        {buttonText}
      </Button>
    </div>
  </div>
  )
}

export default BigBanner
