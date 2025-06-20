import { FaqLayout } from "@/blocks/AccordianLayout/layouts/FaqLayout/config"
import { FaqLayout2 } from "@/blocks/AccordianLayout/layouts/FaqLayout2/config"
import { AdvertismentSection1 } from "@/blocks/AdvertismentSection/layouts/AdvertismentSection1/config"
import { AdvertismentSection2 } from "@/blocks/AdvertismentSection/layouts/AdvertismentSection2/config"
import { AssosiatedBrandsLayout1 } from "@/blocks/AssosiatedBrands/layouts/AssosiatedBrandLayout1/config"
import { AssosiatedBrandsLayout2 } from "@/blocks/AssosiatedBrands/layouts/AssosiatedBrandLayout2/config"
import { Banner } from "@/blocks/Banner/config"
import { CallToAction } from "@/blocks/CallToAction/config"
import { CategoryLayout1 } from "@/blocks/CategoryShowcase/layouts/CategoryLayout1/config"
import { CategoryLayout2 } from "@/blocks/CategoryShowcase/layouts/CategoryLayout2/config"
import { ContactFormBlock } from "@/blocks/ContactForm/layouts/contactForm1/Config"
import { ContactInformationBlock } from "@/blocks/ContactInformation/layouts/contactInformation1/Config"
import { Content } from "@/blocks/Content/config"
import { CTASectionLayout1 } from "@/blocks/CTASection/layouts/CTASection1/config"
import { FeatureLayout1 } from "@/blocks/FeatureLayout/layouts/FeatureLayout1/config"
import { FeatureLayout2 } from "@/blocks/FeatureLayout/layouts/FeatureLayout2/config"
import { ImageBlock } from "@/blocks/ImageBlock/config"
import { IntroHeaderLayout1 } from "@/blocks/IntroHeader/layouts/IntroHeader1/config"
import { LetsConnectBlock } from "@/blocks/LetsConnect/layouts/LetsConnect1/Config"
import ListPageShowcase2 from "@/blocks/ListPageShowcase/layouts/ListPageShowcase2/config"
import { MediaBlock } from "@/blocks/MediaBlock/config"
import { OfferLayout1 } from "@/blocks/Offers/layouts/OfferLayout1/config"
import { BannerLayout1 } from "@/blocks/PayloadBanner/layouts/BannerLayout1/config"
import { BannerLayout2 } from "@/blocks/PayloadBanner/layouts/BannerLayout2/config"
import { BannerLayout3 } from "@/blocks/PayloadBanner/layouts/BannerLayout3/Config"
import { PayloadSectionLayout1 } from "@/blocks/PayloadSection/layouts/PayloadSection1/config"
import { ProductCardLayout1 } from "@/blocks/ProductCard/layouts/ProductCardLayout1/config"
import { FourcolumnLayout } from "@/blocks/ProductsCollection/layouts/FourcolumnLayout/config"
import { ProductShowcaseLayout } from "@/blocks/ProductsCollection/layouts/ProductShowcaseLayout/config"
import { PromoProductLayout } from "@/blocks/ProductsCollection/layouts/PromoProductLayout/config"
import { PromoProductLayout2 } from "@/blocks/ProductsCollection/layouts/PromoProductLayout2/config"
import { ThreecolumnLayout } from "@/blocks/ProductsCollection/layouts/ThreecolumnLayout/config"
import { TrendingProduct } from "@/blocks/ProductsCollection/layouts/TrendingProduct/config"
import { SeparateBlock } from "@/blocks/Separator/config"
import { ShowcaseSection1 } from "@/blocks/ShowcaseSection/layouts/ShowcaseSection1/config"
import { ShowcaseSection2 } from "@/blocks/ShowcaseSection/layouts/ShowcaseSection2/config"
import { ShowcaseSection3 } from "@/blocks/ShowcaseSection/layouts/ShowcaseSection3/config"
import { ShowcaseSection4 } from "@/blocks/ShowcaseSection/layouts/ShowcaseSection4/config"
import { ShowcaseSection5 } from "@/blocks/ShowcaseSection/layouts/ShowcaseSection5/config"
import { ValueListLayout1 } from "@/blocks/ValueList/layouts/ValueList1/config"
import deepMerge from "@/utilities/deepMerge"
import { Block, Field } from "payload"
import { SeparateBlock2 } from "@/blocks/Separator2/config"
import { Navbarlayout1 } from "@/blocks/Navbar/layout/Navbarlayout1/config"

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
      TrendingProduct,
      PromoProductLayout,
      PromoProductLayout2,
      ProductShowcaseLayout,
      ShowcaseSection1,
      ShowcaseSection2,
      ShowcaseSection3,
      AdvertismentSection1,
      AdvertismentSection2,
      AssosiatedBrandsLayout1,
      AssosiatedBrandsLayout2,
      CategoryLayout1,
      CategoryLayout2,
      FaqLayout,
      FaqLayout2,
      Content,
      BannerLayout3,
      CallToAction,
      Banner,
      MediaBlock,
      ImageBlock,
      CTASectionLayout1,
      IntroHeaderLayout1,
      PayloadSectionLayout1,
      ValueListLayout1,
      LetsConnectBlock,
      ContactInformationBlock,
      ContactFormBlock,

      SeparateBlock,
      SeparateBlock2,
      ListPageShowcase2,
      ProductCardLayout1,
      ShowcaseSection4,
      ShowcaseSection5,
      Navbarlayout1,
      ...(props?.append?.blocks ? props?.append?.blocks : []),
    ],
  }

  return deepMerge(fields, props?.overrides)
}
