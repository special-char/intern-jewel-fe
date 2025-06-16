"use client"
import { useField } from "@payloadcms/ui"
import React from "react"

const options = [
  {
    label: "Design 1",
    value: "design1",
    image:
      "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail-bannerlayout1.png",
  },
  {
    label: "Design 2",
    value: "design2",
    image:
      "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail-bannerlayout1.png",
  },
  {
    label: "Design 3",
    value: "design3",
    image:
      "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail-bannerlayout1.png",
  },
]

export const CardDesignSelector: React.FC<any> = ({ path }) => {
  const { value, setValue } = useField({ path })

  return (
    <div className="flex gap-4 py-4">
      {options.map((opt) => (
        <div
          key={opt.value}
          onClick={() => setValue(opt.value)}
          style={{
            border:
              value === opt.value ? "2px solid #0073e6" : "1px solid #ccc",
            borderRadius: 8,
            padding: 8,
            cursor: "pointer",
            textAlign: "center",
            width: 120,
          }}
        >
          <img
            src={opt.image}
            alt={opt.label}
            style={{ width: "100%", borderRadius: 4, marginBottom: 8 }}
          />
          <div>{opt.label}</div>
        </div>
      ))}
    </div>
  )
}

export default CardDesignSelector
