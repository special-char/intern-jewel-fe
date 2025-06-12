import { FooterLayout1 } from "@/payload-types"
import { Button } from "@lib/components/ui/button"

const Newsletter = ({
  title,
  description,
  button,
}: FooterLayout1["newsletter"]) => (
  <div className="flex flex-col gap-8">
    <p className="text-subtitle font-semibold text-primary">{title}</p>
    <p className="text-caption">{description}</p>
    <form className="flex flex-col gap-6">
      <input
        type="email"
        placeholder="Enter your email address …"
        className="border-b bg-transparent border-gray-400 focus:outline-none placeholder-gray-500 py-2"
      />
      <Button className="w-max" size={"lg"}>
        {button.label}
      </Button>
    </form>
  </div>
)

export default Newsletter
