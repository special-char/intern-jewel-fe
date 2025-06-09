import React, { Fragment } from "react"
import type { Page } from "@/payload-types"
import { ContentBlock } from "@/blocks/Content/Component"
import { FormBlock } from "@/blocks/Form/Component"
import { MediaBlock } from "@/blocks/MediaBlock/Component"
import { StoreRegion } from "@medusajs/types"
import { PayloadBanner } from "./PayloadBanner/Component"
import { PayloadButton } from "./PayloadButton/Component"
import { BannerLayout1 } from "./PayloadBanner/layouts/BannerLayout1/Component"
import { BannerLayout2 } from "./PayloadBanner/layouts/BannerLayout2/Component"
import { OutlineButton } from "./PayloadButton/layouts/OutlineButton/Component"
import { AnimatedButton } from "./PayloadButton/layouts/AnimatedButton/Component"
import { FilledButton } from "./PayloadButton/layouts/FilledButton/Component"
import { HoverButton } from "./PayloadButton/layouts/HoverButton/Component"
import { FeatureLayout1 } from "./FeatureLayout/layouts/FeatureLayout1/Component"
import { FeatureLayout } from "./FeatureLayout/Component"
import { FeatureLayout2 } from "./FeatureLayout/layouts/FeatureLayout2/Component"
import { AssosiatedBrands } from "./AssosiatedBrands/Component"
import { AssosiatedBrandLayout1 } from "./AssosiatedBrands/layouts/AssosiatedBrandLayout1/Component"
import { AssosiatedBrandLayout2 } from "./AssosiatedBrands/layouts/AssosiatedBrandLayout2/Component"
import { Offers } from "./Offers/Component"
import { OfferLayout1 } from "./Offers/layouts/OfferLayout1/Component"
import { ProductsCollection } from "./ProductsCollection/Component"
import { ThreecolumnLayout } from "./ProductsCollection/layouts/ThreecolumnLayout/Component"
import { ProductShowcaseLayout } from "./ProductsCollection/layouts/ProductShowcaseLayout/Component"
import { ShowcaseSection } from "./ShowcaseSection/Component"
import { ShowcaseSection1 } from "./ShowcaseSection/layouts/ShowcaseSection1/Component"
import { ShowcaseSection2 } from "./ShowcaseSection/layouts/ShowcaseSection2/Component"
import { FourcolumnLayout } from "./ProductsCollection/layouts/FourcolumnLayout/Component"
import { PromoProductLayout } from "./ProductsCollection/layouts/PromoProductLayout/Component"
import { AdvertismentSection } from "./AdvertismentSection/Component"
import { AdvertismentSection1 } from "./AdvertismentSection/layouts/AdvertismentSection1/Component"
import { AccordianLayout } from "./AccordianLayout/Component"
import { FaqLayout } from "./AccordianLayout/layouts/FaqLayout/Component"
import { FooterLayout1 } from "./PayloadFooter/layouts/FooterLayout1/Component"
import { CategoryShowcase } from "./CategoryShowcase/Component"
import { CategoryLayout1 } from "./CategoryShowcase/layouts/CategoryLayout1/Component"
import { FooterLayout2 } from "./PayloadFooter/layouts/FooterLayout2/Component"
import { AdvertismentSection2 } from "./AdvertismentSection/layouts/AdvertismentSection2/Component"
import { HomeLayout1 } from "../layout/HomeLayout/layouts/HomeLayout1/Component"
import { HomeLayout2 } from "../layout/HomeLayout/layouts/HomeLayout2/Component"
import { BannerLayout3 } from "./PayloadBanner/layouts/BannerLayout3/Component"
import { FooterLayout3 } from "./PayloadFooter/layouts/FooterLayout3/Component"
import { CTASectionLayout1 } from "./CTASection/layouts/CTASection1/Component"
import { IntroHeaderLayout1 } from "./IntroHeader/layouts/IntroHeader1/Component"
import { SectionWrapperLayout1 } from "./SectionWrapper/layouts/SectionWrapper1/Component"
import { ValueListLayout1 } from "./ValueList/layouts/ValueList1/Component"
import { AboutUs1 } from "../layout/AboutUs/layouts/AboutUs1/Component"

const blockComponents = {
  content: ContentBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  payloadBanner: PayloadBanner,
  bannerLayout1: BannerLayout1,
  banner2: BannerLayout2,
  bannerLayout3: BannerLayout3,

  payloadButton: PayloadButton,
  outlineButton: OutlineButton,
  animatedButton: AnimatedButton,
  filledButton: FilledButton,
  hoverButton: HoverButton,
  featureLayout: FeatureLayout,
  featureLayout1: FeatureLayout1,
  featureLayout2: FeatureLayout2,
  assosiatedBrands: AssosiatedBrands,
  assosiatedBrandLayout1: AssosiatedBrandLayout1,
  assosiatedBrandLayout2: AssosiatedBrandLayout2,
  offers: Offers,
  offerLayout1: OfferLayout1,
  productsCollection: ProductsCollection,
  threecolumnLayout: ThreecolumnLayout,
  fourcolumnLayout: FourcolumnLayout,
  promoProduct: PromoProductLayout,
  productShowcase: ProductShowcaseLayout,
  showcaseSection: ShowcaseSection,
  showcaseLayout1: ShowcaseSection1,
  showcaseLayout2: ShowcaseSection2,
  advertismentSection: AdvertismentSection,
  advertismentSection1: AdvertismentSection1,
  advertismentSection2: AdvertismentSection2,
  accordianLayout: AccordianLayout,
  faqLayout: FaqLayout,
  categoryShowcase: CategoryShowcase,
  categoryLayout1: CategoryLayout1,
  footer1: FooterLayout1,
  footer2: FooterLayout2,
  footer3: FooterLayout3,
  homeLayout1: HomeLayout1,
  homeLayout2: HomeLayout2,
  ctaSectionBlock: CTASectionLayout1,
  introHeaderBlock: IntroHeaderLayout1,
  SectionWrapperBlock: SectionWrapperLayout1,
  ValueListBlock: ValueListLayout1,
  aboutUs1:AboutUs1
}

export const RenderBlocks: React.FC<{
  blocks: Page["layout"][0][]
  region: StoreRegion
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType as keyof typeof blockComponents]

            if (Block) {
              return (
                <div key={index}>
                  <Block
                    {...block}
                    disableInnerContainer
                    region={props.region}
                  />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
