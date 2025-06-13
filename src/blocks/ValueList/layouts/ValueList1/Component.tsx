// import React from "react"
// import { ValueListBlock } from "@/payload-types"

// export const ValueListLayout1 = (props: ValueListBlock) => {
//   const { items, blockName } = props || {}

//   if (!items || !Array.isArray(items) || items.length === 0) return null

//   return (
//     <section className="px-6 py-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 ">
//         {/* Left Title Column */}
//         <h3 className="text-fontFamily text-foreground sticky top-24">
//           {blockName || "Company Values"}
//         </h3>

//         {/* Right Grid Column */}
//         <ul className="grid gap-10">
//           {items.map((item, index) => (
//             <li key={index} className="relative pl-6">
//               <span className="absolute left-0 top-1 h-5 w-0.5 bg-primary" />
//               <h4 className="text-xl font-semibold text-foreground mb-1">
//                 {item.title}
//               </h4>
//               <p className="text-muted-foreground leading-relaxed">
//                 {item.description}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   )
// }
import React from "react"
import { ValueListBlock } from "@/payload-types"

export const ValueListLayout1 = (props: ValueListBlock) => {
  const { items, blockName } = props || {}

  if (!items || !Array.isArray(items) || items.length === 0) return null

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Title Column */}
        <div className="relative">
          <h3 className="text-4xl font-light text-foreground sticky top-24">
            {blockName || "Company Values"}
          </h3>
        </div>

        {/* Right Grid Column */}
        <ul className="grid gap-10">
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

