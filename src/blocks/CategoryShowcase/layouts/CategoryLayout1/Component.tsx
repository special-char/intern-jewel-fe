import Thumbnail from "@modules/products/components/thumbnail"
import { Button } from "@lib/components/ui/button"
import { cn } from "@lib/lib/utils"
import { CategoryLayout1 as CategoryLayoutType, Media } from "@/payload-types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ImageMedia } from "@components/payload/Media/ImageMedia"

export function CategoryLayout1(props: CategoryLayoutType) {
  const { heading, categories } = props

  return (
    <section className="flex flex-col gap-12">
      <h4 className="text-center">{heading}</h4>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={cn(
              "relative group overflow-hidden aspect-3/4",
              index === 3 && "lg:col-span-2 aspect-auto"
            )}
          >
            <ImageMedia
              resource={category?.image as Media}
              imgClassName="transition-transform duration-300 ease-in-out group-hover:scale-110"
              fill
            />

            <div className="absolute inset-0 flex flex-col justify-end h-full text-white gap-2 sm:gap-4 p-4 sm:p-8">
              <h4 className="text-heading5 uppercase">{category.name}</h4>
              <p>{category.tagline}</p>
              <Button variant={"outline"} className="w-max">
                <LocalizedClientLink href={category.button.url || ""}>
                  {category.button.label}
                </LocalizedClientLink>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
