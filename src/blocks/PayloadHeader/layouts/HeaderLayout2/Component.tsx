import { Suspense } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { Phone } from "lucide-react"
import Navlinks from "../../components/Navlink/Component"
import { HeaderLayout1 as firstLayout, Media } from "@/payload-types"
import AboutContact from "../../components/AboutContact"
import { Logo } from "../../components/Logo/Component"
import ProductLinks from "../../components/ProductLink/Component"
import Search from "../../components/Search/Component"
import SideNav from "../../components/SideNav"

export default async function HeaderLayout2({
  desktopLogo,
  mobileLogo,
  contactNumber,
  menu,
  tree,
  thumbnail,
}: firstLayout) {
  return (
     <header className="sticky top-0 inset-x-0 z-50 group h-[5rem] lg:h-[10rem] flex flex-col justify-center"> 
      <div className="flex  justify-between lg:border-b flex-1">
        <div className="flex items-center">
          <div className="max-lg:hidden">
            <Search />
          </div>
          <div className="lg:hidden">
            <SideNav tree={tree} menu={menu} />
          </div>
        </div>

        <div className="h-full flex items-center lg:justify-center">
          <Logo
            desktopLogo={desktopLogo as Media}
            mobileLogo={mobileLogo as Media}
          />
        </div>

        <div className="flex justify-end items-center gap-x-6 lg:w-40">
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

      <div className="flex justify-between items-center max-lg:hidden h-full flex-1">
        <span className="flex gap-2 flex-1">
          <Phone className="text-primary h-5" />
          <LocalizedClientLink
            href={`tel:${contactNumber}`}
            className="text-caption"
          >
            {contactNumber}
          </LocalizedClientLink>
        </span>

        <div className="flex gap-10">
          <ProductLinks tree={tree} thumbnail={thumbnail as Media} />
          <Navlinks menu={menu} />
          <AboutContact />
        </div>

        <LocalizedClientLink href="/account" className="text-caption flex-1">
          <p className="text-end">Account</p>
        </LocalizedClientLink>
      </div>
    </header>
  )
}
