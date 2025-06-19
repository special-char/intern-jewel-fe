import React from "react"
import clsx from "clsx"
import { RenderBlocks } from "@/blocks/RenderBlocks"
import { HttpTypes } from "@medusajs/types"

interface Props {
  region: HttpTypes.StoreRegion
  children?: any[]
  categories?: { label: string }[]
}

const fallbackCategories = ["All Products", "Earrings", "Necklace", "Bracelet"]

const ListPageShowcase2: React.FC<Props> = ({ region, children, categories }) => {
  const blocks = children
  const hasBlocks = Array.isArray(blocks) && blocks.length > 0
  const categoryList = categories?.map((cat) => cat.label) ?? fallbackCategories

  return (
    <div className="grid grid-cols-1 md:grid-cols-[20%_1fr] md:px-container py-10">
      <aside className="sticky top-24 self-start h-max">
        <ul className="space-y-4">
          {categoryList.map((cat, idx) => (
            <li
              key={idx}
              className={clsx(
                "text-gray-700 uppercase tracking-wide text-md",
                idx === 0 && "border-l-2 border-yellow-600 font-semibold"
              )}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      <section className="flex flex-col space-y-12">
        {hasBlocks ? (
          <RenderBlocks blocks={blocks} region={region} />
        ) : (
          <p className="text-sm text-muted">No blocks found</p>
        )}
      </section>
    </div>
  )
}

export default ListPageShowcase2