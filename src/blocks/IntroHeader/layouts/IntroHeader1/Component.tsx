import React from "react"
import { IntroHeaderBlock } from "@/payload-types"
import RichText from "@components/payload/RichText"

export const IntroHeaderLayout1 = (props: IntroHeaderBlock) => {
  const { label, title, subtitle } = props || {}

  return (
    <section className="px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-16">
        {label && (
          <p className="text-spacing text-primary">
            {label}
          </p>
        )}

        {title && (
          <h1 className="text-foreground">
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