import { Suspense } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { Phone } from "lucide-react"
import { HeaderLayout3 as firstLayout, Media } from "@/payload-types"
import { Logo } from "../../components/Logo/Component"
import NavLinks from "../../components/Navlink/Component"
import AboutContact from "../../components/AboutContact"
import ProductLinks from "../../components/ProductLink/Component"
import SideNav from "../../components/SideNav"

export default async function HeaderLayout3(props: firstLayout) {
  const { desktopLogo, mobileLogo, contactNumber, menu, tree, thumbnail } =
    props

  return (
    <header className="sticky top-0 inset-x-0 z-50 text-primary bg-background px-4 py-3 md:px-12 md:py-0 shadow-md">
      <div className="flex items-center justify-between lg:hidden">
        {/* Mobile - SideNav */}
        <SideNav tree={tree} menu={menu} />

        {/* Center - Logo */}
        <div className="flex justify-center flex-1">
          <Logo
            desktopLogo={desktopLogo as Media}
            mobileLogo={mobileLogo as Media}
          />
        </div>

        {/* Right - Cart */}
        <div className="ml-auto pl-4">
          <Suspense
            fallback={
              <LocalizedClientLink
                className="hover:text-primary flex relative"
                href="/cart"
                data-testid="nav-cart-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.3h12.1M16 17a1 1 0 11-2 0 1 1 0 012 0zm-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-primary text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </LocalizedClientLink>
            }
          >
            <CartButton />
          </Suspense>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-between h-24">
        {/* Left - Navigation Links */}
        <div className="flex gap-10 items-center">
          <ProductLinks tree={tree} thumbnail={thumbnail as Media} />
          <NavLinks menu={menu} />
          <AboutContact />
        </div>

        {/* Center - Logo */}
        <div className="flex justify-center flex-1">
          <Logo
            desktopLogo={desktopLogo as Media}
            mobileLogo={mobileLogo as Media}
          />
        </div>

        {/* Right - Search, Phone, Cart */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search product..."
              className="bg-transparent border-none focus:outline-none placeholder-primary text-caption"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>

          <div className="border-l border-primary/30 h-6" />

          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone className="h-5 text-primary" />
            <LocalizedClientLink
              href={`tel:${contactNumber}`}
              className="text-sm text-primary"
            >
              {contactNumber}
            </LocalizedClientLink>
          </div>

          <div className="border-l border-primary/30 h-6" />

          {/* Cart */}
          <Suspense
            fallback={
              <LocalizedClientLink
                className="hover:text-primary flex gap-2 relative"
                href="/cart"
                data-testid="nav-cart-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.3h12.1M16 17a1 1 0 11-2 0 1 1 0 012 0zm-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-primary text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
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
