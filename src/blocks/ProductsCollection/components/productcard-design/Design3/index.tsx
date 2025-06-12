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
    style={{
      display: "grid",
      gridTemplate: "subgrid",
      gridTemplateRows: "1fr minmax(70px, auto) auto",
    }}
    className="w-full aspect-3/4 gap-4 group ease-in-out hover:cursor-pointer relative overflow-hidden"
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
        variant="animated"
        className="absolute left-0 bottom-0 w-full translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10 btn-darkmode rounded-none"
      >
        Add to Cart
      </Button>
    </div>

    <div className="flex flex-col">
      <h3 className="text-body font-dmsans font-bold line-clamp-2 flex-1 group-hover:text-primary text-center">
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