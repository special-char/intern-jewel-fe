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
        findImageByFilename(req, "66d5c8bb7dc83b58bb213479_Image-43-p-1602.jpg"),
    },
  ],
}
