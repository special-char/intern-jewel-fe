"use client"
import { useSearchParams } from "next/navigation"
import { useMemo } from "react"
import { Pagination } from "@modules/store/components/pagination"
import { listProducts } from "@lib/data/products"
import type { Product } from "@/payload-types"
import { DEFAULT_COUNTRYCODE } from "@lib/constants"
import ProductCard from "@/blocks/ProductsCollection/components/product-card"
import { Button } from "@lib/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"

export const PaginationGrid = ({
  title,
  products,
  blockType,
  button,
  countryCode = DEFAULT_COUNTRYCODE,
  limit = 6, // default 9 products per page
}: {
  title: string
  products: (number | Product)[] | null | undefined
  blockType: string
  button: any
  countryCode?: string
  limit?: number
}) => {
  const searchParams = useSearchParams()
  const page = useMemo(() => {
    const p = searchParams.get("page")
    return p ? parseInt(p) : 1
  }, [searchParams])

  const [state, setState] = React.useState<{
    pricedProducts: any[]
    count: number
    loading: boolean
  }>({
    pricedProducts: [],
    count: 0,
    loading: true,
  })

  React.useEffect(() => {
    let isMounted = true
    async function fetchProducts() {
      setState((s) => ({ ...s, loading: true }))
      if (!products?.length) {
        setState({ pricedProducts: [], count: 0, loading: false })
        return
      }
      const { response: { products: pricedProducts, count } } = await listProducts({
        countryCode,
        pageParam: page,
        queryParams: {
          //@ts-expect-error
          id: (products as Product[]).map((p) => p.product_id),
          fields:
            "*variants.calculated_price,*metadata,+variants.inventory_quantity , *images,+images.url , *thumbnail",
          limit,
        },
      })
      if (isMounted) {
        setState({ pricedProducts: pricedProducts || [], count: count || 0, loading: false })
      }
    }
    fetchProducts()
    return () => {
      isMounted = false
    }
  }, [products, countryCode, page, limit])

  const { pricedProducts, count, loading } = state
  const totalPages = Math.ceil(count / limit)

  if (loading) return <div>Loading...</div>
  if (!pricedProducts || !pricedProducts.length) {
    return null
  }

  return (
    <section className="flex flex-col gap-12">
      <h2 className="text-heading4 text-center capitalize">{title}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {pricedProducts &&
          pricedProducts?.map((item) => {
            return (
              <ProductCard key={item.id} product={item} blockType={blockType} />
            )
          })}
      </div>
      {totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} />
      )}
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
    </section>
  )
}