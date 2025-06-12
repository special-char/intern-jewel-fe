import { FooterLayout1 as FooterLayoutType } from "@/payload-types"
import AddressComponent from "../../components/AddressComponent"
import FooterLinks from "../../components/FooterLinks"
import LegalLinks from "../../components/LegalLinks"
import Newsletter from "../../components/Newsletter"

export function FooterLayout1(props: FooterLayoutType) {
  const { legalLinks, footerLinks, address, newsletter } = props

  return (
    <footer className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-12">
          <Newsletter
            title={newsletter.title}
            description={newsletter.description}
            button={newsletter.button}
          />
          <AddressComponent address={address} />
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-6">
          <FooterLinks footerLinks={footerLinks} />
        </div>
      </div>
      <LegalLinks legalLinks={legalLinks} />
    </footer>
  )
}
