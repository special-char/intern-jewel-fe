import React from "react"
import { ProductGallery } from "../../components/ProductGallery"

export const ProductInfoLayout1 = (props: ) => {
    const { carousel, banner } = props
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-6">
            <ProductGallery />
        </section>
    )
}
