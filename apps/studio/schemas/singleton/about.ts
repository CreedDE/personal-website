import { LinkIcon, UserIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About Me',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'Title that gets displayed on the page',
      type: 'string',
      validation: (rule) => rule.min(4).required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        defineArrayMember({
          lists: [],
          styles: [],
          type: 'block'
        })
      ]
    }),
    defineField({
      name: 'social',
      title: 'Social Media Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Social Media',
          name: 'social',
          icon: LinkIcon,
          fields: [
            defineField({
              name: 'href',
              type: 'url',
              title: 'URL'
            }),
            defineField({
              name: 'provider',
              title: 'Provider',
              type: 'string'
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'file',
          fields: [
            {
              name: 'language',
              title: 'Language',
              type: 'string',
              validation: (rule) => rule.max(2).required()
            }
          ]
        })
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'About Me'
      };
    }
  }
});
