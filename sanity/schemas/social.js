import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'social',
      title: 'Social',
      type: "document",
    }),
    ({
        name: 'title',
        title: 'Title',
        description: 'Social media platform',
        type: "string",
        validation: (Rule) => Rule.min(0).max(100),
      }),
    ({
        name: 'url',
        title: 'Url',
        type: "url",
    }),
  ],
})
 