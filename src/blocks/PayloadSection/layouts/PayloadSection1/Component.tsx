import React from "react"
import { PayloadSectionBlock } from "@/payload-types"
import { RichText } from "@payloadcms/richtext-lexical/react"
import { SerializedEditorState } from "node_modules/lexical/LexicalEditorState"

export const PayloadSectionLayout1 = (props: PayloadSectionBlock) => {
  const { title, richTextContent } = props || {}

  const hasHeader = title

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {hasHeader && (
          <div className="lg:col-span-6 flex flex-col gap-6">
            {title && (
              <h3 className=" text-foreground sticky top-24">
                {title}
              </h3>
            )}
          </div>
        )}

        <div className={hasHeader ? "lg:col-span-6" : "lg:col-span-12"}>
          {richTextContent && (
            <RichText
              data={richTextContent as SerializedEditorState}
              className="space-y-6"
            />
          )}
        </div>
      </div>

      {/* <div className="border-t border-border mt-12" /> */}
    </section>
  )
}