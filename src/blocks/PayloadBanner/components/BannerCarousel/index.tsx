import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import { ChevronLeft, ChevronRight } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@lib/components/ui/carousel"
import { Card, CardContent } from "@lib/components/ui/card"
import { Button } from "@lib/components/ui/button"
import { ImageMedia } from "@components/payload/Media/ImageMedia"

export const BannerCarousel = ({ carousel }: any) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full h-full relative aspect-square overflow-hidden"
    >
      <CarouselContent className="h-full">
        {carousel.map((item: any) => (
          <CarouselItem key={item?.id} className="basis-full h-full p-0 m-0">
            <Card className="h-full border-0">
              <CardContent className="flex aspect-square items-center justify-center p-0">
                <div className="relative aspect-square w-full overflow-hidden bg-secondary">
                  <ImageMedia
                    resource={item?.image}
                    fill
                    imgClassName="object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-between gap-4 p-16">
                    <p className="font-medium text-white text-spacing">
                      {item?.label}
                    </p>

                    <h2 className="text-heading1 whitespace-pre-line text-center text-white ">
                      {item?.desc}
                    </h2>
                    <Button variant={"outline"} size={"lg"}>
                      <LocalizedClientLink href={item?.button.url}>
                        {item?.button.label}
                      </LocalizedClientLink>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10  hover:bg-white border-none shadow-md max-md:hidden">
        <ChevronLeft className="h-5 w-5" />
      </CarouselPrevious>
      <CarouselNext className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10  hover:bg-white border-none shadow-md max-md:hidden">
        <ChevronRight className="h-5 w-5" />
      </CarouselNext>
    </Carousel>
  )
}
