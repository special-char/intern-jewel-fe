"use client"

import Image from "next/image"
import { OutlineButton } from "@/blocks/PayloadButton/layouts/OutlineButton/Component"

interface HeroSectionProps {
  backgroundImage: {
    url: string
  }
  eyebrowText?: string
  heading: string
  description: string
  buttonText: string
  buttonHref?: string
  textColor?: string
  buttonVariant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive"
  overlayOpacity?: number
  className?: string
}

export const BannerLayout3 = (props: HeroSectionProps) => {
  const {
    backgroundImage,
    eyebrowText,
    heading,
    description,
    buttonText,
    buttonHref = "#",
    textColor = "text-white",
    overlayOpacity = 0.3,
    className = "",
  } = props

  return (
    <section
      className={`relative min-h-screen grid place-items-center overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage.url}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 place-items-center text-center max-w-4xl mx-auto">
          {eyebrowText && (
            <div className={`${textColor} text-caption uppercase mb-4 sm:mb-6`}>
              {eyebrowText}
            </div>
          )}

          <h1
            className={`${textColor} text-heading6 mb-6 sm:mb-8 font-normal leading-[0.9] text-center`}
          >
            {heading}
          </h1>

          <p
            className={`${textColor} text-subtitle  max-w-2xl mx-auto leading-tight mb-8 sm:mb-12`}
          >
            {description}
          </p>

          <div className="flex justify-center">
            <OutlineButton
              className="text-subtitle px-8 py-4 border border-black"
              button={{
                label: buttonText,
                url: buttonHref,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
