import { findImageByFilename } from "@lib/util/findImageByFilename"
import type { Block } from "payload"

export const FeatureLayout2: Block = {
  slug: "featureLayout2",
  interfaceName: "FeatureLayout2",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_featurelayout2.png",
  admin: { group: "Feature Layout" },
  fields: [
    {
      name: "features",
      type: "array",
      required: true,
      maxRows: 4,
      defaultValue: async ({ req }) => {
        const featuresData = [
          {
            imageFile: "homelayout1_featureImage1.svg",
            title: "Certified",
            description: "Certificates of authenticity",
          },
          {
            imageFile: "homelayout1_featureImage2.svg",
            title: "Secure",
            description: "Certified marketplace",
          },
          {
            imageFile: "homelayout1_featureImage3.svg",
            title: "Shipping",
            description: "Free, fast, and reliable",
          },
          {
            imageFile: "homelayout1_featureImage4.svg",
            title: "Transparent",
            description: "Hassle-free return policy",
          },
        ]

        const features = await Promise.all(
          featuresData.map(async (feature) => {
            const featureIcon = await findImageByFilename(
              req,
              feature.imageFile
            )
            return {
              featureIcon,
              title: feature.title,
              description: feature.description,
            }
          })
        )

        return features
      },
      fields: [
        {
          name: "featureIcon",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "title",
          type: "text",
          required: true,
          defaultValue: "Certified",
        },
        {
          name: "description",
          type: "text",
          required: true,
          defaultValue: "Certificates of authenticity",
        },
      ],
    },
  ],
}
