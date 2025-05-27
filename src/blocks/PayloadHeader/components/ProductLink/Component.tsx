import LocalizedClientLink from "@modules/common/components/localized-client-link"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/lib/components/ui/hover-card"
import { ChevronDown } from "lucide-react"
import { HeaderLayout1, Media } from "@/payload-types"
import Thumbnail from "@modules/products/components/thumbnail"
import { ImageMedia } from "@components/payload/Media/ImageMedia"

export default function ProductLinks({
  tree,
  thumbnail,
}: {
  tree: HeaderLayout1["tree"]
  thumbnail: Media
}) {
  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger tabIndex={0} asChild>
        <LocalizedClientLink
          href="/products"
          title="All Products"
          className="text-body text-center font-semibold uppercase hover:text-primary hover:cursor-pointer flex gap-2"
        >
          {tree.heading}
          <ChevronDown className="transition-transform duration-200 h-5" />
        </LocalizedClientLink>
      </HoverCardTrigger>
      <HoverCardContent className="w-screen border-none p-0 bg-background">
        <div className="px-container grid grid-cols-5 gap-4 pt-6">
          {tree.parent.map((parent) => (
            <div key={parent.id} className="flex flex-col gap-6 py-8">
              <LocalizedClientLink
                href={parent.link.url || "/"}
                className="text-caption font-semibold uppercase hover:cursor-pointer"
              >
                {parent.link.label}
              </LocalizedClientLink>

              {parent.sub && parent.sub.length > 0 && (
                <div className="flex flex-col gap-2">
                  {parent.sub?.map((subItem) => (
                    <LocalizedClientLink
                      href={subItem.link.url || "/"}
                      key={subItem.id}
                      className="text-body hover:text-primary hover:cursor-pointer capitalize"
                    >
                      {subItem.link.label}
                    </LocalizedClientLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="relative aspect-3/4">
            <ImageMedia
              resource={thumbnail as Media}
              imgClassName="object-cover"
              fill
            />
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
