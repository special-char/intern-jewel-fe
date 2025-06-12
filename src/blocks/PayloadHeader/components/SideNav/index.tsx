import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@lib/components/ui/sheet"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/lib/components/ui/tabs"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowRight, Menu } from "lucide-react"
import React from "react"
import { HeaderLayout1, Media } from "@/payload-types"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/lib/components/ui/accordion"
import Thumbnail from "@modules/products/components/thumbnail"
import AboutContact from "../AboutContact"
import { HttpTypes } from "@medusajs/types"
import { ImageMedia } from "@components/payload/Media/ImageMedia"

const SideNav = ({
  menu,
  tree,
}: {
  menu?: HeaderLayout1["menu"]
  tree?: HeaderLayout1["tree"]
}) => {
  const tabs = [
    { value: "products", label: tree?.heading },
    { value: "categories", label: menu?.heading },
    { value: "other", label: "Other" },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center h-full">
          <span className="sr-only">Open menu</span>
          <Menu aria-hidden="true" className="size-6" />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-full !max-w-sm p-0 pt-5 h-dvh flex flex-col bg-white overflow-y-scroll"
      >
        <SheetTitle className="px-4 text-heading3 font-playfair">
          Menu
        </SheetTitle>
        <div className="flex-1">
          <Tabs className="w-full" defaultValue="products">
            <TabsList className="h-auto justify-start gap-2 rounded-none bg-none border-b border-border px-0 py-2 w-full">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="relative text-subtitle font-semibold after:absolute after:inset-x-0 after:bottom-0 after:-mb-2 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Products Tab Content */}
            <TabsContent value="products">
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-2 w-full"
              >
                {tree?.parent.map((parent) => (
                  <AccordionItem key={parent.id} value={parent.id || ""}>
                    <AccordionTrigger
                      className="flex justify-between items-center p-4"
                      variant="chevronIcon"
                    >
                      <LocalizedClientLink
                        href={"/produts"}
                        className="text-caption font-semibold uppercase hover:cursor-pointer"
                      >
                        {parent.link.label}
                      </LocalizedClientLink>
                    </AccordionTrigger>
                    <AccordionContent className="flex p-4">
                      {parent.sub && parent.sub.length > 0 && (
                        <div className="flex flex-col gap-2">
                          {parent.sub.map((subItem) => (
                            <LocalizedClientLink
                              href={subItem.link.url || "/"}
                              key={subItem.id}
                              className="text-body hover:text-secondary hover:cursor-pointer capitalize"
                            >
                              {subItem.link.label}
                            </LocalizedClientLink>
                          ))}
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            {/* Categories Tab Content */}
            <TabsContent value="categories">
              <div className="grid grid-cols-3 gap-2 p-2">
                {menu?.category.map((item) => (
                  <div key={item.id} className="group">
                    <div className="relative aspect-3/4 w-full hover:cursor-pointer overflow-hidden">
                      <ImageMedia
                        resource={item.category_thumbnail as Media}
                        fill
                        imgClassName="object-cover"
                      />
                    </div>

                    <LocalizedClientLink
                      href={item.link.url || ""}
                      className="flex justify-between items-center py-2 text-body font-semibold"
                    >
                      {item.link.label}
                      <ArrowRight className="h-4 text-secondary" />
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
            </TabsContent>

            {/* other */}
            <TabsContent value="other">
              <div className="flex flex-col ">
                <AboutContact />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <LocalizedClientLink
          href="/account"
          className="font-semibold flex items-center p-4 border-t"
        >
          Account
        </LocalizedClientLink>
      </SheetContent>
    </Sheet>
  )
}

export default SideNav
