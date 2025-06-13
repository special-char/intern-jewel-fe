import type { Block } from 'payload'

export const ImageBlock: Block = {
  slug: 'imageBlock',
  interfaceName: 'ImageBlock',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'aspectRatio',
      type: 'select',
      defaultValue: '16/9',
      options: [
        {
          label: '16:9',
          value: '16/9',
        },
        {
          label: '4:3',
          value: '4/3',
        },
        {
          label: '1:1',
          value: '1/1',
        },
        {
          label: '1280:568',
          value: '1280/568',
        },
      ],
    },
  ],
}
