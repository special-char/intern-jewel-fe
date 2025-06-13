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
<div className="grid grid-cols-2 gap-4 lg:gap-6 h-full">
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
