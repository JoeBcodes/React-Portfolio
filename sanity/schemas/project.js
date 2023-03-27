import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: "Title of the project",
      type: 'string',
    }),
    ({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    ({
    name: "summary",
    title: "Summary",
    type: "text",
    }),
        ({
          name: "technologies",
          title: "Technologies",
          type: "array",
          of: [{ type: "reference", to: { type: "skill" } }],
        }),
        ({
          name: 'languageUsed',
          title: 'LanguageUsed',
          description: 'Language Used in Code',
          type: "number",
          validation: (Rule) => Rule.min(0).max(100),
        }),
        ({
          name: "linktoBuild",
          title: "LinkToBuild",
          type: "url",
        }),
  ],
})
 