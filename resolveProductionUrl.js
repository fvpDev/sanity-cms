const previewSecret = 'preview-time' // Copy the string you used for NEXT_EXAMPLE_CMS_SANITY_PREVIEW_SECRET
const projectUrl = 'http://localhost:3000'

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
}
