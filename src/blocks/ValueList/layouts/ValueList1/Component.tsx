import React from "react"
import { ValueListBlock } from "@/payload-types"

export const ValueListLayout1 = (props: ValueListBlock) => {
  const { items } = props || {}

  if (!items || !Array.isArray(items) || items.length === 0) return null

  return (
    <section className="bg-card px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-10 list-none">
          {items.map((item, index) => (
            <li key={index} className="relative pl-6">
              <span className="absolute left-0 top-1 h-5 w-0.5 bg-primary" />
              <h4 className="text-xl font-semibold text-foreground mb-1">
                {item.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}