import { listProducts } from "@lib/data/products"
import type { Product } from "@/payload-types"
import { DEFAULT_COUNTRYCODE } from "@lib/constants"
import ProductCard from "@/blocks/ProductsCollection/components/product-card"

export const TwoColumnGrid = async ({
    products,
    blockType,
}: {
    products: (number | Product)[] | null | undefined
    blockType: string
}) => {
    if (!products?.length) return null

    const limitedProducts = (products as Product[]).slice(0, 2)

    const {
        response: { products: pricedProducts },
    } = limitedProducts.length
            ? await listProducts({
                countryCode: DEFAULT_COUNTRYCODE,
                queryParams: {
                    //@ts-expect-error
                    id: limitedProducts.map((p) => p.product_id),
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
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-14 bg-neutral-50 p-8">
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
    )
}
