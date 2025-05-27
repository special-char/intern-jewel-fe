import { Button } from "@lib/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"

const navigation = {
  pages: [
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ],
}

const AboutContact = () => {
  return (
    <>
      {navigation.pages.map((page, index) => (
        <LocalizedClientLink
          href={page.href}
          title={page.name}
          key={index}
          className="text-body text-center font-semibold uppercase hover:text-primary hover:cursor-pointer max-lg:border-b max-lg:w-full max-lg:p-4 max-lg:text-start"
        >
          {page.name}
        </LocalizedClientLink>
      ))}
    </>
  )
}

export default AboutContact
