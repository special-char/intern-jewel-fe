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
    <header className="absolute top-0 inset-x-0 z-50 text-card-foreground px-4 py-2 md:px-8 lg:px-20">
      {/* Mobile + Tablet Header */}
      <div className="flex items-center justify-between lg:hidden">
        {/* Mobile SideNav */}
        <SideNav tree={tree} menu={menu} />

        {/* Logo Centered */}
        <div className="flex justify-center flex-1">
          <Logo
            desktopLogo={desktopLogo as Media}
            mobileLogo={mobileLogo as Media}
          />
        </div>

        {/* Cart */}
        <div className="ml-auto pl-2">
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
                <span className="absolute -top-2 -right-2 bg-primary text-background text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </LocalizedClientLink>
            }
          >
            <CartButton />
          </Suspense>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between h-20">
        {/* Left - Navigation */}
        <div className="flex items-center gap-6 xl:gap-10 min-w-0 flex-shrink">
          <ProductLinks tree={tree} thumbnail={thumbnail as Media} />
          <NavLinks menu={menu} />
          <AboutContact />
        </div>

        {/* Center - Logo */}
        <div className="flex justify-center flex-1 px-4">
          <Logo
            desktopLogo={desktopLogo as Media}
            mobileLogo={mobileLogo as Media}
          />
        </div>

        {/* Right - Search, Phone, Cart */}
        <div className="flex items-center gap-4 xl:gap-6">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2">
            <input
              type="text"
              placeholder="Search product..."
              className="bg-transparent border-b border-card-foreground focus:outline-none placeholder-card-foreground text-caption w-40 md:w-48"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-card-foreground"
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

          <div className="hidden md:block border-l border-card-foreground/30 h-6" />

          {/* Phone */}
          <div className="hidden md:flex items-center gap-2">
            <Phone className="h-5 text-card-foreground" />
            <LocalizedClientLink
              href={`tel:${contactNumber}`}
              className="text-sm text-card-foreground"
            >
              {contactNumber}
            </LocalizedClientLink>
          </div>

          <div className="hidden md:block border-l border-primary/30 h-6" />

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
