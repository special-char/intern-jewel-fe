import { listProducts } from "@lib/data/products"
import type { Product } from "@/payload-types"
import { DEFAULT_COUNTRYCODE } from "@lib/constants"
import ProductCard from "@/blocks/ProductsCollection/components/product-card"
import { Button } from "@lib/components/ui/button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const TwoColumnGrid = async ({
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
        <section className="flex flex-col gap-12">
            <h2 className="text-heading4 text-center capitalize">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {pricedProducts &&
                    pricedProducts?.map((item) => {
                        return (
                            <ProductCard key={item.id} product={item} blockType={blockType} />
                        )
                    })}
            </div>
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
