import { FooterLayout1 } from "@/payload-types"
import { Button } from "@lib/components/ui/button"

const Newsletter = ({
  title,
  description,
  button,
}: FooterLayout1["newsletter"]) => (
  <div className="w-full">
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-16">
      {/* Left side - Title & Description */}
      <div className="lg:w-1/2">
        <p className="text-[#C5A362] uppercase text-[14px] font-medium tracking-[6px] font-['DM_Sans']">
          {title}
        </p>
        <h2 className="font-['Playfair_Display'] text-[40px] font-normal leading-[1.1] mt-2">
          {description}
        </h2>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2">
        <form className="flex flex-col w-full  sm:flex-row gap-8 lg:items-end">
          <input
            type="email"
            placeholder="Enter your email address ..."
            className="flex-1 border-b bg-transparent border-white  
              focus:outline-none placeholder-neutral-400  pb-2"
          />
          <Button
            className="w-full sm:w-max uppercase"
            size="xl"
            variant="default"
          >
            {button.label}
          </Button>
        </form>
      </div>
    </div>
  </div>
)

export default Newsletter
