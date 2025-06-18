"use client"

import { clx } from "@medusajs/ui"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function Pagination({
  page,
  totalPages,
  "data-testid": dataTestid,
}: {
  page: number
  totalPages: number
  "data-testid"?: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Function to handle page changes
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", newPage.toString())
    router.push(`${pathname}?${params.toString()}`)
  }

  // Render the component
  return (
    <div className="flex justify-center w-full mt-12">
      <div className="flex gap-3 items-end" data-testid={dataTestid}>
        <button
          className={clx("txt-xlarge-plus text-ui-fg-muted", {
            "text-ui-fg-base hover:text-ui-fg-subtle": page > 1,
            "opacity-50 cursor-not-allowed": page === 1,
          })}
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>
        <span className="txt-xlarge-plus text-ui-fg-muted items-center cursor-default">
          {page}/{totalPages}
        </span>
        <button
          className={clx("txt-xlarge-plus text-ui-fg-muted", {
            "text-ui-fg-base hover:text-ui-fg-subtle": page < totalPages,
            "opacity-50 cursor-not-allowed": page === totalPages,
          })}
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}
