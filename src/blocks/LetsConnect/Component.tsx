// blocks/ContactSection/Component.tsx

"use client"

import React from "react"
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
  LucideIcon,
} from "lucide-react"
import { ContactSectionBlockProps } from "./Config"

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

export const ContactSectionComponent: React.FC<ContactSectionBlockProps> = ({
  title = "Let's Get in Touch!",
  subtitle,
  socialLinks,
  className = "",
}) => {
  const parsedLinks = socialLinks.map((link) => ({
    ...link,
    icon: iconMap[link.icon], // convert string to actual icon component
  }))

  return (
    <section className={`w-full py-12 px-4 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 text-center">
          <div className="grid gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-5 sm:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
              {parsedLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-5 h-5 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-amber-600 hover:bg-amber-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    aria-label={`Visit our ${link.name} page`}
                    style={{ backgroundColor: link.color || undefined }}
                  >
                    <IconComponent className="w-3 h-3 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
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
