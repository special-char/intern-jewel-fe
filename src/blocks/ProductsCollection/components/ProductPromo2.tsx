import { listProducts } from "@lib/data/products"
import type {
  Media,
  Product,
  PromoProduct2,
  PromoProductLayout,
} from "@/payload-types"
import { DEFAULT_COUNTRYCODE } from "@lib/constants"
import ProductCard from "@/blocks/ProductsCollection/components/product-card"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ArrowRightIcon } from "lucide-react"
import Thumbnail from "@modules/products/components/thumbnail"
import { ImageMedia } from "@components/payload/Media/ImageMedia"

export const ProductPromo2 = async ({
  heading,
  products,
  promotion,
  blockType,
}: {
  heading: PromoProduct2["heading"]
  products: (number | Product)[] | null | undefined
  promotion: PromoProduct2["promotion"]
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
    <section className="flex flex-col-reverse lg:grid lg:grid-cols-[40%_1fr] gap-11  my-10">
      {/* Banner */}
      <div className="relative text-white aspect-2/1 lg:aspect-auto">
        <ImageMedia
          resource={(promotion?.promotionImage as Media) || ""}
          fill
          imgClassName="object-cover"
        />
        <div className="absolute inset-0">
          <div className="absolute bottom-6 right-6">
            {promotion?.promoTagline && (
              <p className="bg-secondary text-white text-small-semi tracking-widest  px-10 py-4 text-center font-bold whitespace-nowrap">
                {/* <img
      src="/images/icon.svg"
      alt="Promo Icon"
      className="w-4 h-4"
    /> */}
                {promotion.promoTagline}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="flex flex-col justify-between gap-12">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-end gap-4">
              <h4 className="font-playfair text-heading4">{heading.name}</h4>
              <div className="flex items-center gap-2">
                <span className="italic text-sm text-muted-foreground">by</span>
                <div className="max-w-[80px] w-full h-auto">
                  <ImageMedia
                    resource={(heading?.svg_logo as Media) || ""}
                    fill={false}
                    imgClassName="object-contain w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <p className="text-base-regular text-muted-foreground">
              {heading.description}
            </p>
          </div>
        </div>

        <div className="grid  grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
