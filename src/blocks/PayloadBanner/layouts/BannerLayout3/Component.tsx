"use client"

import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { cn } from "@lib/lib/utils"

interface HeroSectionProps {
  backgroundImage: {
    url: string
  }
  eyebrowText?: string
  heading: string
  description: string
  textColor?: string
  overlayOpacity?: number
  className?: string
  button?: {
    label: string
    href?: string
    newTab?: boolean
  }
}

export const BannerLayout3 = (props: HeroSectionProps) => {
  const {
    backgroundImage,
    eyebrowText,
    heading,
    description,
    textColor = "text-white",
    overlayOpacity = 0.3,
    className = "",
    button,
  } = props

  return (
    <section
      className={`relative min-h-screen grid place-items-center overflow-hidden ${className}`}
    >
      {/* Background Image + Overlay */}
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 place-items-center text-center max-w-4xl mx-auto">
          {eyebrowText && (
            <div className={`${textColor} text-caption uppercase mb-4 sm:mb-6`}>
              {eyebrowText}
            </div>
          )}

          <h1
            className={`${textColor} text-banner mb-6 sm:mb-8 font-normal leading-[0.9] text-center`}
          >
            {heading}
          </h1>

          <p
            className={`${textColor} text-subtitle max-w-2xl mx-auto leading-tight mb-8 sm:mb-12`}
          >
            {description}
          </p>

          {button?.label && button?.href && (
            <LocalizedClientLink
              href={button.href}
              target={button.newTab ? "_blank" : undefined}
              rel={button.newTab ? "noopener noreferrer" : undefined}
              className={cn(
                "relative group inline-flex items-center justify-center text-subtitle px-8 py-4 border border-black text-center font-medium transition duration-300 ease-in-out",
                "overflow-hidden",
                "text-white", // You can make this dynamic if needed
                "hover:text-secondary-foreground"
              )}
            >
              <span className="absolute left-1/2 bottom-0 w-4 h-4 bg-primary rounded-full scale-0 group-hover:scale-[15] transition-transform duration-300 ease-in-out transform -translate-x-1/2 translate-y-1/2" />
              <span className="relative z-10">{button.label}</span>
            </LocalizedClientLink>
          )}
        </div>
      </div>
    </section>
  )
}
