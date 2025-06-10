import React from "react"
import { SectionWrapperBlock } from "@/payload-types"
import { RichText } from "@payloadcms/richtext-lexical/react"
import { SerializedEditorState } from "node_modules/lexical/LexicalEditorState"

export const SectionWrapperLayout1 = (props: SectionWrapperBlock) => {
  const { title, subtitle, children } = props || {}

  const hasHeader = title || subtitle
  const richTextBlock = children?.[0]?.blockType === 'richText' ? children[0] : null
  const richTextContent = richTextBlock?.content

  return (
    <section className="bg-card py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {hasHeader && (
          <div className="lg:col-span-6 flex flex-col justify-center gap-6">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground sticky top-24">
                {title}
              </h2>
            )}
            {subtitle && (
              <div className="text-lg text-muted-foreground">{subtitle}</div>
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

      <div className="border-t border-border mt-12" />
    </section>
  )
}