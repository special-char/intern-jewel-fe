"use client"

import React, { useState, useRef, useEffect } from "react"
import { Search, Phone, ShoppingCart, Menu, X, ChevronDown } from "lucide-react"

import type { HeaderProps } from "./Config"

export const HeaderLayout3: React.FC<HeaderProps> = ({
  logo = { text: "AXELS", href: "/" },
  navigation = [],
  searchPlaceholder = "Search product...",
  phoneNumber = "(+123) 456 7890",
  cartCount = 0,
  onSearch,
  onCartClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (title: string) => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current)
    setActiveMegaMenu(title)
  }

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 150)
  }

  const handleMegaMenuMouseEnter = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) onSearch(searchQuery)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleMobileMegaMenu = (title: string) => {
    setActiveMegaMenu(activeMegaMenu === title ? null : title)
  }

  useEffect(() => {
    return () => {
      if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current)
    }
  }, [])

  return (
    <header className="relative bg-black text-white">
      <div className="flex items-center justify-between h-16 lg:h-20 px-4">
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 hover:bg-gray-800 rounded-md"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() =>
                item.megaMenu?.length && handleMouseEnter(item.title)
              }
              onMouseLeave={handleMouseLeave}
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="flex items-center space-x-1 text-sm font-medium hover:text-gray-300 py-2"
                >
                  <span>{item.title}</span>
                  {item.megaMenu?.length ? <ChevronDown size={16} /> : null}
                </a>
              ) : (
                <button className="flex items-center space-x-1 text-sm font-medium hover:text-gray-300 py-2">
                  <span>{item.title}</span>
                  {item.megaMenu?.length ? <ChevronDown size={16} /> : null}
                </button>
              )}
            </div>
          ))}
        </nav>

        <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
          <a href={logo.href} className="text-2xl lg:text-3xl font-bold">
            {logo.image ? (
              <img src={logo.image} alt="Logo" className="h-8 lg:h-10" />
            ) : (
              logo.text
            )}
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-b border-gray-600 px-2 py-1 text-sm w-40 xl:w-48"
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2"
            >
              <Search size={16} />
            </button>
          </form>

          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center space-x-2 text-sm hover:text-gray-300"
          >
            <Phone size={16} />
            <span className="hidden xl:inline">{phoneNumber}</span>
          </a>

          <button onClick={onCartClick} className="relative">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <button onClick={onCartClick} className="lg:hidden relative p-2">
          <ShoppingCart size={20} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {activeMegaMenu && (
        <section className="hidden lg:block absolute top-full left-0 right-0 z-50 bg-white text-black rounded-b-lg shadow-lg">
          <div
            onMouseEnter={handleMegaMenuMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="mx-auto px-8 py-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {navigation
                .find((item) => item.title === activeMegaMenu)
                ?.megaMenu?.map((menuItem) => (
                  <a
                    key={menuItem.title}
                    href={menuItem.href}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="w-full aspect-[3/4] overflow-hidden rounded-lg">
                      <img
                        src={
                          typeof menuItem.image === "string"
                            ? menuItem.image
                            : menuItem.image?.url
                        }
                        alt={menuItem.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 flex items-center gap-2 font-medium text-gray-800">
                      {menuItem.title}
                      <ChevronDown
                        className="rotate-[-90deg] text-yellow-600 group-hover:translate-x-1 transition-transform duration-300"
                        size={16}
                      />
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </section>
      )}

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 z-50">
          <div className="px-4 py-4 space-y-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-sm"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Search size={16} />
              </button>
            </form>

            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.title}>
                  {item.megaMenu?.length ? (
                    <>
                      <button
                        onClick={() => toggleMobileMegaMenu(item.title)}
                        className="flex justify-between w-full py-3 px-2 hover:bg-gray-800 rounded-md"
                      >
                        <span className="font-medium">{item.title}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            activeMegaMenu === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeMegaMenu === item.title && (
                        <div className="mt-2 pl-4 space-y-2">
                          {item.megaMenu.map((menuItem) => (
                            <a
                              key={menuItem.title}
                              href={menuItem.href}
                              className="flex items-center space-x-3 py-2 px-2 hover:bg-gray-800 rounded-md"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <img
                                src={
                                  typeof menuItem.image === "string"
                                    ? menuItem.image
                                    : menuItem.image?.url
                                }
                                alt={menuItem.title}
                                className="w-12 h-12 object-cover rounded-md"
                              />
                              <span className="text-sm">{menuItem.title}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-3 px-2 hover:bg-gray-800 rounded-md font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center space-x-3 py-3 px-2 hover:bg-gray-800 rounded-md"
            >
              <Phone size={16} />
              <span className="text-sm">{phoneNumber}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
