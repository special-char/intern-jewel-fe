"use client"
import { useField } from "@payloadcms/ui"
import React from "react"

const options = [
  {
    label: "Design 1",
    value: "design1",
    image:
      "https://minio-usw040kwsgkookko0kswwkko.194.164.151.221.sslip.io/payload-jewel/product_card_design1.webp",
  },
  {
    label: "Design 2",
    value: "design2",
    image:
      "https://minio-usw040kwsgkookko0kswwkko.194.164.151.221.sslip.io/payload-jewel/product_card_design2.webp",
  },
  {
    label: "Design 3",
    value: "design3",
    image:
      "https://minio-usw040kwsgkookko0kswwkko.194.164.151.221.sslip.io/payload-jewel/product_card_design3.webp",
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
          className="flex-1 p-2 rounded-base cursor-pointer text-center"
          style={{
            border: value === opt.value ? "2px solid #0073e6" : "1px solid #ccc"
          }}
        >
          <img
            src={opt.image}
            alt={opt.label}
            className="w-full h-auto aspect-[9/16] rounded-soft mb-2 object-cover"
          />
          <div>{opt.label}</div>
        </div>
      ))}
    </div>
  )
}

export default CardDesignSelector
