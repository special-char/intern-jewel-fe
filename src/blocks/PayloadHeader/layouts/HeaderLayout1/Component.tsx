import { Suspense } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { Phone } from "lucide-react"
import { HeaderLayout1 as firstLayout, Media } from "@/payload-types"
import { Logo } from "../../components/Logo/Component"
import NavLinks from "../../components/Navlink/Component"
import AboutContact from "../../components/AboutContact"
import ProductLinks from "../../components/ProductLink/Component"
import SideNav from "../../components/SideNav"


export default async function HeaderLayout1(props: firstLayout) {
  const { desktopLogo, mobileLogo, contactNumber, menu, tree, thumbnail } =
    props


  return (
    <header className="sticky top-0 inset-x-0 z-50 group h-[6rem] md:h-[8.5rem] flex flex-col gap-6 justify-center">
      <div className="max-md:hidden flex  justify-between border-b pb-2">
        <span className="flex gap-2 ">
          <Phone className="text-primary h-5" />
          <LocalizedClientLink
            href={`tel:${contactNumber}`}
            className="text-caption"
          >
            {contactNumber}
          </LocalizedClientLink>
        </span>
        <div className="flex  gap-x-6 h-full">
          <LocalizedClientLink href="/account" className="text-caption">
            Account
          </LocalizedClientLink>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="lg:hidden">
          <SideNav tree={tree} menu={menu}/>
        </div>
        <div className="h-full flex">
          <Logo
            desktopLogo={desktopLogo as Media}
            mobileLogo={mobileLogo as Media}
          />
        </div>
        <div className="max-lg:hidden flex h-full gap-10">
          <ProductLinks tree={tree} thumbnail={thumbnail as Media} />
          <NavLinks menu={menu}/>
          <AboutContact />
        </div>
        <div className="flex gap-x-6 h-full  justify-end">
          <Suspense
            fallback={
              <LocalizedClientLink
                className="hover:text-ui-fg-base flex gap-2"
                href="/cart"
                data-testid="nav-cart-link"
              >
                Cart (0)
              </LocalizedClientLink>
            }
          >
            <CartButton />
          </Suspense>
        </div>
      </div>
    </header>
  )
}
