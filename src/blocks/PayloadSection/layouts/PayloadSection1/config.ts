import { Block } from "payload"

export const PayloadSectionLayout1: Block = {
  slug: "payloadSectionLayout1",
  interfaceName: "PayloadSectionBlock",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail-sectionwrapper.png", // Replace with real image if needed
  admin: {
    group: "Banner Layout",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Our Journey",
    },
    {
      name: "richTextContent",
      type: "richText",
      required: true,
      defaultValue: {
        root: {
          type: "root",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "The journey of Axels is a tale of relentless passion and unwavering dedication. It began with a vision—a vision to redefine luxury, to make it more than just a material possession, but a tangible expression of the heart's deepest emotions.Founded by a team of artisans, designers, and dreamers, Axels came to life as a response to the impersonal nature of mass-produced jewelry. We recognized the need for jewelry that tells a story, jewelry that becomes a part of your life's narrative, jewelry that carries your memories and milestones. From our humble beginnings, we embarked on a path of discovery, craftsmanship, and creativity. Our ateliers became the canvas where ideas turned into reality, where raw materials transformed into treasures, and where every piece was imbued with a touch of artistry. As we grew, so did our commitment to the art of fine jewelry. Each creation that left our workshop was a testament to our dedication to excellence. We knew that our pieces were not mere adornments but symbols of love, commitment, and personal identity. Over the years, Axels has become a name synonymous with grace and sophistication. Our jewelry has graced the most intimate moments in people's lives—engagements, weddings, anniversaries, and more. We've celebrated with you as you marked achievements, milestones, and personal victories. Our journey has been a constant evolution, fueled by the stories you've shared with us. Your trust and loyalty have been our guiding stars, inspiring us to continually push the boundaries of creativity and craftsmanship. Today, as we look back on our journey, we remain humbled by the love and support we've received from our valued customers. But we also look forward with boundless enthusiasm, as we continue to explore new horizons and create jewelry that is not just beautiful but meaningful. As Axels continues to evolve, we invite you to be a part of our journey. Explore our collections, share in our passion for artistry, and let us be a part of your life's most beautiful moments. With Axels, your journey meets our craftsmanship, and together, we create stories that last a lifetime.Thank you for being a part of the Axels story—a story that weaves together love, art, and timeless elegance.",
                },
              ],
            },
          ],
        },
      },
    },
  ],
}