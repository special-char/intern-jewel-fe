import { ImageMedia } from "@components/payload/Media/ImageMedia"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPrice from "@modules/products/components/product-price"
import Image from "next/image"

const design4 = ({
  product,
  variant,
}: {
  product: HttpTypes.StoreProduct
  variant: HttpTypes.StoreProductVariant
}) => (
  <div className="flex flex-col items-center gap-2">
    <LocalizedClientLink
      href={`/store/${product.handle}`}
      style={{
        display: "grid",
        gridTemplate: "subgrid",
        gridTemplateRows: "1fr minmax(1px, auto)",
      }}
      className="w-full  place-items-center  bg-card text-card-foreground  md:group hover:border-primary hover:border ease-in-out hover:cursor-pointer"
    >
      <div className="relative w-full aspect-[4/5] bg-card">
        <ImageMedia
          src={product?.thumbnail || product?.images?.[0]?.url || ("" as any)}
          alt={product.title}
          fill
          imgClassName="object-contain item-center hover:bg-primary group-hover:scale-110 duration-300 ease-in-out"
        />
      </div>
    </LocalizedClientLink>
    <div className="flex flex-col">
      <h3 className="text-base-regular font-bold line-clamp-1 flex-1 group-hover:text-primary">
        {product.title}
      </h3>
      <ProductPrice product={product} variant={variant} />
    </div>
  </div>
)

export default design4
