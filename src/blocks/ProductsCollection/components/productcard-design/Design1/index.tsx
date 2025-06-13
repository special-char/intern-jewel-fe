import { ImageMedia } from "@components/payload/Media/ImageMedia";
import { HttpTypes } from "@medusajs/types";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import ProductPrice from "@modules/products/components/product-price";

const Design1 = ({ product, variant } : {product : HttpTypes.StoreProduct , variant : HttpTypes.StoreProductVariant}) => (
    <LocalizedClientLink
      href={`/store/${product.handle}`}
      style={{
        display: "grid",
        gridTemplate: "subgrid",
        gridTemplateRows: "1fr minmax(60px, auto)",
      }}
      className="w-full aspect-4/3 bg-card text-card-foreground p-4 md:p-8 gap-6 group hover:border-primary hover:border ease-in-out hover:cursor-pointer"
    >
      <div className="relative w-full aspect-4/3 ">
        <ImageMedia
          src={product?.thumbnail || product?.images?.[0].url || ("" as any)}
          alt={product.title}
          fill
          imgClassName="object-contain group-hover:scale-110 group-hover:rotate-12 duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-body font-dmsans text-center font-bold line-clamp-1 flex-1 group-hover:text-primary">
          {product.title}
        </h3>
        <ProductPrice product={product} variant={variant} className="text-center" />
      </div>
    </LocalizedClientLink>
  );


  export default Design1;