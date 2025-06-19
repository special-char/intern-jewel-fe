import React from "react"
import RichText from "@components/payload/RichText"
import type { ListPageHeaderLayout1 as ListPageHeaderLayout1Type } from "@/payload-types"

export const ListPageHeaderLayout1 = (props: ListPageHeaderLayout1Type) => {
    const { heading, subtext } = props || {}

    return (
        <div>
            <h3 className="pb-2">{heading}</h3>
            <RichText data={subtext} className="-ml-7" />
        </div>
    )
}
export default ListPageHeaderLayout1