import React from "react"
import { IntroHeaderBlock } from "@/payload-types"
import RichText from "@components/payload/RichText"

export const IntroHeaderLayout1 = (props: IntroHeaderBlock) => {
  const { label, title, subtitle } = props || {}

  return (
    <section className="bg-card px-6 py-20 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {label && (
          <h5 className="text-sm tracking-[0.2em] font-medium uppercase text-primary">
            {label}
          </h5>
        )}

        {title && (
          <h1 className="text-4xl sm:text-5xl font-playfair whitespace-pre-line text-foreground">
            {title}
          </h1>
        )}

        {subtitle && (
          <RichText
            data={subtitle}
            enableGutter={false}
            enableProse={false}
            className="text-muted-foreground"
          />
        )}
      </div>
    </section>
  )
}