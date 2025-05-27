import Design1 from "@/blocks/ProductsCollection/components/productcard-design/Design1"
import Design2 from "@/blocks/ProductsCollection/components/productcard-design/Design2"

const getProductComponent = (designType: string) => {
  switch (designType) {
    case "design1":
      return Design1
    case "design2":
      return Design2
    default:
      return Design1
  }
}

export default getProductComponent
