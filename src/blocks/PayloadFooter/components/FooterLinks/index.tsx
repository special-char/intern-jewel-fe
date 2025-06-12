import { FooterLayout1 } from "@/payload-types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const FooterLinks = ({
  footerLinks,
}: {
  footerLinks: FooterLayout1["footerLinks"]
}) => (
  <>
    {footerLinks?.map((section) => (
      <div key={section.id} className="flex flex-col gap-12">
        <h3 className="font-dmsans text-subtitle text-primary font-semibold">
          {section.title}
        </h3>
        <div className="space-y-2 text-caption">
          {section.items.map((item) => (
            <LocalizedClientLink
              href={item.link.url || ""}
              key={item.id}
              className="flex hover:text-primary"
            >
              {item.link.label}
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    ))}
  </>
)

export default FooterLinks
