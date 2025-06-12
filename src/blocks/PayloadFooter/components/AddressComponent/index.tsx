import { FooterLayout1, Media } from "@/payload-types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

const AddressComponent = ({
  address,
}: {
  address: FooterLayout1["address"]
}) => (
  <div className="flex flex-col gap-10">
    <div className="relative w-28 aspect-4/1">
      <h2 className="sr-only">AXELS</h2>
      <Image
        loading="lazy"
        src={(address?.logo as Media).url || ""}
        alt="logo"
        fill
        className="object-contain"
        sizes="(max-width: 425px) 50vw, 15vw"
      />
    </div>
    <div className="flex flex-col gap-4">
      <LocalizedClientLink
        href={`https://www.google.com/maps?q=${encodeURIComponent(
          address.location
        )}`}
        className="flex gap-4 hover:text-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MapPin className="text-primary" />
        <div>
          <h3 className="font-semibold text-body font-dmsans">Location</h3>
          <p className="text-caption">{address.location}</p>
        </div>
      </LocalizedClientLink>

      <LocalizedClientLink href={`tel:${address.phone}`} className="flex gap-4 hover:text-primary">
        <Phone className="h-4 w-4 text-primary" />
        <div>
          <h3 className="font-semibold text-body font-dmsans">Phone</h3>
          <p className="text-caption">{address.phone}</p>
        </div>
      </LocalizedClientLink>

      <LocalizedClientLink
        href={`mailto:${address.email}`}
        className="flex gap-4 hover:text-primary"
      >
        <Mail className="h-4 w-4 text-primary" />
        <div>
          <h3 className="font-semibold text-body font-dmsans">E–Mail</h3>
          <p className="text-caption">{address.email}</p>
        </div>
      </LocalizedClientLink>
    </div>
  </div>
)

export default AddressComponent
