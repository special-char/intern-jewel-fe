import ProductPrice from "@modules/products/components/product-price"
import { HttpTypes } from "@medusajs/types"
import { ImageMedia } from "@components/payload/Media/ImageMedia"

const Design2 = ({
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
    className="w-full aspect-3/4 gap-4 group ease-in-out hover:cursor-pointer"
  >
    <div className="relative w-full aspect-square bg-card">
      <ImageMedia
        src={product?.thumbnail || product?.images?.[0]?.url || ("" as any)}
        alt={product.title}
        fill
        imgClassName="object-contain group-hover:scale-110 duration-300 ease-in-out p-4 "
      />
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
    {/* <Button>Add to Cart</Button> */}
  </div>
)

export default Design2
