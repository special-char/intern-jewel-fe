import React from "react"
import clsx from "clsx"
import { RenderBlocks } from "@/blocks/RenderBlocks"
import { HttpTypes } from "@medusajs/types"

// Custom Types (No payload-types dependency)
interface Category {
  label: string
}

interface ShowcaseBlock {
  categories?: Category[]
  children?: any[]
}

type Props = {
  region: HttpTypes.StoreRegion
  ShowcaseBlock: ShowcaseBlock
}

const fallbackCategories = [
  "All Products",
  "Earrings",
  "Necklace",
  "Bracelet",
]

const ListPageShowcase2: React.FC<Props> = ({ region, ShowcaseBlock }) => {
  const blocks = ShowcaseBlock
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
  const categories =
    ShowcaseBlock?.categories?.map((cat) => cat.label) ?? fallbackCategories

    console.log(ShowcaseBlock,"hello")

  return (
    <div className="grid grid-cols-[250px_1fr] gap-x-10 px-container py-10">
      {/* Left Fixed Sidebar */}
      <aside className="sticky top-24 self-start h-max">
        <ul className="space-y-4">
          {categories?.map((cat, idx) => (
            <li
              key={idx}
              className={clsx(
                "text-gray-700 uppercase tracking-wide text-sm",
                idx === 0 && "border-l-2 border-yellow-600 pl-2 font-semibold"
              )}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* Right Dynamic Content Area */}
      <section className="flex flex-col space-y-12">
        <div>Hello</div>
        {hasBlocks && <RenderBlocks blocks={blocks} region={region} />}
      </section>
    </div>
  )
}

export default ListPageShowcase2
