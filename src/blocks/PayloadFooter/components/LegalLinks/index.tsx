import { FooterLayout1, Media } from "@/payload-types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const LegalLinks = ({
  legalLinks,
}: {
  legalLinks: FooterLayout1["legalLinks"]
}) => {
  return (
    <div className="border-t mt-10 pt-6 text-caption flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex gap-4">
        {legalLinks?.links?.map(({ link }) => (
          <LocalizedClientLink
            key={link.label}
            href={link.url || ""}
            className="hover:underline"
          >
            <h4 className="text-body font-dmsans">{link.label}</h4>
          </LocalizedClientLink>
        ))}
      </div>
      <div className="flex gap-6">
        {legalLinks?.images?.map(({ image, id }) => (
          <div key={id} className="relative w-6 aspect-square">
            <Image
              src={(image as Media)?.url || ""}
              alt={(image as Media).alt || "social icon"}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LegalLinks
