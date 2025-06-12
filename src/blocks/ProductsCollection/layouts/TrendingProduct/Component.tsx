import React, { Suspense } from "react"
import Link from "next/link"
import RichText from "@components/payload/RichText"
import { TwoColumnGrid } from "../../components/TwoColumnGrid"
import SkeletonProductGrid from "@modules/skeletons/components/skeleton-product-grid"

interface TrendingProductProps {
  subtext: {
    root: any
  }
  title: string
  products: any[]
  button: any
}

const DummyImageGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
    <div className="flex justify-center items-center bg-card p-4 min-h-[450px] border border-border rounded-lg">
      <img src="/images/product1.avif" alt="Dummy Product 1" className="object-contain max-h-[400px]" />
    </div>
    <div className="flex justify-center items-center bg-card p-4 min-h-[450px] border border-border rounded-lg">
      <img src="/images/product2.avif" alt="Dummy Product 2" className="object-contain max-h-[400px]" />
    </div>
  </div>
)

const defaultSubtext = {
  root: {
    children: [
      {
        type: "paragraph",
        children: [
          {
            text: "Discover our most popular trending products handpicked just for you.",
            type: "text",
            format: 0,
            mode: "normal",
            style: "",
            detail: 0,
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        textFormat: 0,
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
  version: 1,
}

const TrendingProduct = (props: TrendingProductProps) => {
  const { subtext = defaultSubtext, title, products, button } = props

  return (
    <div className="bg-neutral-100 text-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-center px-container py-20">

        {/* Left Text Section */}
        <div
          className="flex flex-col"
        // className="flex flex-col py-24 sm:py-20 md:py-24 pl-4 sm:pl-6 md:pl-12 lg:pl-16"
        >
          <div className="mb-6 ">
            <img
              src="/images/Flower.svg"
              alt="Flower Mask"
              className="w-32 h-32 bg-primary mask mask-center mask-no-repeat mask-contain"
              style={{
                maskImage: 'url(/images/Flower.svg)',
                WebkitMaskImage: 'url(/images/Flower.svg)',
              }}
            />

            <p className="pt-16 tracking-[0.5em] text-primary font-medium pb-4 text-lg uppercase">
              shop
            </p>

            {/* <h2 className="text-heading2 text-secondary pb-4">Trending Products</h2> */}
            {/* <div className="text-muted-foreground text-large-regular leading-relaxed"> */}
            <RichText
              data={subtext}
              className="-ml-8"
            />
            {/* </div> */}
          </div>

          <Link
            href="#"
            className="mt-12 inline-flex items-center gap-4 text-large-semi text-secondary hover:text-foreground transition"
          >
            View All Trending
            <span className="text-primary w-8 h-8 inline-block">
              <img src="/images/arrow.svg" alt="Right Arrow" className="w-full h-full object-contain" />
            </span>
          </Link>
        </div>

        {/* Right Product Section */}
        {products && products.length > 0 ? (
          <Suspense fallback={<SkeletonProductGrid />}>
            <TwoColumnGrid products={products} blockType="design3" />
          </Suspense>
        ) : (
          <DummyImageGrid />
        )}
      </div>
    </div>

  )
}

export default TrendingProduct
