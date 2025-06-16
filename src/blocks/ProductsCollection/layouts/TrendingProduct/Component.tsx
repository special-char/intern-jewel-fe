import React, { Suspense } from "react"
import Link from "next/link"
import RichText from "@components/payload/RichText"
import { TwoColumnGrid } from "../../components/TwoColumnGrid"
import SkeletonProductGrid from "@modules/skeletons/components/skeleton-product-grid"
import { ArrowRight } from "lucide-react"

interface TrendingProductProps {
  heading: string
  subtext: {
    root: any
  }
  title: string
  products: any[]
  button: any
}

const TrendingProduct = (props: TrendingProductProps) => {
  const { heading, subtext, products, button } = props

  if (!heading || heading.trim() === "") {
    return null
  }

  if (!products || products.length !== 2) {
    return null
  }

  return (
    <div style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--foreground))' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-center px-container py-16">

        {/* Left Text Section */}
        <div className="flex flex-col">
          <div className="mb-6">
            <img
              src="/images/Flower.svg"
              alt="Flower Mask"
              className="w-32 h-32 mask mask-center mask-no-repeat mask-contain"
              style={{
                maskImage: 'url(/images/Flower.svg)',
                WebkitMaskImage: 'url(/images/Flower.svg)',
                backgroundColor: 'hsl(var(--primary))'
              }}
            />

            <p
              className="pt-16 font-medium pb-4 uppercase"
              style={{
                letterSpacing: '0.1em',
                color: 'hsl(var(--primary))',
                fontSize: '1rem',
                lineHeight: '1.5rem'
              }}
            >
              shop
            </p>
            <h3 className="pb-2">{props.heading}</h3>
            <RichText data={subtext} className="-ml-7" />
          </div>

          <Link
            href={button?.link || "#"}
            className="mt-12 inline-flex items-center gap-4 transition-colors"
            style={{ fontSize: '1rem', fontWeight: 600 }}
          >
            {button?.label}
            <span className="inline-block">
              <ArrowRight style={{ color: 'hsl(var(--primary))' }} />
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
