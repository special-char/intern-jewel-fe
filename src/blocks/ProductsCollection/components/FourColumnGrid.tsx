import { listProducts } from "@lib/data/products"
import type { Product } from "@/payload-types"
import { DEFAULT_COUNTRYCODE } from "@lib/constants"
import ProductCard from "@/blocks/ProductsCollection/components/product-card"
import { Button } from "@lib/components/ui/button"
import { ArrowRight } from "lucide-react"

export const FourColumnGrid = async ({
  title,
  products,
  blockType,
  button,
}: {
  title: string
  products: (number | Product)[] | null | undefined
  blockType: string
  button: any
}) => {
  if (!products?.length) return null

  const {
    response: { products: pricedProducts },
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
      <div className="flex items-end justify-between">
        <h2 className="text-heading4 text-center font-playfair capitalize">{title}</h2>
        <Button href={button.url} variant="link" size={"link"}>
          {button.label}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {pricedProducts &&
          pricedProducts?.map((item) => {
            return (
              <ProductCard key={item.id} product={item} blockType={blockType} />
            )
          })}
      </div>
    </section>
  )
}
