import type { Block } from 'payload'
import { findImageByFilename } from '@lib/util/findImageByFilename'

export const ImageBlock: Block = {
  slug: 'imageBlock',
  interfaceName: 'ImageBlock',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      defaultValue: async ({ req }) =>
        findImageByFilename(req, "about-us-image.jpg"),
    },
  ],
}
