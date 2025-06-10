import { FooterLayout1 } from "@/payload-types"
import { Button } from "@lib/components/ui/button"

const Newsletter = ({ button }: FooterLayout1["newsletter"]) => (
  <form className="flex flex-col sm:flex-row gap-4 sm:gap-8">
    <input
      type="email"
      placeholder="Enter your email address …"
      className="w-1/2 border-b  bg-transparent border-gray-400 focus:outline-none placeholder-gray-500 py-2"
    />
    <Button className="w-max" size={"lg"}>
      {button.label}
    </Button>
  </form>
)

export default Newsletter
