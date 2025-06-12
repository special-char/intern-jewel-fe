import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "../../styles/globals.css"
import { Playfair_Display, DM_Sans } from "next/font/google"
import BigBanner from "@/blocks/PayloadBanner/layouts/BannerLayout3/Component"
import EveCollection from "@/blocks/PayloadBanner/layouts/CollectionSection/Component"
import IndexPage from "@/blocks/PayloadBanner/components/ImageSection"

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
})
const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body className={`${playfair_display.variable} ${dm_sans.variable}`}>
        <main className="relative">{props.children}</main>
      {/* <IndexPage/> */}
      {/* <EveCollection/> */}
      {/* <SkeletonProductGrid/> */}
      </body>
    </html>
  )
}
