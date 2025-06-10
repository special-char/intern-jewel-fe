import deepMerge from "@/utilities/deepMerge"
import { Block, Field } from "payload"
import { FaqLayout } from "@/blocks/AccordianLayout/layouts/FaqLayout/config"
import { AdvertismentSection1 } from "@/blocks/AdvertismentSection/layouts/AdvertismentSection1/config"
import { AdvertismentSection2 } from "@/blocks/AdvertismentSection/layouts/AdvertismentSection2/config"
import { AssosiatedBrandsLayout1 } from "@/blocks/AssosiatedBrands/layouts/AssosiatedBrandLayout1/config"
import { AssosiatedBrandsLayout2 } from "@/blocks/AssosiatedBrands/layouts/AssosiatedBrandLayout2/config"
import { FeatureLayout1 } from "@/blocks/FeatureLayout/layouts/FeatureLayout1/config"
import { FeatureLayout2 } from "@/blocks/FeatureLayout/layouts/FeatureLayout2/config"
import { OfferLayout1 } from "@/blocks/Offers/layouts/OfferLayout1/config"
import { BannerLayout1 } from "@/blocks/PayloadBanner/layouts/BannerLayout1/config"
import { BannerLayout2 } from "@/blocks/PayloadBanner/layouts/BannerLayout2/config"
import { FourcolumnLayout } from "@/blocks/ProductsCollection/layouts/FourcolumnLayout/config"
import { ProductShowcaseLayout } from "@/blocks/ProductsCollection/layouts/ProductShowcaseLayout/config"
import { PromoProductLayout } from "@/blocks/ProductsCollection/layouts/PromoProductLayout/config"
import { ThreecolumnLayout } from "@/blocks/ProductsCollection/layouts/ThreecolumnLayout/config"
import { ShowcaseSection1 } from "@/blocks/ShowcaseSection/layouts/ShowcaseSection1/config"
import { ShowcaseSection2 } from "@/blocks/ShowcaseSection/layouts/ShowcaseSection2/config"
import { CategoryLayout1 } from "@/blocks/CategoryShowcase/layouts/CategoryLayout1/config"
import { Content } from "@/blocks/Content/config"
import { CallToAction } from "@/blocks/CallToAction/config"
import { Banner } from "@/blocks/Banner/config"
import { MediaBlock } from "@/blocks/MediaBlock/config"
import { CTASectionLayout1 } from "@/blocks/CTASection/layouts/CTASection1/config"
import { IntroHeaderLayout1 } from "@/blocks/IntroHeader/layouts/IntroHeader1/config"
import { SectionWrapperLayout1 } from "@/blocks/SectionWrapper/layouts/SectionWrapper1/config"
import { ValueListLayout1 } from "@/blocks/ValueList/layouts/ValueList1/config"
import { FaqLayout2 } from "@/blocks/AccordianLayout/layouts/FaqLayout2/config"
import { BannerLayout3 } from "@/blocks/PayloadBanner/layouts/BannerLayout3/Config"

type PropsTypes = {
  overrides?: Partial<Field> | null
  append?: {
    blocks?: Block[] | null
  } | null
}
export const layoutBlocks = (props: PropsTypes = {}) => {
  const fields: Field = {
    name: "children",
    label: "Children",
    type: "blocks",
    blocks: [
      BannerLayout1,
      BannerLayout2,
      FeatureLayout1,
      FeatureLayout2,
      OfferLayout1,
      FourcolumnLayout,
      ThreecolumnLayout,
      PromoProductLayout,
      ProductShowcaseLayout,
      ShowcaseSection1,
      ShowcaseSection2,
      AdvertismentSection1,
      AdvertismentSection2,
      AssosiatedBrandsLayout1,
      AssosiatedBrandsLayout2,
      CategoryLayout1,
      FaqLayout,
      FaqLayout2,
      Content,
      BannerLayout3,
      CallToAction,
      Banner,
      MediaBlock,
      CTASectionLayout1,
      IntroHeaderLayout1,
      SectionWrapperLayout1,
      ValueListLayout1,
      ...(props?.append?.blocks ? props?.append?.blocks : []),
    ],
  }

  return deepMerge(fields, props?.overrides)
}
