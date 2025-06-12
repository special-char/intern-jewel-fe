import { PayloadRequest } from "payload"

export const findImageByFilename = async (req :PayloadRequest, filename : string) => {
    try {
      const result = await req.payload.find({
        collection: "media",
        where: { filename: { equals: filename } },
      })
      return result.docs.length > 0 ? result.docs[0].id : undefined
    } catch (error) {
      console.error(`Error finding image ${filename}:`, error)
      return undefined
    }
  }
  