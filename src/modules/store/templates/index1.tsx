import { Suspense } from "react"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "./paginated-products"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const ListTemplate = ({
  sortBy,
  page,
  countryCode,
  categories,
  searchParams,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
  categories: HttpTypes.StoreProductCategory[]
  searchParams: any
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  const categoryId = categories.find(
    (category) => category.handle === searchParams.category
  )?.id

  return (
    <div
      className="flex flex-col small:flex-row small:items-start py-6 content-container"
      data-testid="category-container"
    >
      <RefinementList sortBy={sort} />
      <div className="w-full">
        <div className="mb-8 text-2xl-semi">
          <h1 data-testid="store-page-title">All products</h1>
        </div>
        <div className="flex gap-4 py-4">
          <LocalizedClientLink href={`/store`}>
            <h2>All products</h2>
          </LocalizedClientLink>
          {categories.map((category) => {
            return (
              <LocalizedClientLink
                key={category.id}
                href={`/store?category=${category.handle}`}
              >
                <h2>{category.name}</h2>
              </LocalizedClientLink>
            )
          })}
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            countryCode={countryCode}
            categoryId={categoryId}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default ListTemplate
