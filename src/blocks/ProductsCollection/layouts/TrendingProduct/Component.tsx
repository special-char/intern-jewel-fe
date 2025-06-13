import React, { Suspense } from "react"
import Link from "next/link"
import RichText from "@components/payload/RichText"
import { TwoColumnGrid } from "../../components/TwoColumnGrid"
import SkeletonProductGrid from "@modules/skeletons/components/skeleton-product-grid"

interface TrendingProductProps {
  heading: string
  subtext: {
    root: any
  }
  title: string
  products: any[]
}

const TrendingProduct = (props: TrendingProductProps) => {
  const { heading, subtext, products } = props

  if (!heading || heading.trim() === "") {
    return null // Prevent rendering when heading is empty
  }

  if (!products || products.length !== 2) {
    return null // Or return fallback UI
  }

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
            <h2 className="text-heading2 text-secondary pb-2">{props.heading}</h2>
            <RichText
              data={subtext}
              className="-ml-7"
            />
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
        {products && products.length > 0 && (
          <Suspense fallback={<SkeletonProductGrid />}>
            <TwoColumnGrid products={products} blockType="design3" />
          </Suspense>
        )}

      </div>
    </div>

  )
}

export default TrendingProduct
