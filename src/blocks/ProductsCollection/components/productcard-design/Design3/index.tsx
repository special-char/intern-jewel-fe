import ProductPrice from "@modules/products/components/product-price"
import { HttpTypes } from "@medusajs/types"
import { Button } from "@lib/components/ui/button"
import { ImageMedia } from "@components/payload/Media/ImageMedia"

const Design3 = ({
  product,
  variant,
}: {
  product: HttpTypes.StoreProduct
  variant: HttpTypes.StoreProductVariant
}) => (
  <div
    className="w-full aspect-3/4 flex flex-col gap-4 group ease-in-out hover:cursor-pointer relative overflow-hidden"
  >
    <div className="relative w-full aspect-square bg-card overflow-hidden flex items-center justify-center">
      <div className="relative w-4/5 h-4/5 max-w-full max-h-full">
        <ImageMedia
          src={product?.thumbnail || product?.images?.[0]?.url || ("" as any)}
          alt={product.title}
          fill
          imgClassName="object-contain group-hover:scale-110 duration-300 ease-in-out"
        />
      </div>
      <Button
        variant="design3"
        className="absolute left-0 bottom-0 w-full translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10 rounded-none"
      >
        Add to Cart
      </Button>
    </div>
    <div className="flex flex-col justify-center px-2 pb-2 md:pb-0">
      <h3 className="text-body font-dmsans font-bold line-clamp-2 group-hover:text-primary text-center text-sm sm:text-base">
        {product.title}
      </h3>
      <ProductPrice
        product={product}
        variant={variant}
        className="text-center"
      />
    </div>
  </div>
)

export default Design3