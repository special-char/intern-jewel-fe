import React from "react"
import { CategoryLayout2 as CategoryLayoutType, Media } from "@/payload-types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { ImageMedia } from "@components/payload/Media/ImageMedia"

export function CategoryLayout2(props: CategoryLayoutType) {
    const { categories } = props

    return (
        <section className="content-container mt-20 mb-20">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center">
                {categories?.map((category) => (
                    <div
                        key={category.id}
                        className="relative aspect-[9/16] w-full max-w-[220px] group overflow-hidden"
                    >
                        <LocalizedClientLink
                            href={category.link?.url || ""}
                            className="block w-full h-full relative"
                        >
                            {/* Default Image */}
                            <ImageMedia
                                resource={category.thumbnail as Media}
                                imgClassName="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                                fill
                            />

                            {/* Hover Image with Text */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out border border-primary">
                                <ImageMedia
                                    resource={category.image as Media}
                                    imgClassName="w-[85%] h-[85%] object-contain rotate-[25deg] group-hover:rotate-0 transition-transform duration-500 ease-in-out"
                                    fill
                                />
                                <div className="absolute bottom-4 left-0 right-0 bg-inherit bg-opacity-80 text-spacing text-center text-muted-foreground py-2 px-3">
                                    {category.text}
                                </div>
                            </div>
                        </LocalizedClientLink>
                    </div>
                ))}
            </div>
        </section>
    )
}
