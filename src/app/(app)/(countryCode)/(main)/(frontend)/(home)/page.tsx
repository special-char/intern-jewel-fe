import { PayloadRedirects } from "@/components/payload/PayloadRedirects"
import { type RequiredDataFromCollectionSlug } from "payload"
import { draftMode } from "next/headers"
import { RenderBlocks } from "@/blocks/RenderBlocks"
import { LivePreviewListener } from "@/components/payload/LivePreviewListener"
import { getRegion } from "@lib/data/regions"
import PageClient from "../[slug]/page.client"
import { DEFAULT_COUNTRYCODE } from "@lib/constants"
import { queryPageBySlug } from "@lib/payload/queryPageBySlug"

export default async function Page() {
  const { isEnabled: draft } = await draftMode()
  const slug = "home"
  const url = "/" + slug

  let page: RequiredDataFromCollectionSlug<"pages"> | null

  page = await queryPageBySlug({
    slug,
  })

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  

  const { layout } = page

  const region = await getRegion(DEFAULT_COUNTRYCODE)

  if (!region) {
    return null
  }

  return (
    <>
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      {/* <RenderHero {...hero} /> */}
      <RenderBlocks blocks={layout} region={region} />
    </>
  )
}
