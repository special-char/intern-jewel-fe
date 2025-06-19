import { Block } from "payload";

export const ProductCardLayout1: Block = {
  slug: "productCard",
  interfaceName: "ProductCardLayout1",
  labels: {
    singular: "Product Card",
    plural: "Product Cards",
  },
  fields: [
    {
      name: "imageUrl",
      label: "Image URL",
      type: "text",
      required: true,
      defaultValue: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    },
    {
      name: "category",
      label: "Category",
      type: "text",
      required: false,
    },
    {
      name: "title",
      label: "Product Title",
      type: "text",
      required: true,
    },
    {
      name: "price",
      label: "Price",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: false,
    },
  ],
};
