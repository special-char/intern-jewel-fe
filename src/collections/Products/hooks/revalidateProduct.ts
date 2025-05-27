import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from "payload"

import { revalidatePath, revalidateTag } from "next/cache"

import type { Product } from "../../../payload-types"

export const revalidateProductPage: CollectionAfterChangeHook<Product> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc.status === "published") {
      const path = `/store/${doc.product_handle}`

      payload.logger.info(`Revalidating product page at path: ${path}`)

      revalidatePath(path)
      revalidateTag("products-sitemap")
    }

    // If the page was previously published, we need to revalidate the old path
    if (previousDoc?.status === "published" && doc.status !== "published") {
      const oldPath = `/store/${previousDoc.product_handle}`

      payload.logger.info(`Revalidating old product page at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag("products-sitemap")
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Product> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/store/${doc?.product_handle}`
    revalidatePath(path)
    revalidateTag("products-sitemap")
  }

  return doc
}
