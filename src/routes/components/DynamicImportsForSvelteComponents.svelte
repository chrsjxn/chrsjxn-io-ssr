<script>
  import { Layout, MarkdownPost } from '../Components'
  import NextPostLink from '../Components/NextPostLink.svelte'
  import markdown from '../Markdown/DynamicImportsForSvelteComponents.md'

  export let nextPost = null
</script>

<Layout>
  <MarkdownPost {markdown} />
  <NextPostLink {nextPost} />
</Layout>
