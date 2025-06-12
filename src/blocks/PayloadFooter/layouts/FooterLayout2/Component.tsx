import { FooterLayout2 as FooterLayoutType } from "@/payload-types"
import AddressComponent from "../../components/AddressComponent"
import FooterLinks from "../../components/FooterLinks"
import LegalLinks from "../../components/LegalLinks"
import Newsletter from "../../components/Newsletter"

export function FooterLayout2(props: FooterLayoutType) {
  const { legalLinks, footerLinks, address, newsletter } = props

  return (
    <footer className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 bg-card p-10">
        <AddressComponent address={address} />
        <div className="grid grid-cols-2 gap-6">
          <FooterLinks footerLinks={footerLinks} />
        </div>

        <Newsletter
          title={newsletter.title}
          description={newsletter.description}
          button={newsletter.button}
        />
      </div>
      <LegalLinks legalLinks={legalLinks} />
    </footer>
  )
}
