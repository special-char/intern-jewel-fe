import configPromise from "@payload-config"
import { getPayload } from "payload"
import { draftMode } from "next/headers"
import { cache } from "react"
// import { homeStatic } from "@/endpoints/seed/home-static"

// import { RenderHero } from "@/heros/RenderHero"

export const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: "pages",
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
