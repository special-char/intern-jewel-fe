import { Metadata } from "next"
import { listCartOptions, retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import { getBaseURL } from "@lib/util/env"
import { StoreCartShippingOption } from "@medusajs/types"
import CartMismatchBanner from "@modules/layout/components/cart-mismatch-banner"
import FreeShippingPriceNudge from "@modules/shipping/components/free-shipping-price-nudge"
import { PayLoadNavbar } from "@/blocks/PayloadHeader/Component"
import { PayloadFooter } from "@/blocks/PayloadFooter/Component"
import { ToogleTheme } from "@/blocks/Theme/Component"
import { FaqLayout2 } from "@/blocks/AccordianLayout/layouts/FaqLayout2/Component"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  const customer = await retrieveCustomer()
  const cart = await retrieveCart()
  let shippingOptions: StoreCartShippingOption[] = []

  if (cart) {
    const { shipping_options } = await listCartOptions()

    shippingOptions = shipping_options
  }

  return (
    <>
      <ToogleTheme />
      <PayLoadNavbar />
      {customer && cart && (
        <CartMismatchBanner customer={customer} cart={cart} />
      )}

      {cart && (
        <FreeShippingPriceNudge 
          variant="popup"
          cart={cart} 
          shippingOptions={shippingOptions} 
        /> 
      )}
      {props.children} 
          <PayloadFooter />
    </>
  )
}
