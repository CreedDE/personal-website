import { CaseIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'imprint',
  title: 'Imprint',
  type: 'document',
  icon: CaseIcon,
  groups: [
    { name: 'address', title: 'Address' },
    { name: 'representative', title: 'Representative' },
    { name: 'contact', title: 'Contact' },
    { name: 'links', title: 'Liability of Links' },
    { name: 'content', title: 'Liability of Content' },
    { name: 'copyright', title: 'Copyright' }
  ],
  fields: [
    defineField({
      name: 'fullName',
      description: 'This field is the name of the person / company',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'address'
    }),
    defineField({
      name: 'street',
      description: 'Street of the Address',
      title: 'Street',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'address'
    }),
    defineField({
      name: 'postal',
      description: 'Postal Code of the Address',
      title: 'Postal Code',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'address'
    }),
    defineField({
      name: 'name',
      title: 'Name of Representative',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'representative'
    }),
    defineField({
      name: 'email',
      title: 'Email',
      description: 'E-Mail Address to contact owner of site',
      type: 'string',
      group: 'contact'
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      description: 'Phone Number to contact owner of site',
      type: 'string',
      group: 'contact'
    }),
    defineField({
      name: 'linkTitle',
      title: 'Liability Link Title',
      type: 'string',
      group: 'links'
    }),
    defineField({
      name: 'linkText',
      title: 'Liability Link Text',
      type: 'array',
      group: 'links',
      of: [
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              { title: 'Italic', value: 'em' },
              { title: 'Strong', value: 'strong' }
            ]
          },
          styles: [],
          type: 'block'
        })
      ]
    }),
    defineField({
      name: 'contentTitle',
      title: 'Liability Content Title',
      type: 'string',
      group: 'content'
    }),
    defineField({
      name: 'contentText',
      title: 'Liability Content Text',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              { title: 'Italic', value: 'em' },
              { title: 'Strong', value: 'strong' }
            ]
          },
          styles: [],
          type: 'block'
        })
      ]
    }),
    defineField({
      name: 'copyrightTitle',
      title: 'Copyright Title',
      type: 'string',
      group: 'copyright'
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'array',
      group: 'copyright',
      of: [
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              { title: 'Italic', value: 'em' },
              { title: 'Strong', value: 'strong' }
            ]
          },
          styles: [],
          type: 'block'
        })
      ]
    })
  ]
});
