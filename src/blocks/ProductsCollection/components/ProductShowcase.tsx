import { listProducts } from "@lib/data/products"
import type {
  Media,
  Product,
  ProductShowcase as ProductShowcaseType,
} from "@/payload-types"
import { DEFAULT_COUNTRYCODE } from "@lib/constants"
import ProductCard from "@/blocks/ProductsCollection/components/product-card"
import Image from "next/image"
import { Button } from "@lib/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowRightIcon } from "lucide-react"
import Thumbnail from "@modules/products/components/thumbnail"
import { ImageMedia } from "@components/payload/Media/ImageMedia"

export const ProductShowcase = async ({
  heading,
  products,
  promotion,
  blockType,
}: {
  heading: ProductShowcaseType["heading"]
  products: (number | Product)[] | null | undefined
  promotion: ProductShowcaseType["promotion"]
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
    <section className="flex flex-col gap-12">
      <div className="grid grid-cols-[1fr_35%] gap-4 lg:gap-6 max-lg:grid-cols-1">
        {/* Product Grid Section */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-heading4">{heading.name}</h2>
            <Button href={heading.button.url!} variant={"link"} size={"link"}>
              {heading.button.label}
              <ArrowRightIcon className="w-4 h-4 text-primary" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:gap-6">
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

        {/* Banner */}
        <div className="relative max-lg:aspect-2/1">
          <ImageMedia
            resource={(promotion?.promotionImage as Media) || ""}
            fill
            imgClassName="object-cover"
            alt={
              (promotion?.promotionImage as Media).alt ||
              "ProductShowcase image"
            }
          />
          <div className="absolute inset-0 flex flex-col text-center items-center justify-end h-full gap-4 p-6">
            <p className="uppercase text-spacing font-semibold">
              {promotion?.promoTagline}
            </p>
            <h3 className="text-heading5 font-medium">
              {promotion?.promoHeading}
            </h3>
            <Button variant="outline" className="w-max">
              <LocalizedClientLink href={promotion?.button.url!}>
                {promotion?.button.label}
              </LocalizedClientLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
