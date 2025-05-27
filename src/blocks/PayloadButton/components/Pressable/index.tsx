import { Button } from "@lib/components/ui/button"
import { cn } from "@lib/lib/utils"
import Link from "next/link"

export const Pressable = ({
  button,
  variant = "secondary",
}: {
  button: any
  variant: string
}) => {
  if (!button) return null

  const { type, reference, url, label } = button

  const href =
    type === "reference" &&
    typeof reference?.value === "object" &&
    reference.value?.slug
      ? `/${reference?.relationTo !== "pages" ? reference?.relationTo : ""}/${
          reference.value.slug
        }`
      : url || ""

  if (!href) return null

  return (
    <Button variant={variant as any}>
      {variant === "animated" && (
        <span className="absolute left-1/2 bottom-0 w-4 h-4 bg-primary rounded-full scale-0 group-hover:scale-[15] transition-transform duration-300 ease-in-out transform -translate-x-1/2 translate-y-1/2" />
      )}
      <Link
        href={href}
        className={cn("", {
          "relative z-10 duration-300 ease-out group-hover:text-white":
            variant === "animated",
        })}
      >
        {label && label}
      </Link>
    </Button>
  )
}
