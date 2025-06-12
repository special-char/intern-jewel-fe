import LocalizedClientLink from "@modules/common/components/localized-client-link"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/lib/components/ui/hover-card"
import { ScrollArea, ScrollBar } from "@/lib/components/ui/scroll-area"
import Thumbnail from "@modules/products/components/thumbnail"
import { ArrowRight, ChevronDown } from "lucide-react"
import { HeaderLayout1, Media } from "@/payload-types"
import { ImageMedia } from "@components/payload/Media/ImageMedia"

export default function NavLinks({ menu }: { menu: HeaderLayout1["menu"] }) {
  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger tabIndex={0} asChild>
        <LocalizedClientLink
          href="/products"
          title="All Products"
          className="text-body text-center font-semibold uppercase hover:text-primary hover:cursor-pointer flex gap-2"
        >
          Categories
          <ChevronDown className="transition-transform duration-200 h-5" />
        </LocalizedClientLink>
      </HoverCardTrigger>
      <HoverCardContent className="w-screen border-none px-0 bg-background">
        <ScrollArea className="px-container py-6">
          <div className="flex gap-4">
            {menu.category.map((item) => (
              <div key={item.id} className="flex-none min-w-[240px]">
                <div className="relative aspect-3/4 w-full hover:cursor-pointer overflow-hidden">
                  <ImageMedia
                    resource={item.category_thumbnail as Media}
                    fill
                    imgClassName="transition-transform duration-300 ease-in-out hover:scale-125"
                  />
                </div>

                <LocalizedClientLink
                  href={item.link.url || ""}
                  className="flex justify-between items-center py-2 text-body font-semibold"
                >
                  {item.link.label}
                  <ArrowRight className="h-4 text-primary" />
                </LocalizedClientLink>
              </div>
            ))}
            {menu?.categories?.map((category) => {
              if (typeof category === "number") return null
              return (
                <div key={category?.id} className="flex-none min-w-[240px]">
                  <div className="relative aspect-3/4 w-full hover:cursor-pointer overflow-hidden">
                    <ImageMedia
                      resource={category?.category_media as Media}
                      fill
                      imgClassName="transition-transform duration-300 ease-in-out hover:scale-125"
                    />
                  </div>

                  <LocalizedClientLink
                    href={`${category?.category_handle}`}
                    className="flex justify-between items-center py-2 text-body font-semibold"
                  >
                    {category?.category_title}
                    <ArrowRight className="h-4 text-primary" />
                  </LocalizedClientLink>
                </div>
              )
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </HoverCardContent>
    </HoverCard>
  )
}
