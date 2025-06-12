import { Header } from "@/payload-types"
import HeaderLayout1 from "../../layouts/HeaderLayout1/Component"
import HeaderLayout2 from "../../layouts/HeaderLayout2/Component"
import { HeaderLayout3 } from "../../layouts/HeaderLayout3/Component"

const blockComponents: Record<string, React.FC<any>> = {
  header1: HeaderLayout1,
  header2: HeaderLayout2,
  headerLayout3: HeaderLayout3,
}

export const PayLoadHeader: React.FC<{
  blocks: Header["layout"][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
  if (hasBlocks) {
    return (
      <div>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return <Block {...block} key={index} />
            }
          }
          return null
        })}
      </div>
    )
  }
}
