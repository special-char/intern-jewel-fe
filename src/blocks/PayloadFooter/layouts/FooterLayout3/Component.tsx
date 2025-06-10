import { FooterLayout3 as FooterLayoutType } from "@/payload-types"
import Newsletter from "../../components/Newsletter3"
import AddressComponent from "../../components/AddressComponent"
import FooterLinks from "../../components/FooterLinks"
import LegalLinks from "../../components/LegalLinks"

export function FooterLayout3(props: FooterLayoutType) {
  const { legalLinks, footerLinks, address, newsletter } = props

  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="content-container space-y-16">
        {/* Newsletter Section - side by side */}
        <div className="border-b border-neutral-700 pb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-2">
              <p className="text-small-regular text-yellow-600 uppercase tracking-[0.3em]">
                Newsletter
              </p>
              <h2 className="text-3xl-regular">Get Monthly Updates</h2>
            </div>
            <div className="w-full item-end lg:w-1/2 lg:flex lg:justify-end">
              <Newsletter
                title={newsletter.title}
                description={newsletter.description}
                button={newsletter.button}
              />
            </div>
          </div>
        </div>

        {/* Main Footer Section: Links + Address */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12">
          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-base-regular">
            <FooterLinks footerLinks={footerLinks} />
          </div>

          {/* Address and Logo */}
          <div className="flex flex-col lg:items-end">
            <div className="flex flex-col items-start">
              <h2 className="text-3xl-regular tracking-widest">AXELS</h2>
              <AddressComponent address={address} />
            </div>
          </div>
        </div>

        {/* Bottom Legal and Social Links */}
        <LegalLinks legalLinks={legalLinks} />
      </div>
    </footer>
  )
}
