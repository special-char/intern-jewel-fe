"use client"

import type React from "react"
import Link from "next/link"
import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  type LucideIcon,
} from "lucide-react"
import type { LetsConnectBlockProps } from "./Config"

// Map icon string to actual Lucide icon component
const iconMap: Record<string, LucideIcon> = {
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
}

export const LetsConnectComponent: React.FC<LetsConnectBlockProps> = ({
  title = "Let's Get in Touch!",
  socialLinks,
}) => {
  const parsedLinks = socialLinks.map((link) => ({
    ...link,
    icon: iconMap[link.icon], // convert string to actual icon component
  }))

  return (
    <section className={`w-full py-16 px-4 bg-white`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-12">
          {/* Title Section */}
          <div className="text-center">
            <h2 className="text-heading5 md:text-5xl lg:text-6xl font-serif text-gray-800 leading-tight">
              {title}
            </h2>
          </div>

          {/* Social Icons Section */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-6 md:gap-8">
              {parsedLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    aria-label={`Visit our ${link.name} page`}
                    style={{ backgroundColor: link.color || "#D4AF37" }}
                  >
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
