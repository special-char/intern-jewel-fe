import { listProducts } from "@lib/data/products"
import type { Media, Product, PromoProductLayout } from "@/payload-types"
import { DEFAULT_COUNTRYCODE } from "@lib/constants"
import ProductCard from "@/blocks/ProductsCollection/components/product-card"
import { Button } from "@lib/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowRightIcon } from "lucide-react"
import Thumbnail from "@modules/products/components/thumbnail"
import { ImageMedia } from "@components/payload/Media/ImageMedia"

export const ProductPromo = async ({
  heading,
  products,
  promotion,
  blockType,
}: {
  heading: PromoProductLayout["heading"]
  products: (number | Product)[] | null | undefined
  promotion: PromoProductLayout["promotion"]
  blockType: string
}) => {
  if (!products?.length) return null

  const {
    response: { products: pricedProducts, count },
  } = products
    ? await listProducts({
        countryCode: DEFAULT_COUNTRYCODE,
        queryParams: {
          //@ts-expect-error
          id: (products as Product[]).map((p) => p.product_id),
          fields:
            "*variants.calculated_price,*metadata,+variants.inventory_quantity , *images,+images.url , *thumbnail",
        },
      })
    : {
        response: { products: null },
      }

  if (!pricedProducts || !pricedProducts.length) {
    return null
  }

  return (
    <section className="flex flex-col-reverse lg:grid lg:grid-cols-[25%_1fr] gap-4">
      {/* Banner */}
      <div className="relative text-white aspect-2/1 lg:aspect-auto">
        <ImageMedia
          resource={(promotion?.promotionImage as Media) || ""}
          fill
          imgClassName="object-cover"
        />
        <div className="absolute inset-0 flex flex-col gap-4 items-center text-center justify-end h-full p-6">
          <p>{promotion?.promoTagline}</p>
          <h5 className="font-playfair">{promotion?.promoHeading}</h5>
          <Button variant="outline" className="z-10">
            <LocalizedClientLink href={promotion?.button.url!}>
              {promotion?.button.label}
            </LocalizedClientLink>
          </Button>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="flex flex-col justify-between gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-4">
          <span className="flex gap-2 flex-col">
            <h4>{heading.name}</h4>
            <p className="line-clamp-3">{heading.description}</p>
          </span>
          <Button
            href={heading.button.url!}
            variant={"link"}
            size={"link"}
            className="justify-start lg:justify-end hover:text-primary"
          >
            {heading.button.label}
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pricedProducts &&
            pricedProducts?.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  product={item}
                  blockType={blockType}
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}
