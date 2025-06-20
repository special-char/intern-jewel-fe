"use client"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Menu = {
  label: string
  link: string
}

interface Props {
  menus: Menu[]
}

export const Navbarlayout1: React.FC<Props> = ({ menus }) => {
  const pathname = usePathname()

  return (
    <nav className="w-full bg-[#FCFBF9] py-6">
      <div className="content-container">
        <div className="flex items-center space-x-6">
          {menus?.map((menu, idx) => (
            <React.Fragment key={menu.link}>
              <Link
                href={menu.link}
                className={
                  pathname === menu.link
                    ? "font-normal text-neutral-900 hover:font-bold"
                    : "font-bold text-neutral-500"
                }
              >
                {menu.label}
              </Link>
              {idx < menus.length - 1 && (
                <span className="h-5 border-l border-neutral-300" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  )
}
