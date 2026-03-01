import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (page) => `/` + page._raw.flattenedPath.replace('pages/', ''),
    },
  },
}))

export const Service = defineDocumentType(() => ({
  name: 'Service',
  filePathPattern: `services/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    icon: { type: 'string', required: false },
    features: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (service) => `/services/` + service._raw.sourceFileName.replace('.md', ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Page, Service],
})
