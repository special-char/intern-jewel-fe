import { listProducts } from "@lib/data/products"
import type { Product } from "@/payload-types"
import { DEFAULT_COUNTRYCODE } from "@lib/constants"
import ProductCard from "@/blocks/ProductsCollection/components/product-card"
import { Button } from "@lib/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Pagination } from "@modules/store/components/pagination"

export const ThreeColumnGrid1 = async ({
  title,
  products,
  blockType,
  button,
  page = 1,
  productsPerPage = 2,
  showPagination = true,
}: {
  title?: string
  products: (number | Product)[] | null | undefined
  blockType: string
  button?: any
  page?: number
  productsPerPage?: number
  showPagination?: boolean
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

  // Calculate pagination
  const totalProducts = pricedProducts.length
  const totalPages = Math.ceil(totalProducts / productsPerPage)
  const startIndex = (page - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const paginatedProducts = pricedProducts.slice(startIndex, endIndex)

  return (
    <section className="flex flex-col gap-12">
      {title && <h2 className="text-heading4 text-center capitalize">{title}</h2>}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {paginatedProducts &&
          paginatedProducts?.map((item) => {
            return (
              <ProductCard key={item.id} product={item} blockType={blockType} />
            )
          })}
      </div>
      {showPagination && totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          data-testid="product-collection-pagination"
        />
      )}
      {button && (
        <div className="justify-center flex">
          <Button variant={"animated"} className="w-max" size={"lg"}>
            <span className="absolute left-1/2 bottom-0 w-4 h-4 bg-primary rounded-full scale-0 group-hover:scale-[15] transition-transform duration-300 ease-in-out transform -translate-x-1/2 translate-y-1/2" />
            <LocalizedClientLink
              href={button.url || ""}
              className={
                "relative z-10 duration-300 ease-out group-hover:text-secondary-foreground"
              }
            >
              {button.label}
            </LocalizedClientLink>
          </Button>
        </div>
      )}
    </section>
  )
}
