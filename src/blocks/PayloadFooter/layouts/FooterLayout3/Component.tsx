import { FooterLayout3 as FooterLayoutType } from "@/payload-types"
import Newsletter from "../../components/Newsletter4"
import AddressComponent from "../../components/AddressComponent"
import FooterLinks from "../../components/FooterLinks"
import LegalLinks from "../../components/LegalLinks"

export function FooterLayout3(props: FooterLayoutType) {
  const { legalLinks, footerLinks, address, newsletter } = props

  return (
    <footer className="bg-[#222222] text-white py-16">
      <div className="content-container-no-padding space-y-16">
        {/* Newsletter Section - side by side */}
        <div className="border-b border-neutral-700 pb-16">
          <Newsletter
            title={newsletter.title}
            description={newsletter.description}
            button={newsletter.button}
          />
        </div>

        {/* Main Footer Section: Links + Address */}
        <div className="flex flex-wrap gap-x-20 gap-y-20 justify-start items-stretch pb-16">
          {/* Footer Links */}
          <div className="w-full sm:basis-[55%] grid grid-cols-2 sm:grid-cols-4 gap-8 text-base-regular">
            <FooterLinks footerLinks={footerLinks} />
          </div>

          {/* Address and Logo */}
          <div className="flex-1 flex flex-col lg:items-end">
            <div className="flex flex-col items-start">
              {/* <h2 className="font-['Playfair_Display'] text-[40px] tracking-widest">
                AXELS
              </h2> */}
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
