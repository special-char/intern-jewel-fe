import configPromise from "@payload-config"
import { getPayload } from "payload"
import { draftMode } from "next/headers"
import { cache } from "react"

const queryProductBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: "products",
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      product_handle: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})

export default queryProductBySlug
