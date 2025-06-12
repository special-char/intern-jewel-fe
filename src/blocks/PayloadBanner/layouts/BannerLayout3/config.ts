import type { Block } from 'payload'

export const BannerLayout3: Block = {
  slug: 'bannerLayout3',
  interfaceName: 'BannerLayout3',
  admin: {
    group: 'Banner Layout',
  },
  fields: [
    {
      name: 'image',
      type: 'group',
      fields: [
        {
          name: 'variant',
          type: 'select',
          options: [
            { value: 'upload', label: 'Upload' },
            { value: 'url', label: 'URL' },
          ],
          defaultValue: 'upload',
        },
        {
          name: 'defaultImgUrl',
          type: 'text',
          admin: {
            condition: (_, { variant }) => variant === 'url',
          },
        },
        {
          name: 'defaultImg',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, { variant }) => variant === 'upload',
          },
        },
      ],
    },
    {
      name: 'text',
      type: 'text',
      required: true,
    },
    {
      name: 'subtext',
      type: 'textarea',
    },
    {
      name: 'button',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
